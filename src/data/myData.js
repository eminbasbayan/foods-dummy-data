import About from "../components/About";
import Contact from "../components/Contact";
import Foods from "../components/Foods/foods"
import Search from "../components/Search"
import FoodDetail from "../components/Foods/foodDetail"
const mydata = [
    {link: "/", title: "Foods", component: Foods,isExact: true,isLink : true},
    {link: "/foods/:foodID", title: "All Foods", component: FoodDetail, isExact: false, isLink:false},
    {link: "/search", title: "Search", component: Search, isExact: false, isLink:false},
    {link: "/about", title: "About", component: About,isExact: true,isLink : true},
    {link: "/contact", title: "Contact", component: Contact,isExact: true,isLink : true },
    
    
]

export default mydata