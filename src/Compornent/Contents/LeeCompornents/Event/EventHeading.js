import React from 'react';
import { Link } from "react-router-dom";
import styles from "./aaa.module.css";



function EventHeading() {
    return (
    
        <div>
            
           <img className='eventmenuimg1' src="https://www.gong-cha.co.kr/view/gongcha/images/common/page_top_visual_event.jpg" alt="" />
            <li className='eventmenuli'><Link to="/Eventmenu01">진행중인 이벤트</Link></li>
            <li className='eventmenuli'><Link to="/Eventmenu02">종료된 이벤트</Link></li>
            <li className='eventmenuli'><Link to="/Eventmenu03">당첨자 발표</Link></li>
            <div className='abc'></div>
            <div className={styles.aaa}>
              
            </div>
        </div>
      
    );
  }
export default EventHeading;
