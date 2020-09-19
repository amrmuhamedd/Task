import React from 'react';
import './app.less';
import Navbar from './componant/navbar/navbar';
import Doctorprofile from './componant/doctorProfile/doctorProfile';
const  App = () =>  {
  return (
    <div className="App">
      <Navbar/>
      <Doctorprofile/>
    </div>
  );
}

export default App;
