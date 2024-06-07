1.  Overview : 

The FileTree component is a React component designed to render a file system structure represented by nested objects. It renders files and directories as elements with a data-testid="node" attribute. Directories can be expanded or collapsed by clicking on a data-testid="dir-expand" element within the corresponding directory node.

2. Props : 

The FileTree component expects the following props:

root: An object representing the root directory of the file system. The object should adhere to the following structure:

{
    name: string, // Name of the directory
    type: "dir", // Type of the node (either "dir" for directory or "file" for file)
    children: array, // Array of child nodes
}

3. Rendering :

-> Each directory node includes a clickable element to expand or collapse the directory.
-> All elements are rendered conditionally based on their visibility.
-> The original order of elements in the object is maintained.

4. Behavior :

-> Initially, all directories are collapsed except for the root directory.
-> Clicking on the expand button of a directory reveals its immediate children and any previously expanded descendants.
-> Each directory's state is independent, ensuring that collapsing a parent directory does not impact its child directories.

5. Design and Style : 

-> The file system structure is visually represented with nested indentation to illustrate parent-child relationships.
-> Files and folders are visually differentiated, potentially through icons or other identifiers.
-> Basic CSS styling is applied to ensure a clean and attractive user interface.