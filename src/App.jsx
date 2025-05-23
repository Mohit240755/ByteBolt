import { BrowserRouter,Route,Routes,Router } from "react-router-dom";
import Navbar from "./Nav/nav";
import Home from "./Home/home";
import Login from "./Log/log";
import Products from "./Product/product";
import Mens from "./Mens/mens";
import Women from "./Women/women";
import Kids from "./kids/kids";
import Cart from "./Product/cart";
import Kitchen from "./kitchen/kitchen";
import Menss from "./Mens/men1";
import Meni from "./Mens/meni";
import Mensss from "./Mens/men2";
import { createContext } from "react";
import Menii from "./Mens/meni1";
import Menss1 from "./Mens/men3";
import Meni2 from "./Mens/meni2";
import Mens4 from "./Mens/men4";
import Meni3 from "./Mens/meni3";
import Mens5 from "./Mens/men5";
import Meni4 from "./Mens/meni4";
import Mens6 from "./Mens/men6";
import Meni5 from "./Mens/meni5";
import Mens7 from "./Mens/men7";
import Meni6 from "./Mens/meni6";
import Mens8 from "./Mens/men8";
import Meni7 from "./Mens/meni7";
import Mens9 from "./Mens/men9";
import Meni9 from "./Mens/meni9";
import Mens8a from "./Mens/men8a";
import ProtectRoute from "./Log/protect";
import Meni8 from "./Mens/meni8";
import AddCart from "./Add cart/addcart";
import Mens10 from "./Mens/men10";
import Meni10 from "./Mens/meni10";
import Mens11 from "./Mens/men11";
import Meni11 from "./Mens/meni11";
import Mens12 from "./Mens/men12";
import Meni12 from "./Mens/meni12";
import Mens13 from "./Mens/men13";
import Meni13 from "./Mens/meni13";
import Mens24 from "./Mens/men24";
import Meni24 from "./Mens/meni24";
import Mens25 from "./Mens/men25";
import Meni25 from "./Mens/meni25";
import Mens26 from "./Mens/men26";
import Meni26 from "./Mens/meni26";


export const userContext = createContext()
const App= () => {

  const isAuthenticated = !!localStorage.getItem("user");
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/" element={<ProtectRoute isAuthenticated={isAuthenticated}><Home/></ProtectRoute>}/>
       {/* <Route path="/" element={<Home/>}/> */}
       <Route path="/login" element={<Login/>}/>
       <Route path="/product" element={<Products/>}/>

       <Route path="/men" element={<Mens/>}/>
       <Route path="/men1" element={<Menss/>}/>
       <Route path="/mens1/:id"  element={<Meni/>}/>
       <Route path="/men2"  element={<Mensss/>}/>
       <Route path="/men2/:id"  element={<Menii/>}/>
       <Route path="/men3"  element={<Menss1/>}/>
       <Route path="/men3/:id"  element={<Meni2/>}/>
       <Route path="/men4"  element={<Mens4/>}/>
       <Route path="/men4/:id"  element={<Meni3/>}/>
       <Route path="/men5"  element={<Mens5/>}/>
       <Route path="/men5/:id"  element={<Meni4/>}/>
       <Route path="/men6"  element={<Mens6/>}/>
       <Route path="/men6/:id"  element={<Meni5/>}/>
       <Route path="/men7"  element={<Mens7/>}/>
       <Route path="/men7/:id"  element={<Meni6/>}/>
       <Route path="/men8"  element={<Mens8/>}/>
       <Route path="/men8/:id"  element={<Meni7/>}/>
       <Route path="/men9"  element={<Mens9/>}/>
       <Route path="/men9/:id"  element={<Meni9/>}/>
       <Route path="/men8a"  element={<Mens8a/>}/>
       <Route path="/men8a/:id"  element={<Meni8/>}/>
       <Route path="/men10"  element={<Mens10/>}/>
       <Route path="/men10/:id"  element={<Meni10/>}/>
       <Route path="/men11"  element={<Mens11/>}/>
       <Route path="/men11/:id"  element={<Meni11/>}/>
       <Route path="/men12"  element={<Mens12/>}/>
       <Route path="/men12/:id"  element={<Meni12/>}/>
       <Route path="/men13"  element={<Mens13/>}/>
       <Route path="/men13/:id"  element={<Meni13/>}/>
       <Route path="/men24"  element={<Mens24/>}/>
       <Route path="/men24/:id"  element={<Meni24/>}/>
       <Route path="/men25"  element={<Mens25/>}/>
       <Route path="/men25/:id"  element={<Meni25/>}/>
       <Route path="/men26"  element={<Mens26/>}/>
       <Route path="/men26/:id"  element={<Meni26/>}/>

       <Route path="/women" element={<Women/>}/>
       <Route path="/kids" element={<Kids/>}/>
       <Route path="/kitchen" element={<Kitchen/>}/>
       <Route path="/product/:id"  element={<Cart/>}/>
       <Route path="/addcart" element={<AddCart/>}/>
    </Routes>
    
    </BrowserRouter>



    
    </>
  )
}
export default App;

