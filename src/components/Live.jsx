import { useEffect } from "react";

import LiveData from "./LiveData";

const Live=()=>{
    useEffect(()=>{
        document.title="Live Match"
    })
    return(
    
     <LiveData/>
     
      
    )
}
export default Live;