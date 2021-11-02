import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileNavigator from "./react-filemanager/lib/index";
import FileManager from "./react-filemanager/lib/index";
import connectorNodeV1 from "./react-filemanager-connector-node-v1/lib/index";
import { render } from '@testing-library/react';

function App() {
//   const apiOptions = {
//     ...connectorNodeV1.apiOptions,
//     apiRoot: 'http://localhost:3020' // Or you local Server Node V1 installation.
//   }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // <div className="App">
    //     <div style = {{padding: '5px'}}>
    //     <h1 className = 'header'>AFFORDABLE File Manager</h1>
    //    </div>
    //       <FileManager className = {(this).state.managerClass}>
    //         <FileNavigator
    //           id="filemanager-1"
    //           api={connectorNodeV1.api}
    //           apiOptions={apiOptions}
    //           capabilities={connectorNodeV1.capabilities}
    //           listViewLayout={connectorNodeV1.listViewLayout}
    //           viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
    //           className = {this.state.dropZoneUI}
    //         />
    //       </FileManager>
    // </div>
  );
}

export default App;
