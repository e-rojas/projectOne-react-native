import React from 'react';
import BasicComponent from './components/BasicComp'
import ColorList from './components/ColorList'
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './components/Screen1'
import ColorInfo from './components/ColorInfo'
import Gallery from './components/Gallery'
const Stack = createStackNavigator();
class App extends React.Component {
  state = {
    backgroundColor: 'blue'
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen
            name="Home"
            component={Screen1}
            options={{ title: 'Colors' }}
          />
          <Stack.Screen name="Details" component={ColorInfo} 
           options={({ route }) => ({ title: route.params.color })}
         /*  options={{ title: 'Color Details' }} */
           />
           <Stack.Screen name="Gallery" component={Gallery} 
           options={({ route }) => ({ title: 'Gallery'})}
         /*  options={{ title: 'Color Details' }} */
           />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
{/* <Screen1  onColorSelected={color => Alert.alert(color)}/> */ }


export default App;