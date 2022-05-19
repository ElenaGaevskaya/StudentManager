import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';


const Task = (props) => {
    

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                
                <Checkbox
                    color='#888695'
                    status={props.isCompleted ? 'checked' : 'unchecked'}
                    onPress={ props.onCheck}
                />
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
        
            </View>
            <View style={styles.circular}></View>

        </View>
    )
};



const styles = StyleSheet.create({

    item: {
        backgroundColor: '#231a24',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
        
    },
    square: {
        width: 2,
        height: 24,
        backgroundColor: '#888695',
        opacity: 0.8,
        borderRadius: 5,
        marginRight: 15,
        marginLeft: 3
    },
    itemText: {
        color: '#E1DACE',
        maxWidth: '80%',
        


    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#888695',
        borderWidth: 2,
        borderRadius: 5,
    },
    

});

export default Task;