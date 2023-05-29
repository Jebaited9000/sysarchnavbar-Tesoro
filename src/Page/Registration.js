import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';
import { type } from '@testing-library/user-event/dist/type';

const Forms = () => {
  const displayEmail = () =>{
    alert('Your email address is ' + type + '\nYour password is ' + type)
  }
  return (
    <center>
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4 font-weight-bold"> Sign up </p>
          </div>
          <CDBInput label="Your name" type="text" icon="user" iconClass="text-muted" />
          <CDBInput label="Your email" type="email" icon="envelope" iconClass="text-muted" />
          <CDBInput
            label="Confirm your email"
            type="email"
            icon="exclamation-triangle"
            iconClass="text-muted"
          />
          <CDBInput label="Your Password" type="password" icon="lock" iconClass="text-muted" />
          <CDBBtn class="btn btn-success w-100" onClick={() => displayEmail()}>Register</CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
    </center>
  );
};
export default Forms;