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

export default function Giftitems() {
  
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
            <button><PiShoppingCartThin /> <b>Cart</b></button>
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
            <img src="https://www.surpassyourgoals.com/wp-content/uploads/Spread-the-Joy-with-Thoughtful-Gift-Giving.png" className='advertise12'></img>
          </div>
        </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/516tW2fLJzL._AC_SY164_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> YouBella Jewellery Sets for Women Pearl Studded Choker Necklace Jewellery set with Earrings For Girls/Women</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61cVvydO3qL._AC_SY164_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>TOOBA Women's Handicraft Beautiful Bling Box Clutch Bag</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/31o7ti+AFeL._AC_SY164_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Urban Forest Tammy Womens Leather Wallet Combo</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/519KV5doGJL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>FUKREY® Metal Taj Mahal India Souvenir Shot Glass with Gift Box, Fine Indian Handicrafts (Set of 1 (Bronze Color))</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61msNeNFpHL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Office Petals Giftings Christmas Corporate Gift Items for Employees Gift/Vacuum Flask Gift Set with Cup/Vacuum Stainless Steel for Coffee Hot Water 500 ml Rakhi</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81q+R2qgRmL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>KNV Man Face Sculpture Showpiece Designer Figures for Home Decorative Display Gift Item</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61K+U8DJY+L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Collectible India Akhand Diya Diyas Decorative Brass Crystal Oil Lamp, Diwali Decoration Item - Lantern Oval Shape Diwali Gifts Home Decor Puja Lamp Tea Light Holder</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81jZy7pSR7L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Xtore Beautiful Finish Uniquely Hand Crafted Home Dcor African Tribal Women Art Piece - (Set of 3, Multicolour), Resin</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61xuWKedmVL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Cello Opalware Dazzle Series Tropical Lagoon Dinner Set, 18 Units | Opal Glass Dinner Set for 6 | Light-Weight, Daily Use Crockery Set for Dining</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71-jWWAURCL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>eCraftIndia Resting Buddha on Knee Metal Showpiece (7.5 cm x 5.38 cm x 9.38 cm, Brown, AGB506)</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71On6kpPU2L._AC_UL960_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>SKYTONE Coffee Mugs,Couple Gifts, Anniversary Gift For Couple Special, Wedding Gift For Couples, Mr And Mrs Ceramic Coffee Tea Mug With Lid & Spoon With Gift Box</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71KL57J0MvS._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>3D Moon Lamp 7 Colour 15 cm Changeable Sensor Moon Night Lamp for Bedroom, Touch Lamp, Moonlight Lamp with Stand & USB for Bedside, Valentine Gifts, Festival Gifts, Corporate Gifts, Wedding Gifts</h3>
              </div>
          </div>

          
          
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
    
  )
}
