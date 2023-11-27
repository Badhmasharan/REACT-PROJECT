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

export default function Electronics() {
  
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
            <button>Gift Ideas</button>
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
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71HtN4qqLZL._AC_UL960_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> SAMSUNG Galaxy S23 Ultra Cell Phone, Unlocked Android Smartphone, 256GB, 200MP Camera, S Pen, Night Mode, Record 8K Video, Long Battery Life, Fastest Mobile Processor, US Version, 2023, Green</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71DCZOdq92S._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>OnePlus Nord N200 | Large 5000mAh Battery | 5G Unlocked Android Smartphone U.S Version | 64GB Storage | 6.49" Full HD+LCD Screen | 90Hz Smooth Display | Fast Charging | Triple Camera,Blue Quantum</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61bBVbson4L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Motorola Moto G Stylus | 2023 | Unlocked | Made for US 4/64GB | 50 MP Camera | Midnight Blue, 162.89 x 74.08 x 9.19mm</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61IqkfGCw5L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>SAMSUNG Galaxy Z Flip 5 Cell Phone, Unlocked Android Smartphone, 256GB, Compact, Foldable Design, One-Hand Control, Best Selfies, 12MP Camera, Large Cover Screen, US Version, 2023, Lavender</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Apple iPhone 13 (128GB) - Starlight</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Redmi A2 (Classic Black, 2GB RAM, 64GB Storage)</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>realme narzo N53 (Feather Gold, 8GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Apple iPhone 15 Pro Max (256 GB) - Natural Titanium</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41tfqTRZdXL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> Apple iPhone 15 (128 GB) - Pink</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81xJ80yRRzL._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/81ZSn2rk9WL._AC_UL480_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus</h3>
              </div>
          </div> */}
          <div className='header412'>
          <div>
            <img src="https://helix-watches.com/media/weltpixel/owlcarouselslider/images/b/a/banner_digital.jpg" className='advertise12'></img>
          </div>
        </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/6184xh8OgTL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>boAt Xtend Talk Smart Watch with Advanced Dedicated Bluetooth Calling Chip, Built-in Alexa, 1.69" HD Display, Premium Design, vO2 Max,HR&SpO2 Monitor&Ambient Sound Detection(Pitch Black)</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61FZ83ArEwL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>boAt Wave Call 2 Smart Watch with 1.83" HD Display, Advanced BT Calling, DIY Watch Face Studio, Coins, 700+Active Modes, Live Cricket Scores, HR&SPO2 and Sleep Monitoring(Active Black)</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61ftRB6KycL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Samsung Galaxy Watch4 Classic LTE (4.6cm, Black)</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71lG7br7k1L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61O5Xjb9uEL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br> Samsung Galaxy Watch4 Bluetooth(44mm, Black, Compatible with Android only)</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/614vKmfABzL._AC._SR360,460.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Fire-Boltt Jewel, Luxury Stainless Steel Smart Watch with a 1.85" Display Boasting 320x386 Resolution and 600 NITS Brightness, 60 HZ Refresh Rate, 120 Sports Modes, IP67 Rating</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41olFlvbK3L._AC._SR360,460.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>INEFABLE 22mm SmartWatch Strap With Stainless Steel Buckle Compatible With ColorFit Pro 4/Pro 4 Max/Ultra/Ultra 2, Amazfit GTR 47mm/ GTR 2E, Galaxy Watch 3 45mm, Realme S/S Pro</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71D7jU3tUUL._AC._SR360,460.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Fire-Boltt Phoenix Ultra Luxury Stainless Steel, Bluetooth Calling Smartwatch, AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring (Multicolor)</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41DhDpi1epL._SY500__AC_UF420%2C420_FMjpg_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Cuteey 3 Pack Case Compatible with Apple Watch Series 8 Series 7 41mm Tempered Glass Screen Protector, All Round Full Protective Hard PC Cover Bumper for iWatch 8 7 Accessories</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61QMPHGyc2L._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Noise Newly Launched Quad Call 1.81" Display, Bluetooth Calling Smart Watch, AI Voice Assistance, 160+Hrs Battery Life, Metallic Build, in-Built Games</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71AxLdT5lJL._AC._SR360,460.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Fire-Boltt Asteroid 1.43” Super AMOLED Display Smart Watch, One Tap Bluetooth Calling, 466 * 466 px Resolution, 123 Sports Modes, in-Built Voice Assistance</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61LwYHqXfTL._AC._SR360,460.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Fire-Boltt Newly Launched Quest Smartwatch 1.39" Full Touch GPS Tracking Smart Watch Bluetooth Calling, 100+ Sports Modes, 360 * 360 Pixel High Resolution, Health Suite & Rugged Outdoor Built</h3>
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
