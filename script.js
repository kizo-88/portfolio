
import fs from 'fs';
let content = fs.readFileSync('src/pages/Project.jsx', 'utf8');

const imports = \// Import images
import img1 from '../assets/0001.png';
import img2 from '../assets/0002.png';
import img3 from '../assets/0003.png';
import img4 from '../assets/0004.png';
import img5 from '../assets/0005.png';
import img6 from '../assets/0006.png';
import img7 from '../assets/0007.png';
import img8 from '../assets/0008.png';
import img9 from '../assets/0009.png';
import img10 from '../assets/0010.png';\;

content = content.replace(/\/\/ Import images[\s\S]*?import socialAppImg from '\.\.\/assets\/social-app\.png';/, imports);

let count = 0;
content = content.replace(/image: (aiDashboardImg|ecommerceImg|socialAppImg),/g, () => {
    count++;
    return 'image: img' + ((count - 1) % 10 + 1) + ',';
});

fs.writeFileSync('src/pages/Project.jsx', content);

