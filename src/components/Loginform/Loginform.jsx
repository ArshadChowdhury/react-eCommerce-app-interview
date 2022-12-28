import React from 'react';
import {Link} from "react-router-dom";
import './loginform.css';

const Loginform = () => {
	return (
		<>
			<section className="loginform">
				<div className="container-login">
					<div className="wrapper">
						<div className="heading">
							<h1>Sign In</h1>
							<p>New User ? <span><Link to="/registration">Create an account</Link></span></p>
						</div>
						<form className='form' action="">
							<label className='label'>
								Phone No
								<input type="text" name="name" />
							</label>
							<label className='label'>
								Password
								<input type="text" name="password" />
							</label>
							<p className='forgot-pass'>Forgot Password ? <span><Link to="/forgot-password">Cick here to reset</Link></span></p>
							<button className='submit-btn'>Sign In</button>
						</form>

					</div>
				</div>
			</section>
		</>
	)
}

export default Loginform