// @flow
import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import * as droneAction from './../../../actions/droneAction'
import './Drone.scss'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

export default function Drone() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  return (
    <Fragment>
      <iframe src={`http://localhost:4200/allDrone`} width="100%" height="1000px"></iframe>
    </Fragment>
  );
};