import React from "react"
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Delivery } from "./pages/Delivery";
import { Products } from "./pages/Products";
import { Support } from "./pages/Support";
import { Page404 } from "./pages/Page404";
import { Product } from "./pages/Product";
import { Search } from "./pages/Search";
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />

          <Route path="main" element={<Main />}/>
		
          <Route path="products" element={<Products />}/>

          <Route path="delivery" element={<Delivery />}/>

          <Route path="contacts" element={<Contacts />}/>

          <Route path="about" element={<About />}/>

          <Route path="support" element={<Support />}/>
		
          <Route path="products/:id" element={<Product />}/> 

          <Route path="search" element={<Search />}/> 
      </Route>
	  
      <Route path="*" element={<Page404 />} />

      </Routes>
    </>
  );
}

export default App;
