const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), '.next');

function injectScript(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('dashboard-console-capture.js')) {
      return;
    }
    
    const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
    
    if (content.includes('</head>')) {
      content = content.replace('</head>', `${scriptTag}</head>`);
    } else if (content.includes('<body')) {
      content = content.replace('<body', `${scriptTag}<body`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected console capture script into ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

processDirectory(distDir);
console.log('Console capture script injection complete');