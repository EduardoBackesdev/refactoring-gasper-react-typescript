// Gasper Software
// By: EduardoBackesDev

import { useDispatch, useSelector } from "react-redux";
import "../assets/background3.jpg";
import { RootState } from "../../Redux/store";
import { Solidbutton } from "../utils/solidButton";



export function Main(){

    const selector = useSelector((state: RootState)=> state.page)
    const dispath = useDispatch();

    return(

        <div className="h-lvh bg-white text-white">
                <div className="flex flex-wrap justify-around text-center">
                        <div className="flex-col">
                            <h2 className="text-black">Bungee Jump</h2>
                            <Solidbutton className="mb-3" text="Video"></Solidbutton>
                            <Solidbutton text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Pêndulo no paredão</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Arvorismo</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Estilingue</h2>
                            <Solidbutton className="mb-3"   text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>
                        
                            <h2 className="text-black mt-6">Moto eletrica</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton text="Saiba Mais"></Solidbutton>
                        
                            <h2 className="text-black mt-6">Trilha de Moto</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton text="Saiba Mais"></Solidbutton>
                        </div>

                        <div className="flex-col">
                            <h2 className="text-black">Rapel</h2>
                            <Solidbutton className="mb-3"   text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Quadriciculo</h2>
                            <Solidbutton className="mb-3"   text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Superman</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Tirolesa</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Escalada</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>

                            <h2 className="text-black mt-6">Mundo da Caveira</h2>
                            <Solidbutton className="mb-3"  text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>
                        </div>
                </div>
        </div>

    )


}