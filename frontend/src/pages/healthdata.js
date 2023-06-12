import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast} from 'react-toastify'
import '../css/common.css'
import Header from '../com/header';
function HealthData() {
    const [age, setage] = useState('')
    const [weight, setweight] = useState('')
    const [bloodsugar, setbloodsugar] = useState('')
    const [bloodgroup, setbloodgroup] = useState('')
    const [bp, setbp] = useState('')
    const [steps,setsteps] = useState('')
    const [recommendations, setRecommendations] = useState([]);

    const hdata = {
        age,
        weight,
        bloodsugar,
        bloodgroup,
        bp,
        steps
    }
    var sendData = () => {
        const id = sessionStorage.getItem("LogedUserId");
        axios
            .post("http://localhost:8080/user/addhealthdetails/" + id, hdata)
            .then((respose) => {
                if (respose['status'] === 'error') {
                    toast.error("error occured")
                } else {
                    // Navigate('/history')
                }
            }).catch(err => { console.log(err) })
    }

    const provideRecommendations = () => {
        // Simulated method to provide recommendations based on health parameters and age
    
        const newRecommendations = [];
    
        if (age >= 65 && weight < 70) {
          newRecommendations.push('Maintaining a healthy weight is important. Consider consulting a nutritionist.');
        }
    
        if (age >= 65 && steps < 5000) {
          newRecommendations.push('Regular physical activity is crucial. Aim for at least 5000 steps per day.');
        }

        if ((bp >= 120 || bp < 80) && age >= 65) {
            newRecommendations.push('To keep your blood pressure in a healthy range. Do more exercise. Improve your sleep. Limit your sugar and alcohol intake.');
          }
          
        if (age >= 65 && bloodsugar < 98 ) {
            newRecommendations.push('Keep track of your blood sugar levels to see what makes them go up or down. Eat at regular times, and do not skip meals.');
          } 

          newRecommendations.push('Getting enough water every day is important for your health.Drink plenty of water.');
    
        setRecommendations(newRecommendations);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
        provideRecommendations();
      };
    const Navigate = useNavigate()
    return ( <div>
        <div className='buttonright'>
            <Header></Header>
        </div>
        <div className='buttonleft'>
            <button className='btn btn-warning'
                onClick={() => { Navigate(-1) }}>Back</button>
        </div>
        <div className='buttonright'>
            <button className='btn btn-success'
                onClick={() => { Navigate("/history") }}>HealthHistory</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='centercontent'>
            <p className="text-center h2 fw-bold">Add Health details</p>
            <table className='table  table-bordered table-responsive  '>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                              Age :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='age'
                                onChange={(e) => { setage(e.target.value) }} />
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                              Weight (in kg):
                            </label>
                        </td>
                        <td>
                            <input type="number" name='weight' 
                                onChange={(e) => { setweight(e.target.value) }}></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                              Bloodsugar (in mg/dL) :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='Bloodsugar'
                                onChange={(e) => { setbloodsugar(e.target.value) }}></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                              Bloodgroup :
                            </label>
                        </td>
                        <td>
                            <input type="text" name='bloodgroup'
                                onChange={(e) => { setbloodgroup(e.target.value) }}></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                              Blood-Pressure (in mm Hg) :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='bp'
                                onChange={(e) => { setbp(e.target.value) }}></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                              Steps :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='steps'
                                onChange={(e) => { setsteps(e.target.value) }}></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td colSpan='2'>
                            <center>
                                <button className='btn btn-success' onClick={handleSubmit}>
                                    Get Recommendations
                                </button>
                            </center>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
        {recommendations.length > 0 && (
        <div>
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>  );
}

export default HealthData;