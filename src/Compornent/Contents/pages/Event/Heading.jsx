import React from 'react';
import { Link } from "react-router-dom";

function Heading() {
  return (
    
      <div>
        
          <li><Link to="/Menu01">진행중인 이벤트</Link></li>
          <li><Link to="/Menu02">종료된 이벤트</Link></li>
          <li><Link to="/Menu03">당첨자 발표</Link></li>
          <div className='abc'></div>
      </div>
    
  );
}
export default Heading;