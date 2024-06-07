import React, { useState } from 'react';
import { CiFolderOn } from "react-icons/ci";
import { PiFolderOpenThin } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
import '../components/FileTree.css'; 

const FileNode = ({ node, expandedNodes, setExpandedNodes }) => {
  const isExpanded = expandedNodes.includes(node.name);

  const handleToggle = () => {
    if (isExpanded) {
      setExpandedNodes(expandedNodes.filter(name => name !== node.name));
    } else {
      setExpandedNodes([...expandedNodes, node.name]);
    }
  };

  return (
    <li data-testid="node" className="tree">
      {node.type === 'dir' ? (
        <div onClick={handleToggle} data-testid="dir-expand" className="dir-name">
          {isExpanded ? <PiFolderOpenThin className='icon'/> : <CiFolderOn className='icon'/>} {node.name}
        </div>
      ) : (
        <div className="file-name"><CiFileOn className='icon'/> {node.name}</div>
      )}
      {isExpanded && node.children && (
        <ul>
          {node.children.map((child, index) => (
            <FileNode key={index} node={child} expandedNodes={expandedNodes} setExpandedNodes={setExpandedNodes} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FileTree = ({ root }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);

  return (
    <ul>
      <FileNode node={root} expandedNodes={expandedNodes} setExpandedNodes={setExpandedNodes} />
    </ul>
  );
};

export default FileTree;
