import { Text, StyleSheet } from 'react-native'

export function Description() {
    return (
    <Text style={styles.title}>
    Clique em "Encontrar filme" que traremos informações
    de algum filme para você assistir hoje.
    </Text>
    )
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 50,
    fontSize: 12,
    color: '#FFFCF9',
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 10
  }
});