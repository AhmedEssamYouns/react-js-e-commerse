import { ExitToAppOutlined, Phone } from "@mui/icons-material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Fragment } from "react";
import { useState } from "react";
import Login from "../singin/up/signIN";

import "./user.css";

export default function User() {
  const [img, setImg] = useState("https://th.bing.com/th/id/OIP.CEXYZ181h14EC_bjLoO1EAHaHa?pid=ImgDet&w=1024&h=1024&rs=1");
  // let Ahmed = localStorage.getItem("sanskarname").replace(/"/g, "");
  // let Ahmed2 = localStorage.getItem("sanskarname2").replace(/"/g, "");
  // let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
  // let phone = localStorage.getItem("sanskarPhone");
  // let login = localStorage.getItem("login");

  const [test, settest] = useState(0);

  // const [a1, setName] = useState("");
  // const [a2, setName2] = useState("");
  // const [a3, setEmail] = useState("");
  // const [a4, setPhone] = useState(0);


  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   localStorage.setItem("sanskarname", JSON.stringify(a1));
  //   localStorage.setItem("sanskarname2", JSON.stringify(a2));
  //   localStorage.setItem("sanskarPhone", JSON.stringify(a3));
  //   localStorage.setItem("sanskarEmail", JSON.stringify(a4));
  // }
  function Edit() {


    if (test == 1)
      return (
        <div className="userUpdate">

          <span className="userUpdateTitle">Edit &ensp;<p class="fas fa-edit"></p></span>

          <form className="userUpdateForm" >
            <div className="userUpdateLeft">
              <div className="userUpdateRight" id="now1">
                <div className="userUpdateUpload">

                  <img
                    className="userUpdateImg"
                    src={img}
                    alt=""
                  />


                  <label htmlFor="file">
                    <p className="fas fa-edit" style={{ color: "green" }}></p>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} onChange={onImageChange} />
                </div>


              </div>
              <div class="form-container">
                <div className="userUpdateItem">

                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="userUpdateInput"
                  //  onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="userUpdateInput"
               //     onChange={(event) => setName2(event.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="userUpdateInput"
                 //   onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="email"
                    placeholder="11 22 33"
                    className="userUpdateInput"
                   // onChange={(event) => setPhone(event.target.value)}
                  />
                </div>


                <div className="userUpdateItem">

                  <button
                    className="btn" >
                    Update
                  </button>

                </div>

              </div>

            </div>
            <form>
              <div className="userUpdateRight" id="now2" >
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={img}
                    alt=""
                  />


                  <label htmlFor="file" id="zok">
                    <h3>upload photo &ensp;<p className="fas fa-edit" style={{ color: "green" }}></p></h3>
                  </label>

                  <input type="file" id="file" style={{ display: "none" }}
                    onChange={onImageChange}
                  />
                </div>


              </div>
            </form>
          </form >
        </div >
      )
  }

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  return (<Fragment>
    <div className="user">

      <section f1>
        <div className="userTitleContainer">
        <h1 class="heading">your <span>profile </span> account  </h1>

         

        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://th.bing.com/th/id/OIP.CEXYZ181h14EC_bjLoO1EAHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                 <h2>User Name</h2>
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon" />
                <span className="userShowInfoTitle"> <h2> name </h2>
                </span>
              </div>

              <span className="userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon" />
                <span className="userShowInfoTitle"><b id="fotnto"> Email@.com</b> </span>
              </div>
              <div className="userShowInfo">
                <Phone className="userShowIcon" />
                <span className="userShowInfoTitle"><b id="fotnto"> 1234 123 12 </b></span>

              </div>
              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon" />
                <span className="userShowInfoTitle"><b id="fotnto"> city | country </b></span>

              </div>

              <button className="btn"  onClick={() => settest(1)} >Edit</button>

            </div>

          </div>
          <Edit />
        </div>
      </section>
    </div>
    <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>

  </Fragment>
  )
}
