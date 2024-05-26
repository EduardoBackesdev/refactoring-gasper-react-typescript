import { ReactNode } from "react";
import  "../Styles/more.css";

interface props{
    children: ReactNode;
    className: String;
}


export function More ({children}:props){


    return (
        <div className="main">
            <div className="flex justify-end">
                <div className=" cursor-pointer rounded-t-md w-10 text-2xl flex justify-center bg-red-600 text-black">
                    <h2>X</h2>
                </div>
            </div>

            {children}
        </div>
    )

}