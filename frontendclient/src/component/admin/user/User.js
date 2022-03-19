// @flow
import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import * as userAction from './../../../actions/userActions'
import * as droneAction from './../../../actions/droneAction';
import './User.scss'
import { deleteUser } from '../../../services/userService';

export default function User() {

  const dispatch = useDispatch();
  const [droneSelected, setDroneSelected] = useState("drone 1");
  const [droneAvailable, setDroneAvailable] = useState({});

  const allUserReducer = useSelector(state => state.allUser);
  const {loading: loadingAllUser, allUser: allUser, error: errorAllUser} = allUserReducer;

  const allDroneReducer = useSelector(state => state.allDrone);
  const {loading, allDrone, error} = allDroneReducer;

  useEffect(() => {
    dispatch(userAction.getAllUser());
    dispatch(droneAction.getAllDrone());
  }, [])

  useEffect(() => {
    // console.log(allUser)
    // console.log(droneSelected)
    if(allDrone != undefined){
      filterDroneAvailable(allDrone);
    }
  }, [allDrone, droneSelected])

  useEffect(()=>{
    // console.log(drone)
  },)

  const checkedOut = (id, user) => {
    // console.log(user)
    // console.log(droneSelected)
    dispatch(droneAction.updateDrone(droneSelected.id, {
      ...droneSelected,
      status: 'busy',
      idUser: user.id,
      package: user.package,
    }))

    dispatch(userAction.updateUser(id, {
      ...user,
      idDrone: droneSelected.id,
      checkOut: 3
    }))
  }

  const setUser = (user) => {
    localStorage.setItem('user',JSON.stringify(user));
  }

  const selectDrone = ( name ) => {
    for(let i=0; i<allDrone.length; i++){
      if(allDrone[i].drone_name == name){
        setDroneSelected(allDrone[i])
      }
    }
  }

  const filterDroneAvailable = (allDrone) => {
    let local = [];
    setDroneAvailable([]);
    for(let i=0; i<allDrone.length; i++){
      if(allDrone.status == 'free'){
        local.push(allDrone[i])
      }
    }
    setDroneAvailable(local)
  }

  const deleteUser = (userId) => {

  }

  return (
    <Fragment>
      {allUser
        ? <Fragment>
            <div className="privacy py-sm-5 py-4">
              <div className="container py-xl-4 py-lg-2">
                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                  <span>C</span>heckout
                </h3>
                <div className="checkout-right">
                  <div className="table-responsive">
                    <table className="timetable_sub">
                      <thead>
                        <tr>
                          <th>Id user</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Trạng Thái Nguoi Dung</th>
                          <th>Confirm</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allUser.map(user => (
                          <tr key={user.id} className="rem1">
                            <td className="invert">{user.id}</td>
                            <td className="invert-image blackColor">
                                {user.name}
                            </td>
                            <td
                              className="invert"
                              style={{
                              width: '150px'
                            }}>
                              <div className="quantity">
                                <div className="quantity-select">
                                  <span>{user.email}</span>
                                </div>
                              </div>
                            </td>
                            <td className="invert">{user.address}</td>

                            {user.checkOut == 1 && <td className="invertv">
                              <p className="status1 pointer">Đang Chọn Hàng</p>
                            </td>}

                            {user.checkOut == 2 && <td className="invertv">
                              <p className="status2 pointer">Dang Dat Hang, Doi Xac Nhan</p>
                            </td>}

                            {user.checkOut == 3 && <td className="invertv">
                              <p className="status3 pointer">Đang Giao Hàng</p>
                            </td>}

                            <td className="invert">
                            {user.checkOut == 2 &&  <td className="invertv">
                            <Link to={`/admin/userdetail/${user.id}`} className="status2 pointer">Detail</Link>
                            </td>}
                            </td>
                            <td className="invert delete" onClick={() => deleteUser(user.id)}>Delete</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        : <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
}
    </Fragment>
  );
};