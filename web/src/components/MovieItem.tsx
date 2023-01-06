interface MovieProps {
    title: string;
    overview: string;
    backdrop_path: string;
}

export function MovieItem(props : MovieProps){
    return (
        <div className="flex flex-row justify-center items-center text-white pt-5 gap-5 ">
           <img src={props.backdrop_path} alt={props.title} width={500} className="px-5 py-4"/>
           <div className="flex flex-col justify-center items-start text-white pt-5 w-96 gap-5">
                <p className="text-xl font-bold">{props.title}</p>
                <p>{props.overview}</p>
           </div>
        </div>
    )
}