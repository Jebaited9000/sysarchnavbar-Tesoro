import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';

const Forms = () => {
  return (
    <center>
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Sign in </p>
          </div>
          <CDBInput material hint="E-mail" type="email" />
          <CDBInput material hint="Password" type="password" />
          <CDBBtn color="dark" className="btn-block my-3 mx-0">
           <a href="/welcome"> Sign in </a>        
          </CDBBtn>
          <p className="text-center">
            Not a member?{' '}
            <CDBLink className="d-inline p-0" to="#">
            <a href="/registration"> Register </a>
            </CDBLink>
          </p>
          <p className="text-center"> or sign in with</p>
          <div className="flex-row my-3 d-flex justify-content-center">
            <CDBBtn color="white" style={{ boxShadow: 'none' }}>
              <a href="https://www.facebook.com/"><CDBIcon fab icon="facebook-f" /></a>
            </CDBBtn>
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
              <a href="https://twitter.com/"><CDBIcon fab icon="twitter" /></a>
            </CDBBtn>
            <CDBBtn color="white" style={{ boxShadow: 'none' }}>
              <a href="https://gmail.com/"><CDBIcon fab icon="google-plus-g" /></a>
            </CDBBtn>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
    </center>
  );
};
export default Forms;