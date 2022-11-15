import classes from "../styles/userprofile.module.scss";
import REQUESTS from "../../../API/requests";
import { useState } from "react";
import { useEffect } from "react";
import RegisterData from "../../../Data/registerdata";
import EditProfile from "./EditProfile";
import UploadImg from "./UploadImg";
function UserProfile() {
  const [userprofile, setUserprofile] = useState();

  function GetProfile() {
    const colback = (data) => {
      setUserprofile(data);
    };
    const errorColback = (error) => {
      console.log(error);
    };
    REQUESTS.GETPROFILE(
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      colback,
      errorColback
    );
  }
  useEffect(() => {
    GetProfile();
  }, []);
  console.log(userprofile);

  return (
    <>
      <div className={classes["background_profile_page"]}>
        <div className={classes["profile_image"]}></div>
        <div className={classes["add_photo"]}></div>
        <div className={classes["profile_aboute"]}>
          <EditProfile GetProfile={GetProfile} />
          <UploadImg />
          <p>name: {userprofile?.name}</p>
          <p>age: {userprofile?.age}</p>
          <p>data: {userprofile?.createdAt.slice(0, 10)}</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
