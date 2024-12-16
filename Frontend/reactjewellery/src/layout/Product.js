import React from 'react';
import Gold from '../Assests/gold1.jpeg';
import platinum from '../Assests/platinumring.jpeg';
import diamond from '../Assests/diamond1.jpeg';
import goldr from '../Assests/goldring.jpeg'; 
import diamond2 from '../Assests/diamondring.jpeg';
import gold2 from '../Assests/gold2.jpeg'

const Product = () => {
  return (
    <div className="productpage">
        <h2 classname="product-page">Explore Our Products</h2>

        <div className="product-container">
            <div className="product-image">
                <img
                src={Gold}
                alt="Gold Jewel"
                className="product-img"
                />
            </div>

            <div className="product-details">
                <h3 className="product-name">Product Details</h3>
                <table className="product-table">
                    <tbody>
                        <tr>
                            <td className='prodtitle'>Product Name:</td>
                            <td className='prodvalue'>Gold Necklace</td>
                        </tr>
                        <tr>
                            <td className='prodtitle'>Product Price:</td>
                            <td className='prodvalue'>&#8377;5,00,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr className='differentiateline'></hr>

        <div className="product-container">
            <div className="product-image">
                <img
                src={diamond}
                alt="Diamond Jewel"
                className="product-img"
                />
            </div>

            <div className="product-details">
                <h3 className="product-name">Product Details</h3>
                <table className="product-table">
                    <tbody>
                        <tr>
                            <td>Product Name:</td>
                            <td>Diamond Necklace</td>
                        </tr>
                        <tr>
                            <td>Product Price:</td>
                            <td>&#8377;8,00,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr className='differentiateline'></hr>

        <div className="product-container">
            <div className="product-image">
                <img
                src={goldr}
                alt="Gold Jewel"
                className="product-img"
                />
            </div>

            <div className="product-details">
                <h3 className="product-name">Product Details</h3>
                <table className="product-table">
                    <tbody>
                        <tr>
                            <td>Product Name:</td>
                            <td>Gold Ring</td>
                        </tr>
                        <tr>
                            <td>Product Price:</td>
                            <td>&#8377;1,00,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr className='differentiateline'></hr>

        <div className="product-container">
            <div className="product-image">
                <img
                src={platinum}
                alt="Platinum Jewel"
                className="product-img"
                />
            </div>

            <div className="product-details">
                <h3 className="product-name">Product Details</h3>
                <table className="product-table">
                    <tbody>
                        <tr>
                            <td>Product Name:</td>
                            <td>Platinum ring</td>
                        </tr>
                        <tr>
                            <td>Product Price:</td>
                            <td>&#8377;1,50,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr className='differentiateline'></hr>

        <hr className='differentiateline'></hr>

        <div className="product-container">
            <div className="product-image">
                <img
                src={diamond2}
                alt="Diampnd Jewel"
                className="product-img"
                />
            </div>

            <div className="product-details">
                <h3 className="product-name">Product Details</h3>
                <table className="product-table">
                    <tbody>
                        <tr>
                            <td>Product Name:</td>
                            <td>Diamond ring</td>
                        </tr>
                        <tr>
                            <td>Product Price:</td>
                            <td>&#8377;2,50,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <hr className='differentiateline'></hr>

        <div className="product-container">
            <div className="product-image">
                <img
                src={gold2}
                alt="Gold Jewel"
                className="product-img"
                />
            </div>

            <div className="product-details">
                <h3 className="product-name">Product Details</h3>
                <table className="product-table">
                    <tbody>
                        <tr>
                            <td>Product Name:</td>
                            <td>Marriage Gold Jewels</td>
                        </tr>
                        <tr>
                            <td>Product Price:</td>
                            <td>&#8377;10,00,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    </div>
  )
}

export default Product