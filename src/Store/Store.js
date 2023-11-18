import { combineReducers, createStore } from "redux";
import shoe1 from '../components/assets/shoe1.avif';
import shoe2 from '../components/assets/shoe2.avif';
import shoe3 from '../components/assets/shoe3.avif';
import shoe4 from '../components/assets/shoe4.avif';
import shoe5 from '../components/assets/shoe5.avif';
import shoe6 from '../components/assets/shoe6.avif';
import shoe7 from '../components/assets/shoe7.avif';
import shoe8 from '../components/assets/shoe8.avif';
import shoe9 from '../components/assets/shoe9.avif';
import shoe10 from '../components/assets/shoe10.avif';
import shoes1 from '../components/assets/shoes1.webp';
import shoes2 from '../components/assets/shoes2.webp';
import shoes3 from '../components/assets/shoes3.webp';
import shoes4 from '../components/assets/shoes4.webp';
import shoes5 from '../components/assets/shoes5.webp';
import shoes6 from '../components/assets/shoes6.webp';
import shoes7 from '../components/assets/shoes7.webp';
import shoes8 from '../components/assets/shoes8.webp';
import shoes9 from '../components/assets/shoes9.webp';
import shoes10 from '../components/assets/shoes10.webp';
import shoes11 from '../components/assets/shoes11.webp';
import shoes12 from '../components/assets/shoes12.webp';
import shoes13 from '../components/assets/shoes13.webp';
import shoes14 from '../components/assets/shoes14.webp';
import shoes15 from '../components/assets/shoes15.webp';
import shoes16 from '../components/assets/shoes16.webp';
import shoes17 from '../components/assets/shoes17.webp';
import shoes18 from '../components/assets/shoes18.webp';
import womens1 from '../components/assets/womens1.webp';
import womens2 from '../components/assets/womens2.webp';
import womens3 from '../components/assets/womens3.webp';
import womens4 from '../components/assets/womens4.webp';
import womens5 from '../components/assets/womens5.webp';
import womens6 from '../components/assets/womens6.webp';
import womens7 from '../components/assets/womens7.webp';
import womens8 from '../components/assets/womens8.webp';
import womens9 from '../components/assets/womens9.webp';
import womens10 from '../components/assets/womens10.webp';
import womens11 from '../components/assets/womens11.webp';
import womens12 from '../components/assets/womens12.webp';
import womens13 from '../components/assets/womens13.webp';
import womens14 from '../components/assets/womens14.webp';
import womens15 from '../components/assets/womens15.webp';
import womens16 from '../components/assets/womens16.webp';
import womens17 from '../components/assets/womens17.webp';
import womens18 from '../components/assets/womens18.webp';
import kids1 from '../components/assets/kids1.webp';
import kids2 from '../components/assets/kids2.webp';
import kids3 from '../components/assets/kids3.webp';
import kids4 from '../components/assets/kids4.webp';
import kids5 from '../components/assets/kids5.webp';
import kids6 from '../components/assets/kids6.webp';
import kids7 from '../components/assets/kids7.webp';
import kids8 from '../components/assets/kids8.webp';
import kids9 from '../components/assets/kids9.webp';
import kids10 from '../components/assets/kids10.webp';
import kids11 from '../components/assets/kids11.webp';
import kids12 from '../components/assets/kids12.webp';
import kids13 from '../components/assets/kids13.webp';
import kids14 from '../components/assets/kids14.webp';


const Data = [
    { src: shoe1, text: "Ndure", para: "Mens Sporty Sneaker", Price: 4999 },
    { src: shoe7, text: "Ndure", para: "Womens Mocco with bow detail", Price: 5999 },
    { src: shoe2, text: "Ndure", para: "Mens Athletic Sneakers", Price: 5999 },
    { src: shoe8, text: "Ndure", para: "Womens Metallic Accent ", Price: 3499 },
    { src: shoe3, text: "Ndure", para: "Mens Sport lace-up trainers", Price: 7999 },
    { src: shoe4, text: "Ndure", para: "Mens premium leather  formats ", Price: 4999 },
    { src: shoe10, text: "Ndure", para: "Boys Stylish sneakers", Price: 2999 },
    { src: shoe5, text: "Ndure", para: "Mens Everyday Boots", Price: 5999 },
    { src: shoe6, text: "Ndure", para: "Mens Basic loafers", Price: 2999 },
    { src: shoe9, text: "Ndure", para: "Boys Stylish sneakers", Price: 2599 },
]

const products = [
    { id: 1, category: "Men", image: shoes1, Title: "Ndure", Text: "Dress Sneaker for Men ", Price: 4499 },
    { id: 2, category: "Men", image: shoes2, Title: "Ndure", Text: "Dress Sneaker for Men ", Price: 2499 },
    { id: 3, category: "Men", image: shoes3, Title: "Ndure", Text: "Men's Plain leather loafers  ", Price: 3999 },
    { id: 4, category: "Men", image: shoes4, Title: "Ndure", Text: "Mens Mesh Athletic Shoes ", Price: 3999 },
    { id: 5, category: "Men", image: shoes5, Title: "Ndure", Text: "Mens leather Penny loafers ", Price: 2499 },
    { id: 6, category: "Men", image: shoes6, Title: "Ndure", Text: "Mens Color black Sneakers ", Price: 2499 },
    { id: 7, category: "Men", image: shoes7, Title: "Ndure", Text: "Mens Color black Sneakers ", Price: 2499 },
    { id: 8, category: "Men", image: shoes8, Title: "Ndure", Text: "Mens lace-up Athletic Shoes   ", Price: 6999 },
    { id: 9, category: "Men", image: shoes9, Title: "Ndure", Text: "Mens lace-up Athletic Shoes  ", Price: 2499 },
    { id: 10, category: "Men", image: shoes10, Title: "Ndure", Text: "Mens Athletic Sneakers", Price: 4999 },
    { id: 11, category: "Men", image: shoes11, Title: "Ndure", Text: "Mens Athletic Sneakers ", Price: 4999 },
    { id: 12, category: "Men", image: shoes12, Title: "Ndure", Text: "Mens Basic Sneakers ", Price: 4999 },
    { id: 13, category: "Men", image: shoes13, Title: "Ndure", Text: "Mens Mesh lace-up Trainers ", Price: 4999 },
    { id: 14, category: "Men", image: shoes14, Title: "Ndure", Text: "Mens Mesh lace-up Trainers ", Price: 3099 },
    { id: 15, category: "Men", image: shoes15, Title: "Ndure", Text: "Mens Multi-Colored Sneakers ", Price: 4999 },
    { id: 16, category: "Men", image: shoes16, Title: "Ndure", Text: "Mens Multi-Colored Sneakers ", Price: 3499 },
    { id: 17, category: "Men", image: shoes17, Title: "Ndure", Text: "Mens Athletic Sneakers ", Price: 4999 },
    { id: 18, category: "Men", image: shoes18, Title: "Ndure", Text: "Mens Minimal Boots ", Price: 3499 },
    { id: 19, category: "Women", image: womens1, Title: "Ndure", Text: "Womens Black Heals", Price: 3099 },
    { id: 20, category: "Women", image: womens2, Title: "Ndure", Text: "Womens Slingback heel", Price: 3499 },
    { id: 21, category: "Women", image: womens3, Title: "Ndure", Text: "Womens Slingback heel", Price: 2499 },
    { id: 22, category: "Women", image: womens4, Title: "Ndure", Text: "Stripped trainers For Women", Price: 3099 },
    { id: 23, category: "Women", image: womens5, Title: "Ndure", Text: "Causal Lace-up trainers for Women", Price: 3599 },
    { id: 24, category: "Women", image: womens6, Title: "Ndure", Text: "Causal Lace-up trainers for Women", Price: 2499 },
    { id: 25, category: "Women", image: womens7, Title: "Ndure", Text: "Causal Lace-up trainers for Women", Price: 2499 },
    { id: 26, category: "Women", image: womens8, Title: "Ndure", Text: "Womens Sports Sneakers", Price: 4999 },
    { id: 27, category: "Women", image: womens9, Title: "Ndure", Text: "Womens Sports Sneakers", Price: 4899 },
    { id: 28, category: "Women", image: womens10, Title: "Ndure", Text: "Studded  Moccs For Women", Price: 3499 },
    { id: 29, category: "Women", image: womens11, Title: "Ndure", Text: "Studded  Moccs For Women", Price: 3499 },
    { id: 30, category: "Women", image: womens12, Title: "Ndure", Text: "Studded  Moccs For Women", Price: 3499 },
    { id: 31, category: "Women", image: womens13, Title: "Ndure", Text: "Womens chain  Trim Slip-Ons", Price: 3099 },
    { id: 32, category: "Women", image: womens14, Title: "Ndure", Text: "Womens chain  Trim Slip-Ons", Price: 3099 },
    { id: 33, category: "Women", image: womens15, Title: "Ndure", Text: "Womens chain  Trim Slip-Ons", Price: 3099 },
    { id: 34, category: "Women", image: womens16, Title: "Ndure", Text: "Womens Metallic Buckle mules ", Price: 3499 },
    { id: 35, category: "Women", image: womens17, Title: "Ndure", Text: "Womens Metallic Buckle mules", Price: 3499 },
    { id: 36, category: "Women", image: womens18, Title: "Ndure", Text: "Womens Metallic Buckle mules", Price: 3499 },
    { id: 37, category: "Kids", image: kids1, Title: "Ndure", Text: "Boys Athletic Trainers", Price: 4099 },
    { id: 38, category: "Kids", image: kids2, Title: "Ndure", Text: "Boys Athletic Trainers", Price: 4099 },
    { id: 39, category: "Kids", image: kids3, Title: "Ndure", Text: "Boys Stylish Sneakers ", Price: 4099 },
    { id: 40, category: "Kids", image: kids4, Title: "Ndure", Text: "Boys Stylish Sneakers", Price: 4099 },
    { id: 41, category: "Kids", image: kids5, Title: "Ndure", Text: "Boys Velcro strap  Sneakers", Price: 4499 },
    { id: 42, category: "Kids", image: kids6, Title: "Ndure", Text: "Boys Velcro strap  Sneakers", Price: 4499 },
    { id: 43, category: "Kids", image: kids7, Title: "Ndure", Text: "Boys Velcro strap  Sneakers", Price: 4499 },
    { id: 44, category: "Kids", image: kids8, Title: "Ndure", Text: "Boys Causal Shoes  ", Price: 3499 },
    { id: 45, category: "Kids", image: kids9, Title: "Ndure", Text: "Athletic Slip-ons for Boys", Price: 3499 },
    { id: 46, category: "Kids", image: kids10, Title: "Ndure", Text: "Calza Boys Comfy Runners", Price: 3499 },
    { id: 47, category: "Kids", image: kids11, Title: "Ndure", Text: "Calza Boys Comfy Runners", Price: 3499 },
    { id: 48, category: "Kids", image: kids12, Title: "Ndure", Text: "Boys Sports Sneakers", Price: 3499 },
    { id: 49, category: "Kids", image: kids13, Title: "Ndure", Text: "Boys Sports Sneakers", Price: 3499 },
    { id: 50, category: "Kids", image: kids14, Title: "Ndure", Text: "Boys Sports Sneakers", Price: 3499 },
]

let CartItems = [];

function Carts(oldData = CartItems, newData) {
    if (newData.type == "ADD_CART") {
        oldData.push(newData.payload);


    }
    else if (newData.type == "DELETE_CART") {
        // console.log(newData.payload);
        console.log(oldData);
        let cIndex = oldData.findIndex((element, index) => {
            return element.id == newData.payload
        })

        oldData.splice(cIndex, 1);
    }


    return [...oldData]
}

function ShoeDetails(oldData = Data, newData) {
    return [...oldData]
}

function Products(oldData = products, newData) {
    return [...oldData]
}

let root = combineReducers({ Carts, ShoeDetails, Products });
let Store = createStore(root);

export default Store;