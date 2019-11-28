import React from 'react';
import {connect} from 'react-redux'
import {fetchTrips} from './actions/fetchTrips'
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount(){
    // fetch('http://localhost:3000/api/v1/trips', {
    //   method: 'GET'
    // })
    // .then(response => response.json())
    // .then(data =>console.log(data))
    this.props.fetchTrips({type: 'FETCH_TRIPS', payload: {name: 'England/Ireland Trip'}})
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, {fetchTrips})(App);





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