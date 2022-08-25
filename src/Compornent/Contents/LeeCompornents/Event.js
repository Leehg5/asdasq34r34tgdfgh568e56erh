
import React from "react";
import Eventmenu01 from "./Event/Eventmenu01";
import Eventmenu02 from "./Event/Eventmenu02";
import Eventmenu03 from "./Event/Eventmenu03";
import EventHeading from "./Event/EventHeading";
import { Routes, Route } from "react-router-dom";



function Event() {
  return(
    <div>
    <> 

    <EventHeading />
    <Routes>  
    <Route path="/Eeventmenu01" element={<Eventmenu01 />}/>
    <Route path="/Eventmenu02" element={<Eventmenu02 />}/>
    <Route path="/Eventmenu03" element={<Eventmenu03 />}/>
    </Routes>

    </>
  </div>
  )
  }
export default Event;
