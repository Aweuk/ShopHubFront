import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from './src/login';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Press to start"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },

  Login: {
    screen: LoginScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);