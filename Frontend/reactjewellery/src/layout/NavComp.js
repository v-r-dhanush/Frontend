import {Link} from "react-router-dom";

const NavComp=()=>{

    return(
        <div className="nav">
            <Link to="home" className='btn btn-outline-primary'>Home</Link>
            <Link to="about" className='btn btn-outline-warning'>About</Link>
            <Link to="product" className='btn btn-outline-info'>Product</Link>
            <Link to="contact" className='btn btn-outline-secondary'>Contact</Link>
        </div>
    )
}
export default NavComp;