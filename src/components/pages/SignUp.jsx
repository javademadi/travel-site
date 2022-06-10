import React from 'react';
import '../../App.css'
import SignUpForm from "../SignUp/SignUpForm";
const SignUp = () => {
    return (
        <div className={"sign-up"} style={{backgroundImage: `url(images/8.jpg)`}}>

            <SignUpForm />
        </div>
    );
};

export default SignUp;