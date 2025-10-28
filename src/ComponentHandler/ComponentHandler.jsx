import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import { Route,Routes } from 'react-router-dom'
import WeatherHomeSection from "../Pages/WeatherHomePage/WeatherHome";
import HomePage from "../Pages/HomePage/Homepage";
import RestaurantPage from "../Pages/RestaurantPage/RestaurantPage";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./ComonentHandler.module.css"
import  Fab from "@mui/material/Fab";
import  Box from "@mui/material/Box";
import { useSnackbar } from 'notistack';
import {AI_Query} from "../JS_Scrips/AIQuery.js"
import Nike from "../Pages/NikeShoePage/Nike.jsx";

export default function ComponentHandler(){

    let navigate = useNavigate();
    let {ParentID,setArrChildID} = useContext(AppContext);

    useEffect(()=>{

        switch(ParentID){
            case "P1_WA_01" :{ // weatherApp
                navigate("/weather");
                return;
            }
            case "P1_HM_02" : { // homepage
                navigate("/Home");
                return;
            }
            case "P1_RA_03":{ // restaurant page
                navigate("/NearBytaste");
                return;
            }
            case "P1_NS_04" :{
              navigate("/NikeShoes");
              return;

            }
            
        }
    
    },[ParentID])


    return(
        <>

            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path='/weather' element={<WeatherHomeSection/>}/>
                <Route path="/NearBytaste" element={<RestaurantPage/>}/>
                <Route path="/NikeShoes" element={<Nike/>}/>
          </Routes>

            
        </>
    )
}


function UserQueryHandler() {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  let {ParentID,ArrChildID,setParentID,setArrChildID,set_Fch_data} = useContext(AppContext);

  let location = useLocation()

  const handleFormSubmit =async (e) => {
    e.preventDefault();
    enqueueSnackbar("thinking...");
    // setOpen(false);

    if (query.trim().length === 0) return ;

    const userQueryData = {

      userQuery : query,
      elemntsID : ParentID,
      childIDs : ArrChildID
    }

    let fetch_data = await AI_Query(userQueryData);
    setArrChildID(fetch_data.elemntIDs)
    set_Fch_data(fetch_data.data)
    setParentID(fetch_data.pageID)
    // console.log(fetch_data?.data.message)
    enqueueSnackbar(fetch_data?.data.message);
    console.log(fetch_data)
  };

  return (
    <>
    <Box
    onBlur={() => setOpen(false)} 
      sx={location.pathname === "/Home" ? "" : {
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1500,
      }}
    >
      <AnimatePresence mode="wait">
        {!open && location.pathname !== "/Home" ? (
          <motion.div
            key="fab"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Fab
              color="primary"
              onClick={() => setOpen(true)}
              sx={{ boxShadow: 4 }}
            >
              {/* <Chat /> */}
            </Fab>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onBlur={() => setOpen(false)} 
            onSubmit={handleFormSubmit}
            initial={{ width: ".3vw" }}
            animate={{ width: "30vw" }}
            exit={{ width: 5 }}
            transition={{ duration: 0.3 }}
            className={Styles.form}
            style={{
              alignItems: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              // padding: "6px 12px",
            }}
          >
            <motion.textarea
              onFocus={() => enqueueSnackbar("Enter your query...")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form?.requestSubmit();
                }
              }}
              className={Styles.textarea}
              placeholder="Type here..."
              id="userQuery"
              name="UserPrompt"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "1rem",
              }}
              
            />
            <Fab
              size="small"
              color="primary"
              type="submit"
              sx={{ ml: 1, flexShrink: 0 ,color:"white",width:"fit-content"}}
            >
            Enter
            </Fab>
          </motion.form>
        )}
      </AnimatePresence>
    </Box>

    </>
  );
}

 
export {UserQueryHandler,}