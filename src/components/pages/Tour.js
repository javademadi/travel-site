import React, {Fragment} from 'react';
import '../../App.css'
import Button from "../UI/Button";
import Card from "../Tour/Card";

const Tour = () => {
    return (
        <Fragment>

            <div className={"tourism"} style={{backgroundImage: `url(images/2.jpg)`}}>

                <div className={"tourism-box"}>
                    <input type={"text"} className={"search-input"} placeholder={"نام شهر یا کشور"}
                           autoComplete={"false"}/>
                    <Button buttonStyle={"btn--search--place"} btnSize={"btn--large"}>جستجو</Button>
                </div>
            </div>
            <Card />
        </Fragment>
    );
};

export default Tour;