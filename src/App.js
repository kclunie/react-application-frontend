import React from 'react';
import TripsContainer from './containers/TripsContainer'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TripsContainer/>
      </div>
    );
  }
}

export default App;




























//import {connect} from 'react-redux'
//import {fetchTrips} from './actions/fetchTrips'
//import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }