import { useEffect } from "react";
import DataComponent from "./DataComponent";

const History=()=>{
    useEffect(()=>{
        document.title="History Matches"
    })
    return(
       <DataComponent/>
    )
}
export default History;