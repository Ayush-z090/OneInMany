const Cloud_URL = ""
const Local_URL = "http://127.0.0.1:5000/response"


let AI_Query = async (data)=> {
    try{
        let FETCH = await fetch(Local_URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data)
        });

        return await FETCH.json();
    }catch(e){
        return Promise.reject(`error occured - ${e}`)
    }

}


export {AI_Query}