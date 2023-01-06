import { useState, useEffect } from 'react'

import Image from 'next/image'

import { Text } from "../components/Text"
import { Title } from "../components/Title"
import { Button } from '../components/Button'
import { MovieItem } from '../components/MovieItem'
import { NoMovies } from '../components/NoMovies'

import ImgLogo from '../assets/favico/android-chrome-192x192.png'

import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from '../config/api.js'


export default function Home() {

  const [ movies, setMovies ] = useState('')
  const idRandom = (getNumber(1,1000))

 function getNumber (min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

  useEffect(() => {
    fetch(`${BASE_URL}${idRandom}?${API_KEY}&${language}`)
    .then(response => response.json())
    .then(data => setMovies(data))
  }, [])

 const movieNotLoaded = movies.title === ''

 return (
    <div className="h-screen flex flex-col justify-center items-center">
        <Image src={ImgLogo} alt="" width={100}/>
        <Title />

        {
          movieNotLoaded 
          ? <NoMovies /> 
          :  <MovieItem 
          title={movies.title}
          overview={movies.overview}
          backdrop_path={`${IMG_URL}/${movies.backdrop_path}`}
          />         
        }
        <Button />
        <Text />
    </div>
  )
}
