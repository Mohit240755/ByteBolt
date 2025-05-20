import "./home.css"
import Img1 from "../image/img1.jpg"
import Img2 from "../image/img2.jpg"
import Img3 from "../image/img3.jpg"
import Img4 from "../image/img4.jpg"
import Img5 from "../image/img5.jpg"
import Img6 from "../image/img6.jpg"
import Img7 from "../image/img7.jpg"
import Img8 from "../image/img8.jpg"
import Img9 from "../image/img9.jpg"
import Img10 from "../image/img10.jpg"
import Img11 from "../image/img11.jpg"
import Img12 from "../image/img13.jpg"
import Img13 from "../image/img14.jpg"
import Img14 from "../image/img15.jpg"
import Img15 from "../image/img16.jpg"
import Img16 from "../image/img17.jpg"
import Img17 from "../image/img12.jpg"
import Img18 from "../image/img18.jpg"
import Img19 from "../image/img19.jpg"
import Img20 from "../image/img20.jpg"
import Img21 from "../image/img21b.jpg"
import Img22 from "../image/img22.jpg"
import Img23 from "../image/img23.jpg"
import Img24 from "../image/img24.jpg"
import Img25 from "../image/img25.jpg"
import Img26 from "../image/img26.jpg"
import Img27 from "../image/img27.jpg"
import Img28 from "../image/img28.jpg"
import Img29 from "../image/img29.jpg"
import Img30 from "../image/img30.jpg"
import Img31 from "../image/img31.jpg"
import Img32 from "../image/img32.jpg"
import Img33 from "../image/img33.jpg"
import Img34 from "../image/img34.jpg"
import Img35 from "../image/img35.jpg"
import Img36 from "../image/img36.jpg"
import Img37 from "../image/img37.jpg"
import Img38 from "../image/img38.jpg"
import Img39 from "../image/img39a.jpg"
import Img40 from "../image/img40a.jpg"
import Img41 from "../image/img41.jpg"
import Img43 from "../image/img43.jpg"
import Img44 from "../image/img44.jpg"
import Img45 from "../image/img45.jpg"
import Img46 from "../image/img46.jpg"
import Img47 from "../image/img47.jpg"
import Img48 from "../image/img48.jpg"
import Img49 from "../image/img49.jpg"
import Img50 from "../image/img50.jpg"
import I1 from "../image/i1.webp"
import I2 from "../image/i2.webp"
import I3 from "../image/i3.webp"
import I4 from "../image/i4.webp"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react"
import Footer from "../Footer/footer"


const  image=[I1,I2,I3,I4];

const Home = () => {
    const [CurrIndex,SetIndex]=useState(0);
     useEffect(() => {
        const interval = setInterval(() => {
            SetIndex(prev => (prev+1) % image.length);
        }, 5000)
        return () => clearInterval(interval);
         }, []);

         const goToImage=(index) => {
            SetIndex(index)
         }
    return (
        <>
            <div className="">
                <h1 className=" aa text-center text-5xl font-serif m-5">Welcome To ByteBolt</h1>

                <div className="slider-container pt-10">
                <div
          className="slider-track"
          style={{ transform: `translateX(-${CurrIndex * 100}vw)` }}
        >
          {image.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>
                </div>
                <div className="dots">
          {image.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === CurrIndex ? 'active' : ''}`}
               onClick={() => goToImage(idx)}
            ></span>
          ))}
        </div>
                <div>
                    <div className="flex justify-between">
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Appliances for your home | Up to 55% off</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img1} alt="AC" />Air Conditioners</a>
                                <a href=""><img src={Img2} alt="AC" />Refrigrators</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img3} alt="AC" />Microwaves</a>
                                <a href=""><img src={Img4} alt="AC" />Waching Machines</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Revamp your home in style</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img5} alt="AC" />Cusion cover,more</a>
                                <a href=""><img src={Img6} alt="AC" />Figurines</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img7} alt="AC" />Home Stroage</a>
                                <a href=""><img src={Img8} alt="AC" />Lighting Solutions</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Starting ₹149 | Headphones</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img9} alt="AC" />Starting $20| boAt</a>
                                <a href=""><img src={Img10} alt="AC" />Starting $30| boult</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img11} alt="AC" />Starting $60| Noise</a>
                                <a href=""><img src={Img12} alt="AC" />Starting $60|Zeb</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Automotive essentials | Up to 60% off</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img13} alt="AC" />Cleaning access..</a>
                                <a href=""><img src={Img14} alt="AC" />Tyres & rim care</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img15} alt="AC" />Helmet</a>
                                <a href=""><img src={Img16} alt="AC" />Vaccum Cleaner</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Up to 60% off | Styles for women</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img17} alt="AC" />Women Clothing</a>
                                <a href=""><img src={Img18} alt="AC" />Footwear & Handbags</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img19} alt="AC" />Watches</a>
                                <a href=""><img src={Img20} alt="AC" />Fashion Jewellery</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Starting ₹199 | Amazon Brands & more</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img21} alt="AC" />BedSheet & Pillow</a>
                                <a href=""><img src={Img22} alt="AC" />Curtains</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img23} alt="AC" />Ironing Board</a>
                                <a href=""><img src={Img24} alt="AC" />Home Decor</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Up to 60% off | Styles for kids</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img25} alt="AC" />Cleaning supplies</a>
                                <a href=""><img src={Img26} alt="AC" />Bathroom access..</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img27} alt="AC" />Home tools</a>
                                <a href=""><img src={Img28} alt="AC" />Wallpapers</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                        <div className="bg-white border-amber-100 w-100 m-5 mt-10 p-5">
                            <h1 className="text-2xl font-semibold font-serif">Min. 40% off | Fun games for kids</h1>
                            <div className="flex gap-5 p-2">
                                <a href=""><img src={Img29} alt="AC" />Soft toys</a>
                                <a href=""><img src={Img30} alt="AC" />Ride one</a>
                            </div>
                            <div className="flex gap-5">
                                <a href=""><img src={Img31} alt="AC" />Indoor games</a>
                                <a href=""><img src={Img32} alt="AC" />Outdoor games</a>
                            </div>
                            <a className="pt-5 text-blue-600" href="">See More...</a>
                        </div>
                    </div>
                </div>
                <div className="border-amber-50 bg-white p-3 m-5 mt-10">
                    <div className="flex gap-4">
                        <h1 className="font-semibold font-serif text-2xl">Up to 60% off | Trending products from Emerging Businesses</h1>
                        <a className="text-blue-500 p-1 " href=""> See More....</a>
                    </div>
                    <div className="flex justify-between p-5">
                        <a href=""><img src={Img33} alt="no image" /></a>
                        <a href=""><img src={Img34} alt="no image" /></a>
                        <a href=""><img src={Img35} alt="no image" /></a>
                        <a href=""><img src={Img36} alt="no image" /></a>
                        <a href=""><img src={Img37} alt="no image" /></a>
                        <a href=""><img src={Img38} alt="no image" /></a>



                    </div>
                </div>
                <div className="border-amber-50 bg-white p-3 m-5 mt-10 ">
                    <div className="flex gap-4">
                        <h1 className="font-semibold font-serif text-2xl">Smart choices for smart living | Shop Now</h1>
                        <a className="text-blue-500 p-1 " href=""> See all offers....</a>
                    </div>
                    <div className="flex justify-between p-5">
                        <a href=""><img src={Img39} alt="no image" /></a>
                        <a href=""><img src={Img40} alt="no image" /></a>
                        <a href=""><img src={Img41} alt="no image" /></a>
                        <a href=""><img src={Img43} alt="no image" /></a>
                        <a href=""><img src={Img44} alt="no image" /></a>

                    </div>
                </div>
                <div className="border-amber-50 bg-white p-3 m-5 mt-10">
                    <div className="flex gap-4">
                        <h1 className="font-semibold font-serif text-2xl">Top deals on bottles fom Small businesses</h1>
                        <a className="text-blue-500 p-1 " href=""> See More....</a>
                    </div>
                    <div className="flex justify-between p-5">
                        <a href=""><img src={Img45} alt="no image" /></a>
                        <a href=""><img src={Img46} alt="no image" /></a>
                        <a href=""><img src={Img47} alt="no image" /></a>
                        <a href=""><img src={Img48} alt="no image" /></a>
                        <a href=""><img src={Img49} alt="no image" /></a>
                        <a href=""><img src={Img50} alt="no image" /></a>



                    </div>
                </div>
                <div className="border-amber-50 bg-white p-3 m-5 mt-10">
                    <div className="flex gap-4">
                        <h1 className="font-semibold font-serif text-2xl">Top deals on bottles fom Small businesses</h1>
                        <a className="text-blue-500 p-1 " href=""> See More....</a>
                    </div>
                    <div className="flex justify-between p-5">
                        <a href=""><img src={Img45} alt="no image" /></a>
                        <a href=""><img src={Img46} alt="no image" /></a>
                        <a href=""><img src={Img47} alt="no image" /></a>
                        <a href=""><img src={Img48} alt="no image" /></a>
                        <a href=""><img src={Img49} alt="no image" /></a>
                        <a href=""><img src={Img50} alt="no image" /></a>



                    </div>
                </div>

                <div className="text-center p-5">
                    <h1 className=" font-bold text-3xl pt-10 font-serif">See personalized recommendations</h1>
                    <button className="bg-amber-300 w-60 h-8 font-serif mt-5 rounded-3xl"><a href="">Sign In</a></button>
                    <p className="text-xs pt-1">New Coustomer?<a className="text-blue-600 underline" href="">Start Here..</a></p>
                </div>


                <Footer/>
            </div>
        </>
    )
}

export default Home;