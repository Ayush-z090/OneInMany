

const navigater= (id,nav_fun)=>{

    localStorage.setItem("current_Page_id",id)

    switch(id){

        case "P1_WA_01" :{ // weatherApp
            nav_fun("/weather");
            return;
        }

        case "P1_HM_02" : { // homepage
            nav_fun("/Home");
            return;
        }

        case "P1_RA_03":{ // restaurant page
            nav_fun("/NearBytaste");
            return;
        }
        
        case "P1_NS_04" :{
          nav_fun("/NikeShoes");
          return;
      }
    }

}
export default navigater