import React, {Fragment} from 'react';
import './Card.scss'
import {Link} from "react-router-dom";
import Button from "../UI/Button";

const Card = () => {
    const INFO = [
        {
            text: "تمامی تورها"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        },
        {
            text: "تور یک روزه"
        }
    ]
    return (
        <Fragment>
            <div className={"container"}>
                <div className={"tour__tabs"}>
                    <div className={"tour__wrapper"}>
                        <ul className={"nav-tabs"}>
                            {
                                INFO.map((item, index) =>
                                    <li key={index}>
                                        <Link to={"/"} className={"anchor"}>
                                            <h5>{item.text} </h5>
                                        </Link>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </div>
            <div className={"tour__tabs"}>
                <div className={"tab-content"}>
                    <div className={"tab-pane"}>
                        <header className={"tab-header"}>
                            <div className={"tab-text"}>
                                تور
                            </div>
                            <div className={"tab-sort-filter tab-text"}>
                                مرتب شده بر اساس
                                <span className={"selectTours"}>
                                    <select className={"tab-sort-input"}>
                                        <option value={"newest"}>جدیدترین</option>
                                        <option value={"cheapest"}>ارزانترین</option>
                                        <option value={"viewcount"}>پربازدیدترین</option>
                                    </select>
                                </span>
                            </div>
                        </header>
                        <div className={"tabs-content"}>
                            <ul>
                                <li>
                                    <Link to={"/"} className={"anchor"}>
                                        <span>تور کیش 2 روز و 3 شب</span>
                                        <p>از 1.600.000</p>
                                        <p>از 2 آذر 99 الی 4 آذر 99</p>
                                        <p>شرکت خدمات سفر تعطیلات</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"} className={"anchor"}>
                                        <span>تور کیش 2 روز و 3 شب</span>
                                        <p>از 1.600.000</p>
                                        <p>از 2 آذر 99 الی 4 آذر 99</p>
                                        <p>شرکت خدمات سفر تعطیلات</p>
                                    </Link>
                                </li> <li>
                                    <Link to={"/"} className={"anchor"}>
                                        <span>تور کیش 2 روز و 3 شب</span>
                                        <p>از 1.600.000</p>
                                        <p>از 2 آذر 99 الی 4 آذر 99</p>
                                        <p>شرکت خدمات سفر تعطیلات</p>
                                    </Link>
                                </li>
                            </ul>
                            <div className={"more-tour-button"}>
                                <Button buttonStyle={"btn--tour"} buttonSize={"btn--large"}>تورهای بیشتر </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;