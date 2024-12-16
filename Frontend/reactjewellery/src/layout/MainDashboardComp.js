import React from 'react';
import {Outlet} from 'react-router-dom';
import FooterComp from "./FooterComp";
import NavComp from "./NavComp";
import gold from '../Assests/gold2.jpeg'


const MainDashboardComp = () => {
  return (
    <div className="container">
        <div className="logotitle">
            <img src={gold} alt='Gold back' className='Logoimg'></img>
            <h1 className="titleword">VR JEWELLERY</h1>
        </div>
        <div className='card'>
            <div className='card-header border-primary'>
                <NavComp/>
            </div>
            <div className='card-body border primary'>
                <Outlet/>
                <div className='card-footer border-primary'>
                    <FooterComp/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainDashboardComp