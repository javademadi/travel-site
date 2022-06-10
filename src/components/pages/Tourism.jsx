import React, {Fragment} from 'react';
import '../../App.css'
import Button from "../UI/Button";
import CardsGuid from "../Tourism/CardsGuid";
import Cards from "../Cards/Cards";
const Tourism = () => {
    return (
        <Fragment>
        <div className={"tourism"} style={{backgroundImage:`url(images/tourism.jpg)`}}>
            <h1 style={{color:'#fff' , fontSize:'46px'}}>پرتال جامع گردش و سفر</h1>
            <p>پرتال جامع گردش و سفر</p>
            <div className={"tourism-box"}>
                <input type={"text"} className={"search-input"} placeholder={"جستجوی کشور ، شهر و ..."} autoComplete={false}/>
                <Button buttonStyle={"btn--search--place"} btnSize={"btn--large"}>جستجو</Button>
            </div>
        </div>
            <CardsGuid />
            <Cards />
        </Fragment>
    );
};

export default Tourism;