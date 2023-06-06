import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';

const Forms = () => {
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
          <CDBInput label="Your location" type="address" icon="gps" iconClass="text-muted" />
          <center>
          <a href="/Registered">
          <CDBBtn style={{margin: '10px'}} class="btn btn-success w-100"> Register</CDBBtn>
          </a>
          </center>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
    </center>
  );
};
export default Forms;