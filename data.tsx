import gamepad from "./src/assets/gamepad.png";
import keyboard from "./src/assets/keyboard.png";
import lactop from "./src/assets/lactop.png";
import camera from "./src/assets/category/Category-Camera.png";
// import cellphone from "./src/assets/category/Category-CellPhone.png";
import computer from "./src/assets/category/Category-Computer.png";
import gaming from "./src/assets/category/Category-Gamepad.png";
import headphone from "./src/assets/category/Category-Headphone.png";
import smartwatch from "./src/assets/category/Category-SmartWatch.png";
import {
  Camera,
  Gamepad,
  Headset,
  MonitorCog,
  ShieldCheck,
  Smartphone,
  Truck,
  Watch,
} from "lucide-react"; // Correct import from lucide-react

export interface Product {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  icon: JSX.Element;
  selected: boolean;
}
interface ServiceFeature {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const products: Product[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: 160,
    discountedPrice: 120,
    discountPercentage: 40,
    rating: 4.8,
    reviews: 88,
    imageUrl: gamepad,
  },
  {
    name: "AK-900 Wired Keyboard",
    originalPrice: 1160,
    discountedPrice: 960,
    discountPercentage: 35,
    rating: 4.7,
    reviews: 75,
    imageUrl: keyboard,
  },
  {
    name: "IPS LCD Gaming Monitor",
    originalPrice: 400,
    discountedPrice: 370,
    discountPercentage: 30,
    rating: 4.9,
    reviews: 99,
    imageUrl: lactop,
  },
  {
    name: "IPS LCD Gaming Monitor",
    originalPrice: 400,
    discountedPrice: 370,
    discountPercentage: 30,
    rating: 4.9,
    reviews: 99,
    imageUrl: lactop,
  },
  {
    name: "IPS LCD Gaming Monitor",
    originalPrice: 400,
    discountedPrice: 370,
    discountPercentage: 30,
    rating: 4.9,
    reviews: 99,
    imageUrl: lactop,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Phones",
    icon: <Smartphone size={30} />,
    selected: false,
  },
  {
    id: 2,
    name: "Computers",
    icon: <MonitorCog size={30} />,
    selected: false,
  },
  { id: 3, name: "SmartWatch", icon: <Watch size={30} />, selected: false },
  { id: 4, name: "Camera", icon: <Camera size={30} />, selected: false },
  { id: 5, name: "HeadPhones", icon: <Headset size={30} />, selected: false },
  { id: 6, name: "Gaming", icon: <Gamepad size={30} />, selected: false },
];
export const serviceFeatures: ServiceFeature[] = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over ₹60",
    icon: <Truck />, // replace with actual icon name or component
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: <Headset />, // replace with actual icon name or component
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: <ShieldCheck />, // replace with actual icon name or component
  },
];
