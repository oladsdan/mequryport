import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";

function App() {
  return (
  	<div>
	  <BrowserRouter>
	    <Routes>
		    <Route path = "/" element={< Home/>}/>
		    
		</Routes>
	  </BrowserRouter>
    </div>
  );
}

export default App;