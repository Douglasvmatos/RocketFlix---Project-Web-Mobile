import { Text, StyleSheet } from 'react-native'

export function Title() {
    return <Text style={styles.title}>Não sabe o que assistir?</Text>
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 50,
    fontSize: 40,
    color: '#FFFCF9',
    fontWeight: 'bold',
    textAlign: 'center'

  }
});