import React, {Fragment, useState, useEffect} from 'react';
import './Login.scss';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import * as userAction  from './../../../actions/userActions'

function Login() {

  let history = useHistory()
  const dispatch = useDispatch();

  const [email, setEmail] = useState('lequyetanh@gmail.com');
  const [password, setPassword] = useState('12345678');
  const userLogin = useSelector((state) => state.userInfor)
  const { loading, userInfor, error, login} = userLogin

  useEffect(() => {
    if(login){
      console.log(login)
      // alert("Bạn đã login rồi")
      return history.push("/")
    }
  }, [login])
  
  // cho thằng này lên trước useEffect thì bị lỗi


  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password)
    dispatch(userAction.userLogIn({email: email, password: password}))
    //   if(response.data){
    //     // console.log(userLogin)
        return history.push("/")
    //   }
    // });
  };

  return (
    <Fragment>
        {
          login !== true ? 
          <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-center">Log In</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label className="col-form-label">Email address</label>
                      <input type="email" className="form-control" placeholder=" " name="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input type="text" className="form-control" placeholder=" " name="Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="right-w3l">
                      <input type="submit" className="form-control" value="Log in" />
                    </div>
                    <div className="sub-w3l">
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
                      </div>
                    </div>
                    <p className="text-center dont-do mt-3">Don't have an account?
                      <a href="#" data-toggle="modal" data-target="#exampleModal2">
                        Register Now</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          : 
          <div>

          </div>
        }
    </Fragment>
  );
}

export default Login;
