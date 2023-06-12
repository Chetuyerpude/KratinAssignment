import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../css/common.css'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    

    const Navigate = useNavigate()
    var title = "";
    
    
    var gender = "";
    const postUser = () => {
       
        var getTitle = document.getElementById("title");
        var getGender = document.getElementById("gender")
        var selectedTitle = getTitle.selectedIndex;
       
        var selectedGender = getGender.selectedIndex;
        if (firstName.length === 0) {
            toast.error('Enter User details')
        } else if (password !== confirmPassword) {
            toast.error('Password must match')
        
       
        } else if (selectedTitle === 0) {
            toast.error('Please select proper Title')
       
        } else if (selectedGender === 0) {
            toast.error('Please select Gender')
        } else {
            if (selectedTitle === 1) {
                debugger;
                title = "Mr";
            }
            else if (selectedTitle === 2) {
                title = "Mrs";
            }
           
            if (selectedGender === 1) {
                gender = "Male";
            } else if (selectedGender === 2) {
                debugger;
                gender = "Female";
            } else if (selectedGender === 3) {
                gender = "Other";
            }
           
          
            const body = {
                title,
                firstName,
                middleName,
                lastName,
                dob,
                password,
                gender,
                email,
                mobileNumber
                
               
              
            }
            debugger;
            console.log(body)
            axios
                .post("http://localhost:8080/register", body)
                .then((response) => {
                    const result = response.data
                    if (result['status'] === 'error') {
                        toast.error('User Registration failed')
                    } else {
                        toast.success('User Registered Successfully')
                        Navigate('/signin')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    return (
        <div style={{ border: '3px solid #ccc', borderRadius: '5px', padding:'10px',backgroundColor:'lightslategrey'}}>
            <p className="text-center h1 fw-bold"><u><u>Registration Form</u></u></p>
            <br />
            <br />
            <p className="text-center h6 fw-bold"><u><h1>User Info</h1></u></p>        <br />

            <div className="center" >
                <div className="innerdiv">
                    <div className="inputdiv style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}">
                        <label
                            className="form-label">
                            <b>Title</b>
                        </label>
                        <select id='title' className="form-control" required="required">
                            <option value="0">Select title</option>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                        </select>
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>First Name</b>
                        </label>
                        <input type="text" required="required"
                            name="firstName" placeholder="Enter First Name"
                            className="form-control"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />
                    </div>
                    <div className="inputdiv style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}">
                        <label
                            className="form-label">
                            <b>Middle Name</b>
                        </label>
                        <input type="text" required="required"
                            name="middleName" placeholder="Enter Middle Name"
                            className="form-control"
                            onChange={(e) => {
                                setMiddleName(e.target.value)
                            }} />
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Last Name</b>
                        </label>
                        <input type="text" required="required"
                            name="lastName" placeholder="Enter Last Name"
                            className="form-control"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="innerdiv">
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Gender</b>
                        </label>
                        <select id='gender' className="form-control" required="required" >
                            <option value="0">Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Dob</b>
                        </label>
                        <input type="date"
                            name='dob'
                            className="form-control"
                            onChange={(e) => {
                                setDob(e.target.value)
                            }} />
                    </div>
                    <div className="innerdiv">
                       
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Email</b>
                            </label>
                            <input type="email" required="required"
                                name="email" placeholder="Enter Your Email"
                                className="form-control"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="innerdiv">
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Password</b>
                            </label>
                            <input type="password" required="required"
                                name="password" placeholder="Enter Your password"
                                className="form-control"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Confirm Password</b>
                            </label>
                            <input type="password" required="required"
                                name="confirmPassword" placeholder="Confirm Your password"
                                className="form-control"
                                onChange={(e) => {
                                    setConfrimPassword(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Contact Number</b>
                            </label>
                            <input type="number" required="required"
                                name="mobileNumber" placeholder="Enter Your Mobile Number"
                                className="form-control"
                                onChange={(e) => {
                                    setMobileNumber(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>        <br />


               

               

                <div className='mb-3'>
                    <button className="btn btn-danger btn-lg submitbutton" onClick={()=>{Navigate(-1)}} >
                      Back
                    </button>
                    <button className="btn btn-primary btn-lg submitbutton" onClick={postUser}>
                        Sign Up
                    </button>
                    <button className="btn btn-info btn-lg submitbutton" onClick={()=>{Navigate('/signin')}}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Register
