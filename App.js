import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Goal from './screens/Goal';


export default function App() {
  return (
    <>
      <StatusBar style='light'/>
    <View style={styles.container}>
        <Goal/>
      </View>
      
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
