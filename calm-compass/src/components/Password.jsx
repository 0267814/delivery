import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useMyContext,changePassword } from '../context/Provider';
import { useNavigate } from 'react-router-dom'; 

function Password() {
  const {state,dispatch} = useMyContext();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(""); 

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await changePassword(dispatch, password, confirm,state.email);
      navigate('/signIn'); 
    } catch (err) {
      setError("Passwords do not match");
    }
  };
  
  return (
    <form onSubmit={submit} id='singin'>

      <div className="login-container">
        <div className="login-box">
            <h2 className="login-title">Change Password</h2>
              
              <label className="login-label" htmlFor="password">New Password</label>
              <input
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  type="password"
                  id="email"
                  placeholder="Enter password"
                  required
              />

              <label className="login-label" htmlFor="password">Confirm Passord</label>
              <input
                  value={confirm} 
                  onChange={(e) => setConfirm(e.target.value)}
                  className="login-input"
                  type="password"
                  id="password"
                  placeholder="Confirm password"
                  required
              />

                {error && <div className="error-message">{error}</div>}

                <Button type="submit" className="cancel-button">Change Password</Button>
                <Button type="button" className="cancel-button" onClick={() => navigate('/')}>Back to Homepage</Button>
        </div>
      </div>
    </form>
  );
}

export default Password;