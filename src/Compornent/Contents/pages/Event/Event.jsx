import React from "react";
import Heading from "./Heading";
import Menu01 from "./Menu01";
import Menu02 from "./Menu02";
import Menu03 from "./Menu03";
import { Routes, Route } from "react-router-dom";


const Event = () => {
  return (
    <div>
      
      <Heading />
      <Routes>  
    <Route path="/Menu01" element={<Menu01 />}/>
    <Route path="/Menu02" element={<Menu02 />}/>
    <Route path="/Menu03" element={<Menu03 />}/>
  </Routes>
  </div>
  ) 
  
};

export default Event;
