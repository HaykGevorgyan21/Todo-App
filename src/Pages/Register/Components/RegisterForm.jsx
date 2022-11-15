import RegisterData from "../../../Data/registerdata"
import { memo, useState } from "react"
import REQUESTS from "../../../API/requests"
import classes from '../Style/registerForm.module.scss'
import { useNavigate } from "react-router-dom"



function RegisterForm () {
const navigate = useNavigate()

const [registerinputsvalue, setRegisterinputsvalue] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    
})
const user_register = (event)=>{
    event.preventDefault()
    const colback = (data)=>{
        localStorage.setItem('token',data.token)
            
   navigate("/login")

        
}
    const errorColback = (error)=>{console.log(error)}
    REQUESTS.REGISTER(registerinputsvalue,colback,errorColback)
}

const handelchange  = (event) =>{
    
setRegisterinputsvalue({
    ...registerinputsvalue,
    [event.target.name]: event.target.value
})
}
console.log(registerinputsvalue)
const register_form_inputs = RegisterData.map((el)=>{
return (<div className={classes.input_contanier} key={el.id}>
    <img src={el.image} alt="image" className={classes.input_image} />
    <input className={classes.register_bar}  name={el.name} placeholder={el.placeholder} type={el.type} onChange={handelchange} key={el.id}/>
</div>)
})
return(<div>
<div className={classes.background_image_form}></div>
<div className={classes.backgrond_form}> 
    <div className={classes.register_form}> 
              <h2>Sign Up</h2>
         <form onSubmit={user_register}>
            {register_form_inputs}
            <button className={classes.register_button}>Register</button>
         </form>
    </div>
    </div>
</div>)

}

export default memo(RegisterForm);