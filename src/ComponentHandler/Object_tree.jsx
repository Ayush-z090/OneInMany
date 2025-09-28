import WeaterTreeHandling from "./Weather_Tree";



 
export default function componentRetriever(Parent_id,Child_partID){ // (id -> str - elemnt id , tree -> object - object - tree)

    if (Parent_id === "P1_WA_S1_01" ){
        return <WeaterTreeHandling Child_partID={Child_partID}/>
    }

    // return ReturnElmnt
}


