import REQUESTS from "../../API/requests";
import { useNavigate } from "react-router-dom";
import classes from '../Style/logute.module.scss'



function Logoute() {
    const navigate = useNavigate()
function logute (){

    const colback = (data)=>{
        
            localStorage.removeItem('token')
            console.log(data)
            navigate('/')
           
        
    }
   const errorColback = (error)=>{console.log(error)}
   REQUESTS.LOGOUTE({"Content-Type": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`},colback,errorColback)

}

  const JWT = localStorage.getItem("token");

  return (
    <>
      <button className={classes.logoute_button} onClick={logute}>{JWT ? 'Logoute' : 'Login'}</button>
    </>
  );
}

export default Logoute;
