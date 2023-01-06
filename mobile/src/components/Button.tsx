import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, StyleSheet, Image } from 'react-native';

import ImageLogo from '../assets/logo.png'

interface ButtonProps extends RectButtonProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps ){
 
    function getNumber (min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
  
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <Image source={ImageLogo} />
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>

    )
}; 

const styles = StyleSheet.create({
    container: {
      width: 177,
      height: 45,
      backgroundColor: '#E9E6E3',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginVertical: 20,
    },
    title: {
      color: '#000',
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold'
    },
  });