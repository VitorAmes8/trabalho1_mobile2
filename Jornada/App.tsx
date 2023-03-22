
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
<p></p>
     <View style={styles.jornadaTitulo}>
        <Text style={styles.textTitulo}>Minha jornada no React Native</Text>
      </View>
      <view style = {styles.linha}></view>
      <p></p>
      <View style={styles.jornadaVerde}>
        <Text style={styles.textJornada}>Fundamentos do React Native</Text>
        </View>
        <p/>
        <View style={styles.jornadaVerde}>
        <Text style={styles.textJornada}>Expo e Expo CLI</Text>
        </View>
        <p/>
        <View style={styles.jornadaVerde}>
        <Text style={styles.textJornada}>Estilização com Stylesheet</Text>
        </View>
        <p/>
        <View style={styles.jornadaVermelho}>
          <Text style={styles.textJornada}>Navegação</Text>
        </View>
        <p/>
        <View style={styles.jornadaVermelho}>
          <Text style={styles.textJornada}>ScrollView e Flatlist</Text>
        </View>
        <p/>
        <View style={styles.jornadaVermelho}>
          <Text style={styles.textJornada}>Periféricos</Text>
        </View>
        <p/>
        <View style={styles.jornadaVermelho}>
          <Text style={styles.textJornada}>Styled Components</Text>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
  },

  jornadaTitulo: {
    paddingBottom: 10,
  },

  linha: {
    width: 500,
    height: 2,
backgroundColor: 'black',
  },

  textTitulo: {
    fontSize: 22,
  },

  textJornada: {
    fontWeight: "bold",
    fontSize: 18,
  },

  jornadaVerde:{
    width: 350,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#13c46b',
    outlineColor: 'white',
    outlineStyle: 'solid',
    outlineWidth: '2',
    textAlign: 'center',
    justifyContent: 'center',
  },

  jornadaVermelho:{
    width: 350,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#c71c16',
    outlineColor: 'white',
    outlineStyle: 'solid',
    outlineWidth: '2',
    textAlign: 'center',
    justifyContent: 'center',
  },
});