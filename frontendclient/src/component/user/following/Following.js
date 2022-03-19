import React, {Fragment} from 'react';
import {Link, useParams} from 'react-router-dom'
// import './Following.css';

function Following() {
  const userId = useParams().id;
  return (
    <Fragment>
      <iframe src={`http://localhost:4200/user/following/${userId}`} width="100%" height="1000px"></iframe>
    </Fragment>
  );
}

export default Following;
