import { View, Image, Text, StyleSheet } from "react-native";

interface MovieItemProps {
    title: string;
    overview: string;
    backdrop_path: string;
}

export function MovieItem(props: MovieItemProps){

const url = `https://image.tmdb.org/t/p/w500/${props.backdrop_path}`

    return (
        <View style={styles.container}>
           <Image source={{uri: url}} 
           style={styles.image}/>
           <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}> {props.overview}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 30,
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginLeft: 80
    },
    title: {
        fontSize: 20,
        color: '#FFFCF9',
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    description: {
        fontSize: 16,
        color: '#FFFCF9',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 10, 
    }
  });