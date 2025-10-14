import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Route,Routes } from 'react-router-dom'
import WeatherHomeSection from "../Pages/WeatherHomePage/WeatherHome";
import HomePage from "../Pages/HomePage/Homepage";
import RestaurantPage from "../Pages/RestaurantPage/RestaurantPage";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./ComonentHandler.module.css"
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function ComponentHandler(){

    let navigate = useNavigate();
    let {ParentID,setArrChildID} = useContext(AppContext);

    useEffect(()=>{

        switch(ParentID){
            case "P1_WA_01" :{ // weatherApp
                // setArrChildID(["S_E1","S_E2"])
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
            
        }
    
    },[])


    return(
        <>

            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path='/weather' element={<WeatherHomeSection/>}/>
                <Route path="/NearBytaste" element={<RestaurantPage/>}/>
          </Routes>

            
        </>
    )
}

function UserQueryHandler(){

    const { enqueueSnackbar } = useSnackbar();
    let {} = useContext(AppContext)

    const handleFormSubmit = (e)=>
        {
            e.preventDefault();
            enqueueSnackbar('I love snacks.');
        }

    return(
        <>
        <AnimatePresence>
            <motion.form
            id="_form"
            initial={{
                opacity:0,
                transform:"translateY(3rem)"
            }}
            animate={{
                opacity:1,
                transform:"translateY(0)"
            }}
            className={Styles.form}
            onSubmit={ handleFormSubmit}>
                <motion.textarea
                onKeyDown={(e)=>{
                    if(e.key === "Enter" && !e.shiftKey){
                        e.preventDefault();
                        e.currentTarget.form?.requestSubmit();
                    }
                }}
                whileFocus={
                    {
                     height:"4rem"
                    }
                }
                className={Styles.textarea}
                placeholder="type here"
                id="userQuery"
                name="UserPrompt">
                </motion.textarea>
                <Button  type="submit">search</Button>
            </motion.form>
        </AnimatePresence>
        </>
    )
}

function AissistanceReply({sty}){
    return(
        <>
        </>
    )
}

export {UserQueryHandler,AissistanceReply}