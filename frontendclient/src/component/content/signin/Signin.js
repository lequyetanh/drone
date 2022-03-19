import React, {Fragment, useState, useEffect} from 'react';
// import * as service from './../../services/dataService';
import './Signin.scss';
import {Link, useHistory, Redirect} from 'react-router-dom';
import * as userAction from './../../../actions/userActions'
import {useDispatch, useSelector} from 'react-redux';

function Signin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userInforReducer = useSelector((state) => state.userInfor)
  const {loadingUserInfor, userInfor, errorInfor, login} = userInforReducer;
  const [email,
    setEmail] = useState();
  const [name,
    setFullname] = useState();
  const [password,
    setPassword] = useState();
  const [repassword,
    setRePassword] = useState();

  const userSignInReducer = useSelector(state => state.userSignIn);
  const {loadingUserSignIn, userInfor: userSignIn, errorUserSignIn} = userSignInReducer;

  useEffect(() => {
    if (login) {
      console.log(login)
      // alert("Bạn đã login rồi")
      return history.push("/")
    }
    if (userSignIn) {
      if (userSignIn.message) {
        alert(userSignIn.message);
      } else {
        alert("SignIn thành công")
        return history.push("/")
      }
    }
  }, [login, userSignIn])

  useEffect(() => {
    dispatch(userAction.getAllUser())
  }, [])

  const signIn = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      avatar: null,
      gender: null,
      phone_number: null,
      eddress: null,
      position: null,
      idDrone: null,
      package: [],
      distance: null
    };
    dispatch(userAction.userSignIn(data))
  }

  return (
    <Fragment>
      <div
        className=""
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={signIn}>
                <div className="form-group">
                  <label className="col-form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" "
                    name="Name"
                    required=""
                    required
                    onChange={(e) => setFullname(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=" "
                    name="Email"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=" "
                    name="Password"
                    id="password1"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=" "
                    name="Confirm Password"
                    id="password2"
                    required=""
                    onChange={(e) => setRePassword(e.target.value)}/>
                </div>
                <div className="right-w3l">
                  <input type="submit" className="form-control" value="Register"/>
                </div>
                <div className="sub-w3l">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlAutosizing2"/>
                    <label className="custom-control-label" for="customControlAutosizing2">I Accept to the Terms & Conditions</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Signin;
