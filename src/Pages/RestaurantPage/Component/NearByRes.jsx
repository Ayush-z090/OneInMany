import Box from "@mui/material/Box"
import styles from "./Component.module.css";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";
import { useContext } from "react";



const nearbyRestaurants = [
    {
      id: 1,
      name: "Spice Route Biryani House",
      cuisine: ["Indian", "Biryani"],
      rating: 4.5,
      priceRange: "₹₹",
      distance: "0.5 km",
      address: "12 MG Road, Dehradun",
      isOpen: true,
      image:
        "https://images.unsplash.com/photo-1604908177522-04061c9a6c52?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Urban Grill & Burger",
      cuisine: ["Fast Food", "American"],
      rating: 4.2,
      priceRange: "₹₹",
      distance: "0.9 km",
      address: "Main Rajpur Road, Dehradun",
      isOpen: true,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Tandoori Nights Café",
      cuisine: ["North Indian", "Tandoor"],
      rating: 4.6,
      priceRange: "₹₹₹",
      distance: "1.2 km",
      address: "Clock Tower, Dehradun",
      isOpen: false,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Pasta & Pizza Hub",
      cuisine: ["Italian", "Continental"],
      rating: 4.3,
      priceRange: "₹₹₹",
      distance: "1.5 km",
      address: "Near Pacific Mall, Dehradun",
      isOpen: true,
      image:
        "https://images.unsplash.com/photo-1601924582971-d0dc1f3e21e7?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Himalayan Thali Point",
      cuisine: ["Indian", "Local"],
      rating: 4.7,
      priceRange: "₹₹",
      distance: "2.0 km",
      address: "Saharanpur Road, Dehradun",
      isOpen: true,
      image:
        "https://images.unsplash.com/photo-1576402187878-974f70a5c8e2?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Taste of Tibet",
      cuisine: ["Tibetan", "Asian"],
      rating: 4.4,
      priceRange: "₹₹",
      distance: "2.3 km",
      address: "Jakhan Market, Dehradun",
      isOpen: false,
      image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      name: "The Coffee Cabin",
      cuisine: ["Café", "Bakery"],
      rating: 4.1,
      priceRange: "₹",
      distance: "2.5 km",
      address: "Rajpur Road, Dehradun",
      isOpen: true,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      name: "Sushi Sensei",
      cuisine: ["Japanese", "Seafood"],
      rating: 4.8,
      priceRange: "₹₹₹₹",
      distance: "3.2 km",
      address: "Mall Road, Dehradun",
      isOpen: true,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60",
    },
  ];
  

export default function NearbyRes(){

    let {isActive} = useContext(AppContext)
    let {time,delayArr} = useContext(RestaurantContext)
  
  
    return(
        <>
        <Box 
        {...slideFade(time,isActive,delayArr[3])}
        component={motion.div} 
        className={styles.nearbyRes}>
            {nearbyRestaurants.map(data=> <CardBox data={data} key={data.id}/>)}
        </Box>
        </>
    )
}


function CardBox({data}){
    return(
        <>
            <Box 
            className={styles.cardBox}
            component={"div"}>
                <div className={styles.Res_Img}>
                    <img src={data.image} alt="" />
                </div>
                <Box
                component={"div"}
                sx={
                    {
                        display:"flex",
                        flexDirection:"column",
                        gap:".5rem"
                    }
                }
                >
                    <div className={styles.name_rating}>
                        <p aria-description="name">{data.name}</p>
                        <p aria-description="rating">{data.rating}</p>
                    </div>
                    <div className={styles.cuisine_}>
                        <p id="cuisine">{ data.cuisine}</p>
                        <p id="price">{data.priceRange}</p>
                    </div> 
                <div className={styles.address}>
                    <p id="address">
                        {data.address}
                    </p>
                    <p id="distance">
                        {data.distance}
                    </p>
                </div>

                </Box>

            </Box>
        </>
    )
}              