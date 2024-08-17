
import React, { useState } from 'react';
import { auth } from '../firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User Signed Up:', userCredential.user);
      })
      .catch(error => console.error(error.message));
  };

  return (
    <form onSubmit={signUp}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
