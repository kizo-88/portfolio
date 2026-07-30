import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './WorkflowBuilder.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'User Request' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Sidebar = () => {
  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/reactflow-label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Drag nodes to build workflow</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input', 'Start / Trigger')} draggable>
        Start / Trigger
      </div>
      <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'default', 'Process / Action')} draggable>
        Process / Action
      </div>
      <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'default', 'Database')} draggable>
        Database
      </div>
      <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'default', 'API Call')} draggable>
        API Call
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output', 'Output / End')} draggable>
        Output / End
      </div>
    </aside>
  );
};

const DnDFlow = ({ onWorkflowChange }) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  const onNodeDoubleClick = useCallback((event, node) => {
    const newLabel = prompt("Enter new text for this node:", node.data.label);
    if (newLabel !== null && newLabel.trim() !== "") {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return { ...n, data: { ...n.data, label: newLabel } };
          }
          return n;
        })
      );
    }
  }, [setNodes]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const label = event.dataTransfer.getData('application/reactflow-label');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${label}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes],
  );
  
  // Whenever nodes or edges change, generate a readable text summary
  useEffect(() => {
    generateSummary(nodes, edges);
  }, [nodes, edges]);

  const generateSummary = (currentNodes, currentEdges) => {
    if (!onWorkflowChange) return;
    
    let summary = "Workflow Details:\n";
    summary += `Total Nodes: ${currentNodes.length}\n`;
    
    if (currentEdges.length === 0) {
      summary += "No connections made yet.\n";
    } else {
      summary += "\nConnections:\n";
      currentEdges.forEach(edge => {
        const sourceNode = currentNodes.find(n => n.id === edge.source);
        const targetNode = currentNodes.find(n => n.id === edge.target);
        if (sourceNode && targetNode) {
          summary += `- [${sourceNode.data.label}] -> [${targetNode.data.label}]\n`;
        }
      });
    }
    
    // Also include raw nodes for complex parsing if needed by the owner later
    summary += "\n\nRaw Nodes:\n";
    summary += currentNodes.map(n => `- ${n.data.label}`).join("\n");
    
    onWorkflowChange(summary);
  };

  return (
    <div className="dndflow">
      <Sidebar />
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeDoubleClick={onNodeDoubleClick}
          fitView
        >
          <Controls />
          <Background color="rgba(255,255,255,0.1)" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default function WorkflowBuilder({ onWorkflowChange }) {
  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
        Visually describe your desired workflow (Drag nodes to canvas, connect them, and <strong>double-click</strong> a node to edit its text)
      </p>
      <ReactFlowProvider>
        <DnDFlow onWorkflowChange={onWorkflowChange} />
      </ReactFlowProvider>
    </div>
  );
}
