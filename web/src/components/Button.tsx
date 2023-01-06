import Image from "next/image";

import ImgLogo from '../assets/favico/favicon-16x16.png'

export function Button(){

    return (
        <button 
        className="flex mt-5 rounded gap-3 bg-white h-10 w-56 justify-center items-center hover:bg-slate-300" 
        onClick={() => window.location.reload()}>
            <Image src={ImgLogo}  alt="Icone" />
            <p>Encontrar filme</p>
        </button>
    )
}