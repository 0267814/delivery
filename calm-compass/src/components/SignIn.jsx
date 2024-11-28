import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useMyContext,signIn } from '../context/Provider';
import { useNavigate } from 'react-router-dom'; 

function SignIn() {
  const {dispatch} = useMyContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    signIn(dispatch, email, password);
    navigate('/');
  };
  
  return (
    <form onSubmit={submit} id='singin'>

      <div className="login-container">
        <div className="login-box">
            <h2 className="login-title">Sign-In</h2>
              
              <label className="login-label" htmlFor="username">Email</label>
              <input
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  type="text"
                  id="email"
                  placeholder="Enter email"
                  required
              />

              <label className="login-label" htmlFor="password">Password</label>
              <input
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  required
              />

              <div className="login-buttons">
                <Button type="button" className="cancel-button" onClick={() => navigate('/')}>Cancel</Button>
                <Button type="submit" className="login-button">Sign-In</Button>
              </div>
              <Button type="button" className="cancel-button" onClick={() => navigate('/signUp')}>Create an Account</Button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;