import React from 'react';
import Router from './Router/Route';
import DisplayNotes from './components/DisplayNotes';
import Login from './components/Login';

class App extends React.Component {
  render() {
     return (
        <div>
 <Router /> 
{/* <DisplayNotes /> */}
{/* <Login /> */}
        </div>                
     );
  }
}

export default App;
