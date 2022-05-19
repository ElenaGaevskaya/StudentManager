import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function Start({ navigation }) {
    return (
      <View style={styles.container}>
         <View>
          <Text style={styles.title}>Добро пожаловать, студент(ка)!</Text>
          <Text style={styles.titleMini}>Выбери, что тебе нужно</Text>
        </View>
        <View style={styles.Wrapper}>
          <Button
            
            color='#231a24'
            mode='contained'
            style={styles.button}
            labelStyle={styles.text}
            onPress={() =>
             navigation.navigate('Расписание')
            }
            
          >
            Расписание
          </Button>

          <Button
            
            color='#231a24'
            mode='contained'
            style={styles.button}
            labelStyle={styles.text}
            onPress={() =>
              navigation.navigate('Контактная информация')
            }
          >
            Контактная информация
          </Button>
           
          <Button
            
            color='#231a24'
            mode='contained'
            style={styles.button}
            labelStyle={styles.text}
            onPress={() =>
              navigation.navigate('Органайзер')
            }
          >
            Органайзер
          </Button>
        </View>
          <View style={styles.imgWrapper}>
            <Image 
            source={require('../images/teddy-bear.png')}
            style={styles.img}
            />
        </View>

          
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 230,
    height: 230,
    marginTop: 20
    
  },
    text: {
      color: '#E1DACE',
      textAlign: "center",
      padding: 15,
      fontWeight: "bold",

      
    },
    container: {
      flex: 1,
      backgroundColor: '#f5f5dc',
      justifyContent: 'center',
      alignItems: 'center'
      

    },

    button: {
      width: 300,
      height: 60,
      marginTop: 50,
      borderRadius: 15,
    },
    imgWrapper: {
      alignItems: 'center',
      marginTop: 20
      
    },
    Wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      color: '#6e7c51',
      textAlign: 'center'
    },
    titleMini: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#6e7c51',
      marginTop: 5,
      textAlign: 'center'
    }


    
  });