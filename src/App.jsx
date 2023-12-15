import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [jwt, setJwt] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`JWT Valuie is: \n${jwt}`);
  }, [jwt]);

  return (
    <div className="App">
      <label data-testid="bananas">Username:</label>
      <input 
        type="text" 
        name="usernameInput" 
        id="usernameInput" 
        value={username} 
        onChange={(event) => setUsername(event.target.value)} 
      />

      <label>Password:</label>
      <input 
        type="password" 
        name="passwordInput" 
        id="passwordInput" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
      />
      


    </div>
  );
}

export default App;
