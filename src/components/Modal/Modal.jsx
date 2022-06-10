import React, {Fragment} from 'react';
import './Modal.scss'
import Button from "../UI/Button";

const Modal = (props) => {
    return (
        <Fragment>
            <div className={"modal " + (props.modalHandler ? "active" : "")}>
                <div className={"modal-form"}>
                    <i className="fas fa-times"
                       style={{fontSize:"30px",color:"blue" ,position:"absolute", right:"11px" , top:"5px"}}
                    onClick={props.modalClose}
                    >

                    </i>
                    <h2 style={{fontWeight: "bold", color: "blue"}}>فرم ثبت نام</h2>
                    <input className={"text-input"} type={"text"} placeholder={"نام و نام خانوادگی"} required/>
                    <input className={"text-input"} type={"tel"} placeholder={"شماره همراه"} required/>
                    <input className={"text-input"} type={"email"} placeholder={"ایمیل"} required/>
                    <input className={"text-input"} type={"password"} placeholder={"رمز عبور"} required/>
                    <Button buttonStyle={"btn--tour"} btnSize={"btn--large"}>ثبت نام</Button>
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;