import React, { useRef } from 'react';
import './SignUpScreen.css';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../datastore.js';

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword( auth, emailRef.current.value, passwordRef.current.value)
        .then((userDetails) => {
            console.log(userDetails);
        }).catch((error) => {
            alert(error.message);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userDetails) => {
            console.log(userDetails);
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email'></input>
                <input ref={passwordRef} placeholder='Password' type='password'/>
                <button type='submit' onClick={signIn}> Sign In </button>

                <h4>
                    <span className='signUpScreen_gray'> New to Netflix? </span> 
                    <span className='signUpScreen_link' onClick={register}> Sign Up now. </span>
                </h4>
            </form>

        </div>
    )
}

export default SignUpScreen;