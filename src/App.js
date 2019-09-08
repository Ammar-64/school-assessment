import React from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FormtTR from './Components/formTR';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Navbar}/>
          <Route exact path="/school-assessment" component={Form}/>
          <Route exact path="/school-assessment/tr" component={FormtTR} />
          <Route path="/" component={Footer}/>
        </React.Fragment>
     </Router>    
   
  );
}

export default App;
