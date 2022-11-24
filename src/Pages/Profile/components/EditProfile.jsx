import RegisterData from "../../../Data/registerdata";
import { memo, useState } from "react";
import REQUESTS from "../../../API/requests";
import { useNavigate } from "react-router-dom";
import classes from "../styles/editprofile.module.scss";

function EditProfile({ GetProfile }) {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const [userprofile, setuserprofile] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const handlechangeprofile = () => {
    setshow(!show);
  };

  const edit_profile = (event) => {
    event.preventDefault();
    const colback = (data) => {
      GetProfile();
      console.log(data);
    };
    const errorColback = (error) => {
      console.log(error);
    };
    REQUESTS.UPDATEPROFILE(
      userprofile,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      colback,
      errorColback
    );
  };

  const handelchange = (event) => {
    setuserprofile({
      ...userprofile,
      [event.target.name]: event.target.value,
    });
  };
  console.log(setuserprofile);
  const register_form_inputs = RegisterData.map((el) => {
    return (
      <div className={classes.input_contanier} key={el.id}>
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
  });
  return (
    <>
      <button
        onClick={handlechangeprofile}
        className={classes.show_button}></button>
      <div className={classes.backgrond_form}>
        <div className={show ? classes.register_form : classes.show}>
          <h3 className={classes.change_settings}>Change Your Settings</h3>
          <form onSubmit={edit_profile}>
            {register_form_inputs}
            <button className={classes.register_button}>Edit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(EditProfile);
