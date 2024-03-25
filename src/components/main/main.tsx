import { useDispatch, useSelector } from "react-redux";
import "../assets/background3.jpg";
import { RootState } from "../../Redux/store";
import { showModal } from "../../Redux/Slices/pagesSlice";



export function Main(){

    const selector = useSelector((state: RootState)=> state.page)
    const dispath = useDispatch();

    

    return(

        <div className="h-full bg-black text-white">
            <h2>ola mundo</h2>
            <button className="border" onClick={()=> dispath(showModal())}>abrir modal</button>
        </div>

    )


}