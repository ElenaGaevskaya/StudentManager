import * as React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

export default function Fifth() {
    return (
      <View style={styles.container}>
       <View>
           <Text style={styles.text}>Выберите свой факультет</Text>
       </View>
       

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва,​ Ленинградский проспект д. 49')}>
                    <Text style={styles.buttonText}>Факультет международных экономических отношений</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, \n ул. Верхняя Масловка д. 15')}>
                    <Text style={styles.buttonText}>Факультет "Высшая школа управления"</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, \n 4-й Вешняковский проезд д.4 корп.2')}>
                    <Text style={styles.buttonText}>Факультет информационных технологий и анализа больших данных</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, \n ул. Верхняя Масловка д. 15')}>
                    <Text style={styles.buttonText}>Факультет налогов, аудита и бизнес-анализа</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, ул. Кибальчича, д. 1')} >
                    <Text style={styles.buttonText}>Факультет экономики и бизнеса</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, \n Ленинградский проспект, д. 49')}>
                    <Text style={styles.buttonText}>Факультет социальных наук и массовых коммуникаций</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, \n ул. Щербаковская, д. 38')} >
                    <Text style={styles.buttonText}>Юридический факультет</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Москва, \n Малый Златоустинский переулок, 7, стр. 1')} >
                    <Text style={styles.buttonText}>Финансовый факультет</Text>
                </TouchableOpacity>
            </View>
       </View>

     
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 35,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#6e7c51',
    
    textAlign: 'center'

  },

  button: {
    backgroundColor: '#231a24',
    borderRadius: 15,
    width: 352,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#E1DACE',
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    fontWeight: "500",
    
  },

  wrapperButton: {
    
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  });