import React from "react";
import "./CardsGuid.scss";
import CardItem from "./CardItem";
const CardsGuid = () => {
	return (
		<div className={"cards"}>
			<h1>
				بهترین راهنمای ایرانگردی ، جهانگردی ، خرید بلیط هواپیما ، هلی کوپتر ، هلی
				شات و ...
			</h1>
			<p>پرتال جامع گردش و سفر</p>
			<div className={"cards__container"}>
				<div className={"cards__wrapper"}>
					<ul className={"card__item"}>
						<CardItem
							src={"https://cdn.hamgardi.com/Static/Img/internal/compare.png"}
							title={"دانستنی ها"}
							text={"معرفی جذابیت های ایران و جهان"}
						/>
						<CardItem
							src={"https://cdn.hamgardi.com/Static/Img/internal/compare.png"}
							title={"جستجوی پیشرفته"}
							text={"جستجوی تمامی مقاصد سفرهای شما"}
						/>
						<CardItem
							src={"https://cdn.hamgardi.com/Static/Img/internal/compare.png"}
							title={"راهنمای جامع گردش و تفریح"}
							text={"راهنمای سفر به شهرهای ایران و جهان"}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CardsGuid;
