import Box from "@mui/material/Box"
import styles from "./Component.module.css";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { AnimatePresence, motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";
import { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from "@mui/material/Divider";
import getNearbyRestaurants from "../../../JS_Scrips/NearBy_Search_Res";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const skeletonData = {
    id: 0, // can stay as 0 or null
    name: <Skeleton variant="text" width={100} height={25} />,
    cuisine: [
      <Skeleton variant="text" width={60} height={20} key={"txt_1"}/>,
      <Skeleton variant="text" width={60} height={20} key={"txt_2"}/>,
    ],
    rating: <Skeleton variant="text" width={40} height={25} key={"txt_3"}/>,
    priceRange: <Skeleton variant="text" width={30} height={20} key={"txt_4"} />,
    distance: <Skeleton variant="text" width={50} height={20} key={"txt_5"} />,
    address: <Skeleton variant="text" width={150} height={20} key={"txt_6"} />,
    isOpen: <Skeleton variant="text" width={40} height={20} key={"txt_7"} />,
    image: (
      <Skeleton
        variant="rectangular"
        width="100%"
        height={"100%"}
        sx={{ borderRadius: "1rem" }}
      />
    ),
};  

export default function NearbyRes(){

  // global fetch data
    let {fch_data} = useContext(AppContext)
    // aniamtion time , animaion delay arr , is this elemnt should render is_E4 ...
    let {time,delayArr,is_E4} = useContext(RestaurantContext)
    // hook to select opt
    let [selectedOpt,setOption] = useState(null)
    //  the component own fetch data i.e.  nearby places for meals and food
    let [fetchData , setData] = useState([])
    // hook to filter the place Card component with their name                                  
    let [searchName ,setSearchName] = useState('')
    // hook to check currnt rating 
    const [rating, setRating] = useState("");
    // hook to check the range of places
    const [distance, setDistance] = useState(5);


    useEffect(()=>
        {
          console.log("just rin")
            getNearbyRestaurants({ category:fch_data?.Ai_data?.category,limit:20,radius:distance * 1000}).then(res_data => setData(res_data))
             
        },[distance,fch_data?.Ai_data?.category])

      return(
        <>
        <AnimatePresence >
        <Box 
            key={"comp_4"}
            layout        
        {...slideFade(time,is_E4,delayArr[3])}
        component={motion.div} 
        className={styles.Res_comp}>
            <Box
            className={styles.search_Fiter_box}
            >
                <DropDownButton selectedOpt={selectedOpt} setOption={setOption}/>
                <FilterOptions rating={rating} setRating={setRating} setDistance={setDistance} distance={distance}/>

                <Divider orientation="vertical" flexItem />
                <TextField 
                className={styles.input_Field} 
                label="Search" 
                variant="outlined"
                value={searchName}
                sx={{
                    width:"35rem",
                    backgroundColor:"white",
                    alignContent:"end",
                    height:"fit-content",
                    borderRadius:".8rem"
                    ,
                    "& .MuiOutlinedInput-root": {
                        height: "4rem",
                        borderRadius:"1em", // 👈 controls overall height
                        "& input": {
                            padding: "10px", // adjust text padding
                        },
                    }
                }}
                onChange={(e)=> setSearchName(e.target.value)}
                />

            </Box>
            <Box
            component={motion.div}
            className={styles.nearbyRes}>
                {
                fetchData.length !==  0 ? 
                fetchData?.
                filter(res=> !res.name ? true :  res.name.toLowerCase().includes(searchName.toLowerCase())).
                filter(res=>
                    
                    (rating === "4+" && Number(res.rating) >= 4) ||
                    (rating === "5+" &&  Number(res.rating) >= 5) || !rating

                ).
                filter(res=> // Filter by distance
                    
                      {
                        let R = /\b\d+.\d+\b/.exec(res.distance)

                       return !distance ||
                      ( R[0] <= 1) ||
                      (R[0] <= 2) ||
                      (R[0] <= 5) ||
                      (R[0] <= 10)
                    }
                ).
                map(data=> <CardBox data={data} key={data.id}/>) : skeleton_CollectionCard(20)
                }
            </Box>
        </Box>
        </AnimatePresence>
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
                    {typeof data.image === "string" ? <img className={styles.Img_} src={data.image} alt="" /> : data.image}
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


function DropDownButton({selectedOpt,setOption}){


    const foodOptions = [
        { label: 'Fast-Food', id: 1 },
        { label: 'Cafe', id: 2 },
        { label: 'Ice Cream', id: 3 },
        { label: 'Restaurant', id: 4 },
      ];
      
    return(
        <>
            <Autocomplete
            disablePortal 
            value={selectedOpt}
            onChange={(_event,newVal)=> setOption(newVal)}
            sx={
                {
                    backgroundColor:"white",
                    width:"10rem",
                    borderRadius:".8rem",height:"fit-content",
                    "& .MuiOutlinedInput-root": {
                        height: "4rem",
                        borderRadius:"1em", // 👈 controls overall height
                        "& input": {
                            padding: "10px", // adjust text padding
                        },
                }
                }
            }
            options={foodOptions}
            getOptionLabel={(option)=> option.label}
            renderInput={(params)=> <TextField {...params} label={'Meals'}/>}
            />
        </>
    )
}

function skeleton_CollectionCard(limit){
    let arr = []
    for(let i = 0 ; i < limit ; i++){
        arr.push(<CardBox data={skeletonData} key={i}/>)
    }
    return arr
}


function FilterOptions({rating,setRating,distance,setDistance}) {
  
    return (
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          backgroundColor: "#ffe5cc", // parent background
          borderRadius: "12px",
          flexDirection:"column",
          alignItems:"self-start",
          lineHeight:1,
        }}
      >
        {/* Rating Filter */}
        <Box
        className={styles._filterOpt}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              width:"3.8rem",
              fontWeight: 600,
              color: "#663300",

            }}
          >
            Rating
          </Typography>
  
          <ToggleButtonGroup
            value={rating}
            exclusive
            onChange={(e, newValue) => setRating(newValue)}
            size="small"
            sx={{
              "& .MuiToggleButton-root": {
                textTransform: "none",
                borderRadius: "8px",
                boxSizing:"border-box",
                padding: "2px 8px",
                fontWeight: 500,
                border: "1px solid #cc9966",
                color: "#663300",
                backgroundColor: "#fff5e6",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#ffcc99",
                },
                "&.Mui-selected": {
                  backgroundColor: "#ffb366",
                  color: "white",
                  borderColor: "#e69500",
                  boxShadow: "0 0 4px rgba(0,0,0,0.2)",
                  "&:hover": {
                    backgroundColor: "#ffa64d",
                  },
                },
              },
            }}
          >
            <ToggleButton value="4+">4+</ToggleButton>
            <ToggleButton value="5+">5+</ToggleButton>
          </ToggleButtonGroup>
        </Box>
  
        {/* Distance Filter */}
        <Box
        className={styles._filterOpt}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontWeight: 600,
              color: "#663300",
            }}
          >
            Distance
          </Typography>
  
          <ToggleButtonGroup
            value={distance}
            exclusive
            onChange={(e, newValue) => setDistance(newValue)}
            size="small"
            sx={{
              "& .MuiToggleButton-root": {
                textTransform: "none",
                borderRadius: "8px",
                padding: "2px 8px",
                boxSizing:"border-box",
                fontWeight: 500,
                border: "1px solid #cc9966",
                color: "#663300",
                backgroundColor: "#fff5e6",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#ffcc99",
                },
                "&.Mui-selected": {
                  backgroundColor: "#ffb366",
                  color: "white",
                  borderColor: "#e69500",
                  boxShadow: "0 0 4px rgba(0,0,0,0.2)",
                  "&:hover": {
                    backgroundColor: "#ffa64d",
                  },
                },
              },
            }}
          >
            <ToggleButton value={1}>1 km</ToggleButton>
            <ToggleButton value={2}>2 km</ToggleButton>
            <ToggleButton value={5}>5 km</ToggleButton>
            <ToggleButton value={10}>10 km</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    );
}