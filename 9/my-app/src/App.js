import React from "react"
import { Routes, Route } from "react-router-dom";
import { PC } from './components/PC';
import { PCMonitor } from './components/PCMonitor';
import { Layout } from "./Layout";

import './App.css';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <PC />}/>
        <Route path="monitor" element={
            <PCMonitor />
        }/>
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  </>
  );
}

export default App;
