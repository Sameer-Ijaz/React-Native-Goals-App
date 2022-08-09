import React from 'react'
import {View,Text, FlatList,StyleSheet, Pressable} from 'react-native'
const GoalList = (props) => {
    return ( 
        <View style={styles.container}>

            <View style={styles.inputContainer}>
               
            <FlatList data={props.item} 
                    renderItem={({ item }) => (
                        <Pressable android_ripple={{color:'#ddddd'}} onPress={() => {
                            props.delete(item.key)
                    }}>
                        <View style={styles.list}>
                            <Text style={{color:'white',width:'90%'}}>
                            {item.text}
                            </Text>
                        </View>
                     </Pressable>
             )} />
            </View>
            </View>
       
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    list: {
        backgroundColor: 'purple',
        padding: 10,
        marginTop: 30,
        borderRadius: 30,
        width: '100%',
        flex: 2,
        flexDirection:'row'
    },
    inputContainer: {
    }
  });
 
export default GoalList;