import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Title } from './src/components/Title';
import { MovieItem } from './src/components/MovieItem';
import { Description } from './src/components/Description';
import { Button } from './src/components/Button';

import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './src/config/api.js'

export default function App() {

  const [ movies, setMovies ] = useState('')

  function getNumber (min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
  fetch(`${BASE_URL}${getNumber(1,1000)}?${API_KEY}&${language}`)
  .then(response => response.json())
  .then(data => setMovies(data))
  .catch(err => console.log(err));
}, [])

  return (
    <LinearGradient 
    colors={["#C12A23","#000000", "#1E46A3" ]}
    start={{ x: .5, y: 0.3 }}
    end={{ x: .4, y: 1 }}
    style={styles.container}
    >
      <StatusBar style="auto" />
      <Title />
      <MovieItem 
       title={movies.title}
       overview={movies.overview}
       backdrop_path={movies.backdrop_path}
      />
      <Button 
      title='Encontrar filme'
      onPress={()=> getNumber(1,1000)}

      />
      <Description />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
