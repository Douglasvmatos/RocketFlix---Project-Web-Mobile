import Image from "next/image";

import Poster from '../assets/favico/Poster.png'

export function NoMovies(){
    return (
        <div className="flex flex-row justify-center items-center text-white pt-5 gap-5 ">
          <Image src={Poster} alt="" width={150}/>
          <div className="text-lg font-bold">
            <p >Ops, hoje não é dia de assistir filme.</p>
            <p> Bora codar! 🚀</p>
          </div>
        </div>
    )
}