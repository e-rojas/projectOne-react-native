import React from 'react';
// import BasicComponent from './components/BasicComp'
import ColorList from './components/ColorList'
class App extends React.Component {
  state = {
    backgroundColor:'blue'
  }

  render() {
    return (
      
    <ColorList />
    );
  }
}



export default App;