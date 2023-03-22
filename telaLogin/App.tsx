import React from "react";
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
          <Text style={styles.h1} >Sistema de Login</Text>
          <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo</Text>
          
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput 
            style={styles.inputField}
            placeholder="Digite seu email"
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput 
            style={styles.inputField}
            placeholder="*******"
            secureTextEntry
            />
          </View>

          <View style={styles.aditionals}>
            <TouchableOpacity>
              <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.signUpArea}>
            <Text style={styles.signUpText}>Não tem uma conta?</Text>
              <TouchableOpacity >
                <Text style={styles.signUpBtnText}>Cadastre-se</Text>
              </TouchableOpacity>
          </View>

          <View  style={styles.footerArea}>
            <Text style={styles.footerText}>Criado por Vitor</Text>
          </View>
        </View>
    </ScrollView>
  );
}

export default App

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#FFF',
    paddingHorizontal:15,
    paddingTop:40
  },
  container:{
    alignItems: 'center',
  },
  logo:{
    width:150,
    height:150
  },
  h1:{
    color:'#000',
    fontSize:27,
    fontWeight:'bold',
    marginVertical:10
  },
  h2:{
    color:'#999',
    fontSize:15
  },
  inputArea:{
    width:'100%',
    paddingTop:20,
    fontWeight:'bold',
  },
  inputLabel:{
    color:'#777',
    fontSize:14,
    marginBottom:7
  },
  inputField:{
    color: 'gray',
    borderWidth:2,
    borderRadius:5,
    borderColor:'#DDD',
    fontSize:15,
    padding:10
  },
  aditionals:{
    marginTop: 15,
    marginLeft: 'auto',
  },
  forgotBtnText:{
    color:'#4162B7',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#4162B7',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
  },
  signUpArea:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText:{
    color: '#808080e1',
    marginRight: 5,
    fontWeight: 'bold',
  },
  signUpBtnText:{
    color: '#4162B7',
    fontWeight: 'bold',
  },
  footerArea:{
    marginTop: 55,
  },
  footerText:{
    color: 'gray',
    fontSize: 12,
  },
});