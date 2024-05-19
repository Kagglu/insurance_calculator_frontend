//import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import { useState, useEffect, useCallback } from 'react';
import LocationSelector from './components/LocationSelector';
import AgeSelector from './components/AgeSelector';
import IncomeSelector from './components/IncomeSelector';
import './App.css';
import axios from 'axios';
import Plan from './components/Plan'
import PageSelector from './components/PageSelector';

function App() {
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [countyFips, setCountyFips] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [plans, setPlans] = useState('');
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0);
  const [planCount, setPlanCount] = useState(0);


  const handleStateChange = (newState) => {
    setState(newState);
  }

  const handleZipcodeChange = (newZipcode) => {
    setZipcode(newZipcode);
  }

  const handleAgeChange = (newAge) => {
    setAge(newAge);
  }

  const handleIncomeChange = (newIncome) => {
    setIncome(newIncome);
  }

  const handleCountyFipsChange = (newCountyFips) => {
    setCountyFips(newCountyFips);
  }

  const handlePageChange = (newPage) => {
    console.log("newpage: ", newPage);
    if (newPage !== page && newPage !== undefined) {
      setPage(newPage);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
  }

  const getPlans = useCallback(async () => {
    try {
      console.log("offset:", (page - 1) * 10, "  page:", page);
      const response = await axios.get('https://api.kagglu.com/plans', {
        params: { income: income, age: age, countyfips: countyFips, state: state, zipcode: zipcode, offset: (page - 1) * 10 }
      });
      setPlans(response.data.data);
      setPlanCount(response.data.total);
      setSubmitted(true);
    } catch (error) {
      console.error("Error getting plans:", error);
    } finally {
      setLoading(false);
    }
  }, [page, income, age, countyFips]);

  useEffect(() => {
    if (page >= 1) {
      getPlans();
    }
  }, [page, getPlans]);


  return (
    <div>
      <div>
        <header className="App-header">
          <p>
            Find the cheapest insurance plan.
          </p>
        </header>
      </div>
      <div className="App clearfix">
        <div className="form">
            <h1>Location:</h1>
            <hr className="horizontal-line"/>
            <LocationSelector onStateChange={handleStateChange} onZipcodeChange={handleZipcodeChange} onCountyFipsChange={handleCountyFipsChange}/>

            <h1>Age:</h1>
            <hr className="horizontal-line"/>
            <AgeSelector onAgeChange={handleAgeChange}/>

            <h1>Income:</h1>
            <hr className="horizontal-line"/>
            <IncomeSelector onIncomeChange={handleIncomeChange}/>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
        {submitted && !loading &&  <PageSelector planCount={planCount} page={page} onPageChange={handlePageChange}/>}
        <div>
          <br></br>
          {submitted && plans && plans.map((plan) => (
            <Plan plan={plan} key={plan.id}/>
          ))}
        </div>
        {submitted && !loading && <PageSelector planCount={planCount} page={page} onPageChange={handlePageChange}/>}
      </div>
    </div>
  );
}

export default App;
