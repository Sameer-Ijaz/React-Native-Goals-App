import {useState,react} from 'react'
import GoalInput from '../components/GoalInput';
import GoalList from '../components/GoalList';
import { View,StyleSheet, Button, Alert } from 'react-native'

const Goal = () => {
    const [Goal, SetGoal] = useState("");
    const [isVisible, SetVisible] = useState(false);
    function AddGoal(Text) {
        if (Text.length > 3) {
            SetGoal((prevtodo) => {
                return [{ text: Text, key: Math.random().toString() },
                ...prevtodo]
            });
            setModelFalse();
        }
        else {
            Alert.alert('Opps','Your character must be longer than 3 words!',[{text:'Understood',onPress:()=>{console.log("Button Closed")}}])
        }

        

    };

    function handleDelete(id) {
        SetGoal((prevtodo) => {
            return prevtodo.filter((goal)=> id != goal.key)
        })
    };

    function setModelVisibility() {
        SetVisible(true);
    }

    function setModelFalse() {
        SetVisible(false);
    }

    return ( 
        <View style={styles.container}>
            <View style={{marginTop:70}}>
                <Button title='Add A New To To Do' onPress={setModelVisibility} />
                </View>
            <GoalInput handletodo={AddGoal} isVisible={isVisible} notVisible={setModelFalse} />
            <GoalList item={Goal} delete={handleDelete} />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 
export default Goal;