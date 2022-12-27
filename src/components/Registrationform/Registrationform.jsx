import React from 'react';
import {Link} from "react-router-dom";

const Registrationform = () => {
	return (
		<>
			<section className="loginform">
				<div className="container-login">
					<div className="wrapper">
						<div className="heading">
							<h1>Sign Up</h1>
							<p>Already a user ? <span><Link to="/login">Login here</Link></span></p>
						</div>
						<form className='form' action="">
                        <label className='label name'>
								Name
								<input type="text" name="name" />
							</label>
							<label className='label'>
								Phone No
								<input type="text" name="name" />
							</label>
							<label className='label'>
								Password
								<input type="text" name="password" />
							</label>
							<p className='forgot-pass'>By signing up you agree to our <span><Link to="/termsNconditions">terms & conditions</Link></span></p>
							<button className='submit-btn'>Sign Up</button>
						</form>

					</div>
				</div>
			</section>
		</>
	)
}

export default Registrationform;