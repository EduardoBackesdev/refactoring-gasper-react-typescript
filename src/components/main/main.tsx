import { useDispatch, useSelector } from "react-redux";
import "../assets/background3.jpg";
import { RootState } from "../../Redux/store";
import { showModal } from "../../Redux/Slices/pagesSlice";



export function Main(){

    const selector = useSelector((state: RootState)=> state.page)
    const dispath = useDispatch();
    console.log(selector)

    

    return(

        <div className="h-full bg-red-400 text-white">
            <button className="border" onClick={()=> dispath(showModal())}>abrir modal</button>
        </div>

    )


}