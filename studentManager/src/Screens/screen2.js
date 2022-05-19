import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from '../components/task';
import { storeData } from '../storage';
import { getData } from '../storage';

export default function Second(){
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    
     useEffect(async () => {
        const data = await getData();
        setTaskItems(data)
      },[]);
    

    const handleAddTask = () => {
        Keyboard.dismiss();
        const taskObj = {text:task, isCompleted:false}
        const updatedTasks = [...taskItems, taskObj]
        storeData(updatedTasks)
        setTaskItems(updatedTasks)
        setTask(null);
        
    }
    const deleteTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
        storeData(itemsCopy)
    }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy[index].isCompleted = !itemsCopy[index].isCompleted
        storeData(itemsCopy)
        setTaskItems(itemsCopy)
    }

    
     return(
        <View style={styles.container} >
            <View style={styles.taskWrapper} >
                <Text style={styles.sectionTitle}>Органайзер записей</Text>
                
                <View style={styles.items} >
                    {
                        taskItems.map((item, index) => {
                            return(
                                <TouchableOpacity key={index} onLongPress={() => deleteTask(index)} >
                                <Task text={item.text} onCheck={() => completeTask(index)} isCompleted={item.isCompleted} />
                                </TouchableOpacity>
                            )
                            
                        })
                    }

                    
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
                >
                    <TextInput style={styles.input} placeholder={' Распланируй своё время...'} placeholderTextColor='#E1DACE' value={task} onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                
            </KeyboardAvoidingView>
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5dc',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#6e7c51'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: '#6E7C51',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        color: '#E1DACE',
        
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#6E7C51',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 35,
        color: '#E1DACE',
        fontWeight: "300",

    },
    
});