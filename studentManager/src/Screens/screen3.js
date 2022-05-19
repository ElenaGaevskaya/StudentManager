import * as React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function Third({ navigation }) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Контакты университета</Text>
          
        </View>
        <View style={styles.Wrapper} >
          <Button
            
            color='#231a24'
            mode='contained'
            style={styles.button}
            labelStyle={styles.text}
            onPress={() => Alert.alert('График работы: \n ​Понедельник: 8:15-17:00 \n Вторник – Пятница: 8:15-19:15 \n Суббота: 8:15-13:45 \n Воскресенье - выходной \n \n Номера телефонов: \n +7 (41​62) 53-00-64 \n +7 (41​62) 53-00-64')}
            
          >
            Библиотека
          </Button>

          <Button
            
            color='#231a24'
            mode='contained'
            style={styles.button}
            labelStyle={styles.text}
            onPress={() => Alert.alert('Режим работы: \n понедельник-пятница: 8:30-16:30  \n суббота: 8:30-13:30 \n \n Номер телефона: \n (499) 277-21-45')}
            
          >
            Деканат
          </Button>
           
          <Button
            
            color='#231a24'
            mode='contained'
            style={styles.button}
            labelStyle={styles.text}
            onPress={() =>
              navigation.navigate('Адреса факультетов')
            }
          >
            Адреса факультетов
          </Button>
        </View >
          <View style={styles.imgWrapper}>
            <Image 
            source={require('../images/teddy-bear2.png')}
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
      paddingVertical: 147,
      alignItems: 'center',
      

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
      


    },


    
  });