import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';
import RegisterScreen from "./RegisterScreen";


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Page     ',
      };
      constructor(){
        super();
        this.state = {
          matricNo: 0,
        }
      }
      sendMatricNo (){
        Alert.alert("success");
      }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header}> FACEDETECT SECURITY APP     </Text>
          </View>
  
          <View style={styles.image}>
            <Image style={{width: 380, height: 300}} source={require('./security.png')} />
          </View>
  
          <View style={styles.content}>
            <Text>{"\n"} </Text>
            <Button style={styles.button} title='Detect Visitor' onPress = {() => this.props.navigation.navigate('Detect') } />
            <Text> </Text>
            <Button style={styles.button} title='Registre Visitor' onPress = {() => this.props.navigation.navigate('Register') } />
            <Text> </Text>
{/*             <TextInput style={{backgroundColor: '#1ec1f4'}}  placeholder='Matric No..' onChangeText={(matricNo) => this.setState({matricNo})} onSubmitEditing={()=> this.sendMatricNo()} />
 */}
          </View>
  
          <View style={styles.footer}>
              <Text>{"\n"}{"\n"}{"\n"}{"\n"} </Text>
              <Text>The App is developed by the Admin group for a class Project</Text>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 30,
      //justifyContent: 'flex-start'
      alignItems: 'stretch',
    },
    image:{
      flex: 1, 
      
    },
    content: {
      flex: 1
    },
    footer:{
      flex: 0.7,
    },
    button : {
        height: 100,
        width: 500,
        flexDirection: 'column'
    },
    image : {

    },
  });
  