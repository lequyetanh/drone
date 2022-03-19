import React, {Fragment, useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import * as userAction from './../../../actions/userActions'
import './Profile.scss';


function Profile() {

  const dispatch = useDispatch();

  let history = useHistory()
  let userInforReducer = useSelector((state) => state.userInfor)
  const {loading, userInfor, error, login} = userInforReducer

  useEffect(() => {
    // console.log(login)
    // console.log(userInforReducer)
    if(login == false){
      // console.log("ahihi")
      return history.push("/")
    }
  }, [userInforReducer])

  return (
    <Fragment>
      <div class="container wrapp">
        {userInfor ? 
          <Fragment>
            <div class="information">
              <div class="image">
                <img class="dimension" src={`/assets/icon/${userInfor.user.avatar}`}></img>
              </div>
              <div class="infor">
              <h2 class="userName">User Name: {userInfor.user.name}</h2>
              <h3 class="address">Address: {userInfor.user.address ? userInfor.user.address : "Null"}</h3>
              <h3 class="phoneNumber">Phone Number: {userInfor.user.phone_number}</h3>
              <h3 class="email">Email: {userInfor.user.email}</h3>
              <h3 class="status">Status: Null</h3>
              </div>
            </div>
            <div class="cart"></div>
          </Fragment>
          : ""
      }
      </div>
    </Fragment>
  );
}

export default Profile;
