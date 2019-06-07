import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};
  }
    render() {
      return (
        <View style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: 'powderblue'}} />
            <View style={{flex: 2, backgroundColor: 'skyblue'}} >
              <TextInput style={{flex: 1}}
              placeholder="Username"
              onChangeText={(username) => this.setState({username})}
              />
              <TextInput style={{flex: 1}}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
              />
            </View>
            <View style={{flex: 2, backgroundColor: 'steelblue'}} />
        </View>
      );
    }  
  }
export default LoginScreen;