import { useEffect } from "react";
import PointTableData from "./PointTableData";

const PointTable=()=>{
    useEffect(()=>{
        document.title="PointTable"
    })
    return (
        <><PointTableData/></>
    )
}
export default PointTable;