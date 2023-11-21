import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';

function App() {
  const [bmi, setBmi] = useState(0)
  const [bmiType, setBmiType] = useState('overweight')


  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form />
        </div>
        <BmiScore bmi={bmi} bmiType={bmiType} />
        <BmiList />
      </div>
    </>
  );
}

export default App;
