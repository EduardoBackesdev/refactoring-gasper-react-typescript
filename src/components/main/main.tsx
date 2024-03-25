import { useDispatch, useSelector } from "react-redux";
import "../assets/background3.jpg";
import { RootState } from "../../Redux/store";
import { showModal } from "../../Redux/Slices/pagesSlice";
import { Solidbutton } from "../utils/solidButton";



export function Main(){

    const selector = useSelector((state: RootState)=> state.page)
    const dispath = useDispatch();
    console.log(selector)

    

    return(

        <div className="h-lvh bg-red-400 text-white">

            <div>
                <Solidbutton onClick={()=>console.log("Eduardo")} text="Video"></Solidbutton>
                <Solidbutton onClick={()=>console.log("Eduardo")} text="Saiba Mais"></Solidbutton>
            </div>

        </div>

    )


}