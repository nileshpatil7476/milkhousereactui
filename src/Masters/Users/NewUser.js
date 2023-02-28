import React from "react";
import axios from 'axios'; 
import '../Users/NewUser.css';
import $ from 'jquery';
import pic from '../../Images/defaultProfile.jpg';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleCheck = (e) => {
    this.setState({
      checkedGender: e.target.id,
      isChecked: !this.state.isChecked,
    });
  };

  goToHome = () => {
    window.location.href = "/";
  };

  resetform = () => {
    document.getElementById("newUserForm").reset();
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleSubmit(e) {
    var jsondata = {
        // "id": 0,
        // "name": e.target.elements.name.value,
        // "contactNo": e.target.elements.contactNo.value,
        // "email": e.target.elements.email.value,
        // "address": [
        //   {
        //     "houseNo": e.target.elements.houseNo.value,
        //     "tahasil": e.target.elements.tahasil.value,
        //     "city": e.target.elements.city.value,
        //     "district": e.target.elements.district.value,
        //     "pinCode": e.target.elements.pinCode.value
        //   }
        // ],
        // "gender": "string",
        // "dob": "string",
        // "role": 0,
        // "aadharNo": "string",
        // "bankAccNo": "string",
        // "password": "string",
        // "confirmPassword": "string"

      "id": 0,
      "name": e.target.elements.name.value,
      "contactNo": e.target.elements.contactNo.value,
      "email": e.target.elements.email.value,
      "address": [
        {
          "houseNo": e.target.elements.houseNo.value,
          "tahasil": e.target.elements.tahasil.value,
          "city": e.target.elements.city.value,
          "district": e.target.elements.district.value,
          "pinCode": e.target.elements.pinCode.value
        }
      ],
      "gender": this.state.checkedGender,
      "dob": e.target.elements.dob.value,
      "role": 0,
      "aadharNo": e.target.elements.aadharNo.value,
      "bankAccNo": e.target.elements.bankAccNo.value,
      "password": e.target.elements.password.value,
      "confirmPassword": e.target.elements.confirmPassword.value
    };
    //   $.ajax({
    //     type: "POST",
    //     url: "http://localhost:7046/users/AddUser",
    //     data: jsondata,
    //     async: true,
    //     success: function (response) {
    //         alert("Event has been successfully created!");
    //     },
    //     error: function (response) {
    //       console.log(response);
    //     }
    //   });

    // const requestOptions = {
    //   method: "POST",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(jsondata),
    // };
    axios.post("https://localhost:7046/api/users", jsondata).then((res) => {
      window.alert(res.message);
    });
    // fetch('http://localhost:2000/users/AddUser', requestOptions).
    // then(
    //     response=> {
    //         window.alert(response.message)
    //     }
    //     );
    // fetch("https://localhost:7046/api/users",
    //         {
    //             method: "POST",
    //             cache: "no-cache",
    //             headers:{
    //                 "content_type": "application/json"
    //             },
    //             body: JSON.stringify(jsondata)
    //         })
    //         .then(response=> {
    //           response.json();
    //           console.log(response);
    //         } )
  }

  render() {
    return (
      <div className="card col-11">
        <div className="card-header">
          <i class="bi bi-person-plus-fill"></i> New User
        </div>
        <form onSubmit={this.handleSubmit} id="newUserForm">
          <div className="card-body userFormBody">
            <div className="mb-2 row">
              <div className="col-9">
                <div className="mb-2">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Please enter your name"
                  />
                </div>
                <div className="mb-2">
                  <label for="contactNo" class="form-label">
                    Contact No
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="contactNo"
                    placeholder="Please enter your contact no"
                  />
                </div>
                <div className="mb-2">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Please enter your email address"
                  />
                </div>
              </div>
              <div className="col-3">
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    {/* <PhotoCamera /> */}
                    <img src={pic} width="200"></img>
                  </IconButton>
                </label>
              </div>
            </div>
            <div className="mb-2 row">
              <label for="address" className="form-label">
                Address
              </label>
              <div className="col-6">
                <div className="mb-2">
                  <label for="houseNo" class="form-label">
                    House No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="houseNo"
                    placeholder="House no."
                  />
                </div>
                <div className="mb-2">
                  <label for="tahasil" class="form-label">
                    Tahasil
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="tahasil"
                    placeholder="Tahasil"
                  />
                </div>
                <div className="mb-2">
                  <label for="pinCode" class="form-label">
                    Pin Code
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="pinCode"
                    placeholder="Pin Code"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <label for="city" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    placeholder="city"
                  />
                </div>
                <div className="mb-2">
                  <label for="district" class="form-label">
                    District
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="district"
                    placeholder="District"
                  />
                </div>
              </div>
            </div>

            <div className="mb-2">
              <label for="gender" class="form-label">
                Gender
              </label>
              <div className="">
                <input
                  className="form-check-input m-2"
                  type="checkbox"
                  id="male"
                  onChange={this.toggleCheck}
                  checked={this.state.checkedGender === "male"}
                />
                <label class="form-check-label m-2" for="flexCheckDefault">
                  Male
                </label>
                <input
                  className="form-check-input m-2"
                  type="checkbox"
                  id="female"
                  onChange={this.toggleCheck}
                  checked={this.state.checkedGender === "female"}
                />
                <label class="form-check-label m-2" for="flexCheckDefault">
                  Female
                </label>
                <input
                  className="form-check-input m-2"
                  type="checkbox"
                  id="other"
                  onChange={this.toggleCheck}
                  checked={this.state.checkedGender === "other"}
                />
                <label class="form-check-label m-2" for="flexCheckDefault">
                  Other
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label for="dob" class="form-label">
                Date Of Birth
              </label>
              <input type="date" class="form-control" id="dob" />
            </div>
            <div className="mb-2">
              <label for="role" class="form-label">
                Role
              </label>
              <select
                class="form-control"
                id="role"
                placeholder="Please enter your email address"
              >
                <option value="">-- Select Role --</option>
                <option value="1">Admin</option>
                <option value="2">Vendor</option>
              </select>
            </div>
            <div className="mb-2">
              <label for="aadharNo" class="form-label">
                Aadhar No
              </label>
              <input
                type="text"
                class="form-control"
                id="aadharNo"
                placeholder="Please enter your aadhar card no"
              />
            </div>
            <div className="mb-2">
              <label for="bankAccountNo" class="form-label">
                Bank Account No
              </label>
              <input
                type="text"
                class="form-control"
                id="bankAccNo"
                placeholder="Please enter your bank account no"
              />
            </div>
            <div className="mb-2">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Please enter Password"
              />
            </div>
            <div className="mb-2">
              <label for="confirmPassword" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Please re-enter Password"
              />
            </div>
          </div>
          <div className="card-footer">
            <input
              className="btn btn-outline-success m-2"
              type="submit"
              value="Submit"
            />
            <input
              className="btn btn-outline-danger m-2"
              value="Cancel"
              onClick={this.goToHome}
            />
            <input
              className="btn btn-outline-secondary m-2"
              value="Reset"
              onClick={this.resetform}
            />
          </div>
        </form>
      </div>
    );
  }
}


export default NewUser;