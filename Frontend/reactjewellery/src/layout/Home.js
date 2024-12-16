import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <section className="homemain">
            <h1>VR Jewellery</h1>
            <p>Since 1994</p>
            <Link to="/Product" className="btn btn-outline-warning">Trendy collections</Link>
        </section>
        <section className="Aboutshop">
            <h2 className="Aboutshoptitle">About our Shop</h2>
            <p className="Aboutshopcont">
            Welcome to VR Jewellery, where craftsmanship meets timeless elegance. Established with a passion for creating exquisite jewelry, we bring you pieces that embody beauty, precision, and artistry. Our journey began with a simple vision: to provide stunning, high-quality jewelry that celebrates life's special moments.<br></br><br></br>

            At VR Jewellery, we believe that every piece tells a story. Whether it’s a sparkling engagement ring, a timeless necklace, or a bespoke design, our creations are crafted with care and attention to detail. From classic to contemporary styles, our diverse collection ensures that there’s something unique for every taste and occasion.
            </p>
            <Link to="/About" className="btn btn-outline-info">Know More</Link>
        </section>

        <section className="visit">
            <h2 className="aboutshoptitle">Visit Our Store</h2>
            <p className="addresscont">VR Jewellery, Majectic Avenue,<br></br>opp to Axis Bank, Semmanchery, Chennai, Tamil Nadu 600019</p>
        </section>
    </div>
  )
}

export default Home