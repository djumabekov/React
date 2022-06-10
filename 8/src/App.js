import React from "react"
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import { Main } from "./pages/Main";
import { Info } from "./pages/Info";
import { Landmark } from "./pages/Landmark";
import { OtherLandmarks } from "./pages/OtherLandmarks";
import { Photos } from "./pages/Photos";
import { Userpage } from "./pages/Userpage";
import { Page404 } from "./pages/Page404";
import './App.css';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />

          <Route path="main" element={<Main />}/>
		
          <Route path="info" element={<Info />}/>

          <Route path="landmark" element={<Landmark />}/>

          <Route path="landmark/:id" element={<Landmark />}/>

          <Route path="otherlandmarks" element={<OtherLandmarks />}/>

          <Route path="userpage" element={<Userpage />}/>

          <Route path="photos" element={<Photos />}/>
		
          {/* <Route path="products/:id" element={<Product />}/>  */}

      </Route>
	  
      <Route path="*" element={<Page404 />} />

      </Routes>
    </>
  );
}

export default App;
