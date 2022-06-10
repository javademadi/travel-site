import React from 'react';
import './Cards.scss'
import CardItems from "./CardItems";
const Cards = () => {
    return (
        <div className={"cards"}>
            <h1>مقاصد برتر</h1>
        <div className={"cards__container"}>
            <div className={"cards__wrapper"}>
                <ul className={"cards__items"}>
                    <CardItems path={'/'} label={"ناشناخته ها"} src={"images/9.jpg"} text={"دیدن آبشار ناشناخته در دل جنگلهای آمازون"}/>
                    <CardItems path={'/dervices'} label={"ناشناخته ها"} src={"images/8.jpg"} text={"کویری زیبا در قلب ایران"}/>
                </ul>
                <ul className={"cards__items"}>
                    <CardItems path={'/'} label={"لاکچری"} src={"images/2.jpg"} text={"سفری خاطره انگیز در جزایر کارائیب"}/>
                    <CardItems path={'/dervices'} label={"لاکچری"} src={"images/1.jpg"} text={"آرامش عمیق در رشته کوه های ایران"}/>
                    <CardItems path={'/dervices'} label={"ناشناخته ها"} src={"images/6.jpg"} text={"تجربه ای متفاوت از گردش در یک شهر"}/>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Cards;