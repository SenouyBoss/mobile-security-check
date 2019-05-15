import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  Alert, 
  AppRegistry
} from 'react-native';
import Api_db from "../Api_db";
import * as firebase from "firebase"



firebase.initializeApp(Api_db.FirebaseConfig);
var database = firebase.database();

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register Page     '
      };
  constructor() {
    super();

    this.state = {
      //DOB: "",
      Vname: '',
      Vid: '',
      Vmobile: '',
      Vreason: '',
      //Vtime: '',
      matricNo: 0
    }
  }
  /* pushToFirebase() {
    let formValues = this.refs.getValues()
    this.itemsRef.push(formValues)
  } */
  writeUserData(){
    if (this.state.DOB == "" || this.state.Vname == "" || this.state.Vid == "" || this.state.Vmobile == "" || this.state.Vreason == "" || 
    this.state.Vtime == "") {
      alert("Please Fill in All the Fields");
    }
    else{
    database.ref('Users/').push({
        id: this.state.Vid,
        name: this.state.Vname,
        mobile: this.state.Vmobile,
        reason: this.state.Vreason
    })
    Alert.alert("SUCCESS! Your User has been Added!!");
}
}

  /* submit = async () => {

    if (this.state.DOB == "" || this.state.Vname == "" || this.state.Vid == "" || this.state.Vmobile == "" || this.state.Vreason == "" || 
    this.state.Vtime == "") {
      alert("Please Fill in All the Fields");
    }
  } */
  sendMatricNo (){
    database.ref('Users/').orderByChild('id').equalTo(this.state.matricNo).on("value", function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(data) {
            console.log(data.key);
            Alert.alert("Visitor Registred");
        });
    });
    
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.regform}>
      <Text style={styles.header}>Visitor Registration System</Text>

      <TextInput style={styles.textinput} placeholder="Visitor name" placeholderTextColor='#fff68f' onChangeText={(Vname) => this.setState({Vname})} value={this.state.Vname} />

      <TextInput style={styles.textinput} placeholder="Visitor ID" placeholderTextColor='#fff68f' onChangeText={(Vid) => this.setState({Vid})} value={this.state.Vid} />

      <TextInput style={styles.textinput} placeholder="Visitor Phone No" placeholderTextColor='#fff68f' onChangeText={(Vmobile) => this.setState({Vmobile})} value={this.state.Vmobile} />

      <TextInput style={styles.textinput} placeholder="Reasons for visiting" placeholderTextColor='#fff68f' onChangeText={(Vreason) => this.setState({Vreason})} value={this.state.Vreason} />


      <TouchableOpacity style={styles.button} /* onPress={()=> this.submit()} */ onPress={() =>this.writeUserData()}  >
      <Text style={styles.btntext}>Registr a vistor            </Text>
      
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}   >
      <TextInput style={{backgroundColor: '#1ec1f4'}}  placeholder='Visitor ID....' onChangeText={(matricNo) => this.setState({matricNo})} onSubmitEditing={()=> this.sendMatricNo()} />

      
      </TouchableOpacity>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 40,
    paddingRight: 40,
  },
  regform: {
    alignSelf: 'stretch',
  },
  header:{
    fontSize: 24,
    color: '#fff',
    paddingBottom:10,
    marginBottom: 20,
    marginTop: 20,
    borderBottomColor: '#fff',    
    borderBottomWidth: 1,
  },
  textinput:{
    color: '#fff',
    fontSize: 20,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomColor: '#fff',    
    borderBottomWidth: 1,
    },
    button:{
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop:30,
    },
    btntext:{
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
    image:{
      alignSelf: 'stretch',
      alignItems: 'center', 
      width: 100,
      height: 100,
    },
    
});