
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import '../App.css';
function Logging() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">
          
          <h1 className="fw-bold mb-5">se connecter</h1>
          </div>
         
          <MDBInput wrapperClass='w-50 p-3  mb-4'  placeholder='Email address'    id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='w-50 p-3  mb-4' placeholder='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 ms-7 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>


    </MDBContainer>
  );
}

export default Logging;