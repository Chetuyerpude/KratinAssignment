import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../com/header';


const HealthHistory = () => {
    const [listings, setListings] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        getMyHealthHistory()
    }, [])

    const getMyHealthHistory = () => {
        const id = sessionStorage.getItem("LogedUserId");
        axios.get("http://localhost:8080/user/gethealthhistory/"  + id)
            .then(response => {
                const result = response.data
                // setListings(response.data)
                if (result['status'] === 'error') {
                    toast.error(result['error'])
                } else {
                    console.log(result)
                    setListings(result)
                }

            }).catch(err => { console.log(err) })
    }

    const deleteHealthData = (id) => {

        axios.delete("http://localhost:8080/user/deletedata/" + id)
            .then((response) => {
                const result = response.data
                if (result['status'] === 'error') {
                    toast.error("unable to delete")
                  
                } else {
                    toast.success("data deleted")
                    getMyHealthHistory()
                }
            }).catch(err => { console.log(err) })
    }

    return (
        <div style={{ border: '3px solid #ccc', borderRadius: '5px', padding:'10px'}} >
            <div className='buttonright'>
                <Header></Header>
            </div>
            <div className='datatable'  style={{marginTop:'5px'}}>
                <div className='overlappeddiv '  style={{marginTop:'5px'}}>
                    <div className='innerlappeddiv ' style={{marginTop:'5px'}}>
                        <button className='btn btn-warning'
                            onClick={() => { Navigate(-1) }}>Back</button>
                    </div>
                </div>
                <br />
                <div style={{ border: '3px solid #ccc', borderRadius: '5px', padding:'10px'}}>
                    <p className="text-center h2 fw-bold headertext">My HealthHistory</p>
                </div>
                <div style={{ border: '3px solid #ccc', borderRadius: '5px', padding:'10px'}}>
                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Age</td>
                            <td>Weight</td>
                            <td>Blood-sugar</td>
                            <td>Bloodgroup Date</td>
                            <td>Blood-Pressure</td>
                            <td>Steps</td>

                            <td></td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            listings.map((p) => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.age}</td>
                                        <td>{p.weight}</td>
                                        <td>{p.bloodsugar}</td>
                                        <td>{p.bloodgroup}</td>
                                        <td>{p.bp}</td>
                                        <td>{p.steps}</td>
                                        <td><button className='btn btn-danger'  onClick={() => deleteHealthData(p.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default HealthHistory;