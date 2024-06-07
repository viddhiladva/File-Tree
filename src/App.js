import React from 'react';
import FileTree from './components/FileTree';

const App = () => {
  const fileStructure = {
    name: "My workspace",
    type: "dir",
    children: [
      {
        name: "Design projects",
        type: "dir",
        children: [
          {
            name: "App Redesign",
            type: "file"
          }
        ]
      },
      {
        name: "Development",
        type: "dir",
        children: [
          {
            name: "Frontend Tasks",
            type: "file"
          },
        ]
      },
      {
        name: "Marketing",
        type: "file"
      },
      {
        name: "Sales pitch",
        type: "file"
      }
    ]
  };

  return (
    <div className="App">
      <FileTree root={fileStructure} />
    </div>
  );
};

export default App;
