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

export default function Toys() {
  
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
          
          {/* <div className='boxx12'>
            <div className='box112'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41+s6sqYQ3S._AC_SR400,600_AGcontrast_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>ASUS ROG Strix XF120 Whisper-Quiet, 4-pin PWM Fan for PC Cases, Radiators or CPU Cooling (120mm, up to 400,000 Hours lifespan, 5 Years Warranty)</h3>
            </div>
            <div className='box212'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_UL480_FMwebp_QL65_.jpg" className='pc012'></img>
              <h3 className='shopnow12'><br></br><FaRupeeSign />200<br></br> <br></br>ASUS ROG Strix G16 (2023) Gaming Laptop, 16” 16:10 FHD 165Hz, GeForce RTX 4060, Intel Core i7-13650HX, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-AS73, Eclipse Gray</h3>
            </div>
            <div className='box312'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/613UK2R-kQL._AC_SX569_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>ASUS ROG Rapture GT-AX6000 Dual-Band WiFi 6 Extendable Gaming Router, Dual 2.5G Ports, Triple-level Game Acceleration, Mobile Game Mode, Aura RGB</h3>
            </div>
            <div className='box412'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'> <FaRupeeSign />200<br></br> <br></br> SAMSUNG 34" Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD, LC34G55TWWNXZA, 2020, Black</h3>
              </div>
          </div>
        
       
          <div className='boxes12'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>HP 24mh FHD Computer Monitor with 23.8-Inch IPS Display (1080p), Built-In Speakers and VESA Mounting, Height/Tilt Adjustment for Ergonomic Viewing, HDMI and DisplayPort - (1D0J9AA#ABA)</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>SAMSUNG 27" T35F Series FHD 1080p<br></br>  Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync, LF27T350FHNXZA</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61twhaihHtL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'> <FaRupeeSign />200<br></br> <br></br>AMD Ryzen 5 5600X 6-core, 12-Thread<br></br> Unlocked Desktop Processor with Wraith <br></br>Stealth Cooler</h3>
              </div>
            <div className='box812'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71WnTimV+OL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br> Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate, 8MS Grey-to-Grey Response Time (Normal Mode), Built-in Dual 3W Speakers, 1.07 Billion Colors Platinum Silver</h3>
              </div>
          </div>

          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61JHnTxTJiL._AC_UY327_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> ViprTech Prime Gaming PC Computer Desktop - Intel Core i5 3rd Gen, GeForce GTX 750 4GB, 16GB RAM, 1TB HDD, WiFi, RGB Lighting, Windows 10 Pro, Streaming, Editing, White</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61wsH0j5SvL._AC_UY327_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>MSI Aegis R (Tower) Gaming Desktop, Intel Core i5-12400F, GeForce RTX 4060, 16GB Memory (8GB x 2), 1TB SSD, USB Type-C, VR-Ready, Windows 11 Home Plus,Black</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41eKOUzTMjL._AC_UY327_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Intel Core i7 Gaming Computer, Core i7 2600 8-Threads, 3.8 GHz, 16GB RAM, NVIDIA Geforce GT 1030 2GB GDDR5, 512 GB SSD, 802.11AC WiFi & Win 11 Prof</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/91jHNGBFflL._AC_UY327_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Skytech Gaming Chronos Mini Gaming PC Desktop – Intel Core i3 10100F 3.6 GHz, GTX 1650, 500GB SSD, 16G DDR4 3200, 600W Gold PSU, AC Wi-Fi, Windows 10 Home 64-bit,Black</h3>
              </div>
          </div> */}
                    <div className='header412'>
          <div>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/9ecbeef1-cac6-4961-819f-1bc9c037caa4.jpg?format=jpg" className='advertise12'></img>
          </div>
        </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71drVy8MKoL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> Galaxy Hi-Tech® Pioneer Bot Robot Colorful Lights and Music | All Direction Movement Dancing Robot Toys for Boys and Girls Multi-Colour</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61JLJWkVeQL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Babique Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls/Baby (10 cm, Rattle Ball)</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61kJxp-Z2mL._AC_UL960_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>BELOXY Jumping, Walking and Barking Dog Soft Toy Fantastic Puppy Battery Operated Back Flip Jumping Dog Jump Run Toy Kid (Jumping Dog)</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/611iThAikIL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Lifelong Kids Tricycle with EVA Wheels, Bell & Storage Basket|Baby Trike|Age Group 2 Years to 5 Years Carrying Capacity Upto 30 kgs (LLKTC03, Black & Red)</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71b1IXO2+JL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Zest 4 Toyz Musical Toy Battery Operated 360 Degree Rotating Musical Dancing Boy 5D Light & Sound Toy with Bump & Go Action for Kids
</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61WuFf0pKmL._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Storio Rubber Colorful Floating Baby Toys Bath Aquatic Animals Chu Chu Toys for Newborn Babies, Kids, Assorted</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/715aY98VTPL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>DearJoy Polyester Big Size Fibre Filled Stuffed Animal Elephant Soft Toy For Baby Of Plush Hugging Pillow Soft Toy For Kids Boy Girl Birthday Gift (60 Cm, Grey)</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81RYutM0DuL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>LEGO Technic Racing Plane 42117 Building Kit (154 Pcs),Multicolor</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51uB7i1cw+L._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> Centy Toys Plastic Pull Back Auto Rickshaw, Number Of Pieces: 1, Multicolour, 36 Months</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71A-WPv5q-L._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Webby Plush Husky Dog Stuffed Animal Puppy Soft Toy, Adorable Gifts for Kids and Adult, Glitter Eyes Soft Toy, 35CM (Grey)</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51rAjwPhd1L._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>HUG 'n' FEEL SOFT TOYS Long Soft Lovable hugable Cute Giant Life Size Teddy Bear. (New Soft Toys, Mini 52cm)</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71qqiwpmLTL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Storio Toys Archery Bow and Arrow Toy Set with Target Board for Kids - 3 Teer 1 Dhanush Kaman for 3 + Year Old Boys, Multicolor</h3>
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
