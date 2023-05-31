import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "./assets/recipe1.jpg";
import recipe2 from "./assets/recipe2.jpg";
import recipe3 from "./assets/recipe3.jpg";
import recipe4 from "./assets/recipe4.jpg";
import recipe5 from "./assets/recipe5.jpg";
import recipe6 from "./assets/recipe6.jpg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

export const heroIcons = [
    <CiBurger />,
    <FaIceCream />,
    <GiCakeSlice />,
    <GiBowlOfRice />,
];

export const recipes = [
    {
        id: 1,
        image: recipe1,
        name: "Recipe Name",
        price: "₹ 200",
    },
    {
        id: 2,
        image: recipe2,
        name: "Recipe Name",
        price: "₹ 130",
    },
    {
        id: 3,
        image: recipe3,
        name: "Recipe Name",
        price: "₹ 170",
    },
    {
        id: 4,
        image: recipe4,
        name: "Recipe Name",
        price: "₹ 220",
    },
    {
        id: 5,
        image: recipe5,
        name: "Recipe Name",
        price: "₹ 140",
    },
    {
        id: 6,
        image: recipe6,
        name: "Recipe Name",
        price: "₹ 200",
    },
];

export const footerSocials = [
    { url: "https://github.com/tushar-upadhya/resto", icon: <TbBrandGithub /> },
    {
        url: "https://www.linkedin.com/in/tushar-upadhyay-54029b135/",
        icon: <FiLinkedin />,
    },
];

export const footerContacts = [
    {
        id: 1,
        icon: <HiOutlinePhone />,
        text: "+91 xxxxxxxxxx",
    },
    {
        id: 2,
        icon: <HiOutlineMail />,
        text: "fake@gmail.com",
    },
    {
        id: 3,
        icon: <BiMap />,
        text: "Hathras, India",
    },
];

export const mainMenu = [
    {
        id: 1,
        href: "home",
        text: "Home",
        icon: <AiFillHome />,
    },
    {
        id: 2,
        href: "about",
        text: "About",
        icon: <MdExplore />,
    },
    {
        id: 3,
        href: "recipe",
        text: "Recipe",
        icon: <GiBowlOfRice />,
    },
    {
        id: 4,
        href: "contact",
        text: "Contact",
        icon: <MdContactPage />,
    },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
