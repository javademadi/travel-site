import React from 'react';
import './SingUpForm.scss';
import Button from "../UI/Button";
const SignUpForm = () => {
    return (
        <div className={"signup-container"}>
            <div className={"signup-form"}>
                <input className={"text-input"} type={"text"} placeholder={"نام و نام خانوادگی"} required/>
                <input className={"text-input"} type={"tel"} placeholder={"شماره همراه"} required/>
                <input className={"text-input"} type={"email"} placeholder={"ایمیل"} required/>
                <input className={"text-input"} type={"password"} placeholder={"رمز عبور"} required/>
                <Button buttonStyle={"btn--tour"} btnSize={"btn--large"}>ثبت نام</Button>
            </div>
        </div>
    );
};

export default SignUpForm;