import classes from "../styles/uploadImg.module.scss";
import { useState } from "react";
import { Button, Form, Input, Switch, Upload, Image, notification } from "antd";
import REQUESTS from "../../../API/requests";
import FormData from "form-data";

function UploadImg() {
  const [form] = Form.useForm();
  const [profileImg, setProfileImg] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const propsprofileImg = {
    onRemove: (file) => {
      const index = profileImg.indexOf(file);
      const newFileList = profileImg.slice();
      newFileList.splice(index, 1);
      setProfileImg(newFileList);
    },
    beforeUpload: (file) => {
      setProfileImg([file]);
      const myurl = window.URL
        ? window.URL.createObjectURL(file)
        : window.webkitURL.createObjectURL(file);
      setProfileImgUrl(myurl);

      //   if (file.type !== "image/jpeg" && file.type !== "image/png") {
      //     setProfileImg([]);
      //     setProfileImgUrl(null);
      //     // openNotification("You can only upload JPG/PNG file!");
      //   }
      return false;
    },
    profileImg,
  };

  console.log(profileImg);
  const onFinish = () => {
    setLoading(true);
  
    let formData =   new FormData();

    console.log(profileImg);
    profileImg.forEach((e) => {
      formData.append("avatar",e);
    });
  
   
    const colback = (data) => {
      console.log(data);
      setLoading(false);
    };

    const errorColback = (err) => {
      setLoading(false);
    };
    REQUESTS.UPLOAD_IMG(
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      formData,
      colback,
      errorColback
    );
  };

  return (
    <div className={classes['upload_div']}>
      <Form form={form} name="profile" layout="vertical" onFinish={onFinish}>
        <Form.Item className={classes['lable_profile']} label={"Profile imges"}>
          <div className={classes["app_uload_form"]}>
            <Image className={classes["uload_img"]} src={profileImgUrl || ""} />

            <Upload {...propsprofileImg} fileList={profileImg}>
              <Button className={classes["uload_button"]} type="primary">
                             </Button>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={classes["brending_save"]}
            loading={loading}>
            
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadImg;
