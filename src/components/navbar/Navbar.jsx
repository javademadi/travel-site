import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";
const Navbar = () => {
	const [buttonState, setButtonState] = useState(true);
	const [menuState, setMenuState] = useState(false);
	const [showSub, setShowSub] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const modalHandler = () => {
		setModalShow(!modalShow);
	};
	const modalClose = () => {
		setModalShow(false);
	};
	const subHandler = () => {
		setShowSub(!showSub);
	};
	const menuHandler = () => {
		setMenuState(!menuState);
	};
	useEffect(() => {
		handleButton();
	}, []);
	const closeMobileMenu = () => {
		setMenuState(false);
	};
	const handleButton = () => {
		if (window.innerWidth <= 960) {
			setButtonState(false);
		} else {
			setButtonState(true);
		}
	};
	window.addEventListener("resize", handleButton);
	return (
		<nav className={"navbar"}>
			<div className={"navbar-container"}>
				<Link to="/" className="navbar-logo">
					Travel
					<i className="fab fa-typo3" />
				</Link>

				<div className={"menu-icon"} onClick={menuHandler}>
					<i className={menuState ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={menuState ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							{" "}
							صفحه اصلی{" "}
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/tourism" className="nav-links" onClick={closeMobileMenu}>
							{" "}
							گردشگری{" "}
						</Link>
						{/* <ul>
							<li>گردشگری 1</li>
							<li>گردشگری 2</li>
							<li>گردشگری 3</li>
							<li> گردشگری 4</li>
						</ul> */}
					</li>
					<li className="nav-item">
						<Link to="/tour" className={"nav-links"} onClick={closeMobileMenu}>
							{/* <i className="fas fa-ellipsis-v" style={{marginLeft: "6px", fontSize: "16px"}}
                               onClick={subHandler}></i> */}
							تور
						</Link>
						{/* <ul className={"submenu"}>
							<li>
								<a href={"#"}>
									تور شیراز <i className="fas fa-archway" />
								</a>
							</li>
							<li>
								<a href={"#"}>
									تور اصفهان <i className="fas fa-landmark" />
								</a>
							</li>
							<li>
								<a href={"#"}>
									تور مشهد
									<i className="fas fa-menorah" />
								</a>
							</li>
							<li>
								<a href={"#"}>
									تور تهران
									<i className="fas fa-brain" />
								</a>
							</li>
						</ul> */}
					</li>
					<li className="nav-item">
						<Link
							to="/sign-up"
							className="nav-links-mobile"
							onClick={closeMobileMenu}>
							{" "}
							ثبت نام{" "}
						</Link>
					</li>
				</ul>
				{buttonState ? (
					<Button buttonStyle={"btn--outline"} to={"/sign-up"}>
						ثبت نام
					</Button>
				) : null}
				{/* <i
					className="fas fa-allergies"
					style={{ color: "white", marginRight: "15px" }}
					onClick={modalHandler}
				/> */}
			</div>
			{/* <Modal modalHandler={modalShow} modalClose={modalClose} /> */}
		</nav>
	);
};

export default Navbar;
