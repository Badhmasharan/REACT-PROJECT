import "./Electronics.css"
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import Signuppg from "../Signuppg/Signup";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FaRupeeSign } from "react-icons/fa";
import { TextField, Button, Container } from '@mui/material';
import "./Pantry.css"
import Cart from './Cart';  // Import the Cart component

const Pantry = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartt = (name, price) => {
    const newItem = { name, price };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  
    const navigate = useNavigate();
  
    const handleSign = () => {
      navigate('/login');
    };
    const handleSign1 = () => {
      navigate('/login');
    };
    const handlepc = () => {
      navigate('/pc');
    };
    const electronics = () => {
        navigate('/electronics');
      };
      const topic = () => {
        navigate('/');
      };
      const smartphone = () => {
        navigate('/smartphone');
      };
      const giftitems = () => {
        navigate('/giftitems');
      };
      
      const addToCart = (productName, price) => {
        console.log(`Added ${productName} to cart. Price: ${price}`);
        // Implement your cart logic here
      };
      const cart = () => {
        navigate('/cart');
      };
   
   

  return (
    <div className='header12'>
        <div className='shipping12'>
            <div className='icon12'>
              <LiaShippingFastSolid />
            </div>
            <div className='delivery12'>
              <p>Free delivery for purchases above $2000  </p>
            </div>
            <div className='topic12'>
            <button className='topicbutton12'onClick={topic}><h1 >WALLe</h1></button>
            </div>
            <div className='user12'>
            <button onClick={handleSign}><VscAccount /></button>
            </div>
            <div className='user12'>
            <button onClick={handleSign1}><IoIosLogOut /></button>
            </div>
        </div>
        <div className='header212'>
          <div className='Location12'>
            <button><IoLocationOutline />  <b>Location</b></button>
          </div>
          <div className='searchbar12'>
            <input type='text'  placeholder='Search Items'></input>
            <button><FaMagnifyingGlass /></button>
          </div>
          <div className='sell12'>
            <button><BsShop /> <b>Sell</b></button>
          </div>
          <div className='orders12'>
            <button><b>Orders</b></button>
          </div>
          <div className='cart12'>
            <button onClick={cart}><PiShoppingCartThin /> <b>Cart</b></button>
          </div>
  
          
        </div>
        <div className='header312'>
          
          <div className='all12'>
            <button> <GiHamburgerMenu /> All</button>
          </div>
          <div className='offers12'>
            <button>Offers</button>
          </div>
          <div className='new12'>
            <button>New Releases</button>
          </div>
          <div className='bestseller12'>
            <button>Best Sellers</button>
          </div>
          <div className='membership12'>
            <button>Membership & Subscription</button>
          </div>
          <div className='gift12'>
            <button onClick={giftitems}>Gift Ideas</button>
          </div>
          <div className='mobile12'>
            <button onClick={smartphone}>Mobiles</button>
          </div>
          <div className='electronics12'>
            <button onClick={electronics}>Electronics</button>
          </div>
          <div className='kitchen12'>
            <button>Home & Kitchen</button>
          </div>
          <div className='fashion12'>
            <button>Fashion</button>
          </div>
          <div className='sports12'>
            <button>Sports & Fitness</button>
          </div>
        </div>
        
        <div className='body112'>
       <div className='header412'>
          <div>
            <img src="https://notredameparish.org/wp-content/uploads/sites/2/2023/03/Food-Pantry.png" className='advertise12'></img>
          </div>
        </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51-62ATXgCL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Surf Excel Matic Front Load Liquid Detergent 2 L Refill Pouch, For Removing Tough Stains- Front Load Washing Machines</h3>
              <button className='add-to-cart-button' onClick={() => addToCart("Surf Excel Detergent", 290)}>Add to Cart</button>
            
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/814iBcUf1aL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>UNIBIC Cookies, Assorted Cookies, 75 g (Pack of 10) | Biscuits Combo Pack | Choco Chip Cookies | Butter Cookies  </h3>
              <button className='add-to-cart-button' onClick={() => addToCart("UNIBIC Cookies", 405)}>Add to Cart</button>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81WFRKD1o3L._AC_UL960_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>SHRILALMAHAL Elite Aroma, Whole Cardamom Green Big 8mm Bold Bolt, 100g</h3>
              <br></br>
              <button className='add-to-cart-button'onClick={() => addToCart("SHRILALMAHAL Cardamom", 490)}>Add to Cart</button>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61u9w9MLxVL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Colgate MaxFresh 300g (150g x 2, Pack of 2) Toothpaste, Blue Gel Paste with Menthol for Super Fresh Breath (Peppermint Ice, Saver Pack)</h3>
              <button className='add-to-cart-button'onClick={() => addToCart("Colgate Toothpaste", 200)}>Add to Cart</button>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71d0wtpbxJL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Quaker Oats 1kg, Rolled Oats Natural Wholegrain, Nutritious Breakfast Cereals, Dalia Porridge, Easy to Cook</h3>
              <button className='add-to-cart-button' onClick={() => addToCart("Quaker Oats", 290)}>Add to Cart</button>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81G0iD2cvDL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>MAGGI 2-Minute Instant Noodles, 840G (12 Pouches X 70G Each), Masala Noodles With Goodness Of Iron,840 Grams</h3>
              <button className='add-to-cart-button' onClick={() => addToCart("MAGGI Noodles", 405)}>Add to Cart</button>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/91bI+RCij+L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Amazon Brand - Vedaka Fennel Seeds (Saunf), 200g</h3>
              <br></br>
              <button className='add-to-cart-button' onClick={() => addToCart("Amazon Brand - Vedaka Fennel Seeds", 490)}>Add to Cart</button>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/6193-JAJx4L._AC_UL480_FMwebp_QL65_.jpg " className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Zandu Pure Honey, 100% Purity, No Added Sugar, 500g</h3>
              <br></br>
              <button className='add-to-cart-button' onClick={() => addToCart("Zandu Pure Honey", 200)}>Add to Cart</button>
              </div>
          </div>
          {/* <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/416MTgo6K9L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Universal 360 Wheels For Furniture Moving Heavy Duty Caster Wheels Set For Table Furniture Mini Swivel Casters Wheels</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51mBkGbPShL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Indiid Homes Rattan Furniture Hammock Single Seater Swing Chair With Stand&Cushion Hanging Ssswing</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71U1ZapXmcL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>TANWAR HANDICRAFT Sheesham Wood Nesting Table Set of 3 Pieces Stool for Living Room | Nesting Stool Sheesham | Wooden Stools | Stool Set of 3 Pieces</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61x87lPmViL._AC_UL960_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Figment Bathroom Cleaning Brush Bathroom Cleaning Accessories Tiles Cleaning Brush Bathroom Brush with Long Handle Tile Cleaner Brush Bathroom Floor Cleaning Brush </h3>
              </div>
          </div> */}

          
          
        </div>
        
        
        
          <div className='body412'>
            <div>
              <h2 className='h212'>Get to Know Us</h2>
              <p className='p12'>About us</p>
              <p className='p12'>Careers</p>

            </div>
            <div>
              <h2 className='h212'>Connect with us</h2>
              <p className='p12'>Instagram</p>
              <p className='p12'>Twitter</p>
              <p className='p12'>Facebook</p>
            </div>
            <div>
              <h2 className='h212'>Make Money with Us</h2>
              <p className='p12'>Sell on WALLe</p>
              <p className='p12'>WALLe Global Selling</p>
              <p className='p12 '>Advertise Your Products</p>
              <p className='p12'>Become an Affiliate</p>
            </div>
            <div>
              <h2 className='h212'>Let Us Help You</h2>
              <p className='p12'>Help</p>
              <p className='p12'>Returns Centre</p>
            </div>

         
          </div>
      

          
    </div>
  );
};

export default Pantry;