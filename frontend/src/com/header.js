
import '../css/common.css'
import'../css/home.css'
import { useNavigate } from "react-router-dom"
function Header() {

    const Navigate=useNavigate()
    const signOut=()=>{
        sessionStorage.removeItem('LogedInuser')
        Navigate('/signin')
    }
   
    return ( 
        <div  >
        <div style={{marginLeft:'1250px', marginTop:'10px'}}>
                            <button className="btn btn-danger" onClick={signOut}>
                                LogOut
                            </button>
          </div>
        </div>
     );
}

export default Header;