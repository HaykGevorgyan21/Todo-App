import RegisterData from "../../../Data/registerdata";
import REQUESTS from "../../../API/requests";
import classes from "../Style/loginform.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "..";
function LoginForm() {
  const navigate = useNavigate();
  
  const [registerinputsvalue, setRegisterinputsvalue] = useState({
    email: "",
    password: "",
  });
  const user_register = (event) => {
    event.preventDefault();
    const colback = (data) => {
      if(data.token){
 localStorage.setItem("token", data.token);
      console.log(data,'data')
        navigate("/home");
        
        
      }
      
     
      };
    
    const errorColback = (error) => {
      console.log(error);
    };
    REQUESTS.LOGIN(registerinputsvalue, colback, errorColback);
  };
  console.log(localStorage.getItem('token'), 25)
  const handelchange = (event) => {
    setRegisterinputsvalue({
      ...registerinputsvalue,
      [event.target.name]: event.target.value,
    });
  };
  console.log(registerinputsvalue);
  const register_form_inputs = RegisterData.map((el, index) => {
    if (index > 0 && index < 3) {
      return (
        <div className={classes.input_contanier_two} key={el.id}>
          <img src={el.image} alt="image" className={classes.input_image} />
          <input
            className={classes.register_bar}
            name={el.name}
            placeholder={el.placeholder}
            type={el.type}
            onChange={handelchange}
            key={el.id}
          />
        </div>
      );
    }
  });
  return (
    <div>
      <div className={classes.background_image_form}></div>
      <div className={classes.backgrond_form}>
        <div className={classes.login_form}>
          <h2>Log In</h2>
          <form onSubmit={user_register}>
            {register_form_inputs}
            <button className={classes.register_button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
