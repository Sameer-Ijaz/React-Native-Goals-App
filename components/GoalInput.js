import { useState,react }  from 'react'
import {View, TextInput, Button,StyleSheet,Modal, Image,TouchableWithoutFeedback,Keyboard } from 'react-native'

const GoalInput = (props) => {

    const [enteredText, setText] = useState("");
    const [Goal, SetGoal] = useState("");


    function TextHandle(Text) {
        setText(Text);
    
    }
    
 
    return ( 
        <Modal animationType='fade' visible={props.isVisible}>
             <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
            <View style={styles.container}>
                <Image style={{ height:200,width:200,margin:20 } } source={require('../assets/goal.png')}/>
                <View style={styles.inputContainer}>
                    <View style={styles.inputText}>
                        <TextInput  placeholder='Enter Your Goal' onChangeText={TextHandle} />
                        </View>
                    <View style={styles.button}>
                           <View style={{marginRight:10}}>
                            <Button title='Add Goals' color='#5e0acc' onPress={() => { props.handletodo(enteredText) }} />
                            </View>
                        <Button title='Cancel' color='#f31282' onPress={props.notVisible} />
                             </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
     );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: '#311b6b',
        justifyContent:'center'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    button: {
        flexDirection: 'row',
    },
    inputText: {
        borderWidth: 1,
        borderColor: "#cccc",
        marginBottom: 10,
        width: '90%',
        padding:13,
        backgroundColor: '#e4d0ff',
        color: '120438',
        borderRadius:6
        
    }
  });

 
export default GoalInput;