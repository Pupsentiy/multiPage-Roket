import { FC } from "react";

import Button from "../button/Button";

import logo from "../../assets/img/header/logo.svg";
import OpMenuTablet from "../../assets/img/header/menu-default-tablet.svg";
import OpMenuMob from "../../assets/img/header/menu-default-mobile.svg";
import { headerLink } from "../../core/constants/constants";
import { THeaderLink } from "../../core/constants/constants.types";

import "./header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container-main">
        <div className="header-content">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="header-nav-desktop">
            {headerLink &&
              headerLink.map((link: THeaderLink, i: number) => (
                <a href={link.link} key={i} className="header-nav__link">
                  {link.title}
                </a>
              ))}
            <Button type="button" classProps="header-nav__button">
              оставить заявку
            </Button>
          </nav>

          <Button classProps="header__active-burgerMenu-tab" type="button">
            <img src={OpMenuTablet} alt="open burger menu" />
          </Button>
          <Button classProps="header__active-burgerMenu-mobile" type="button">
            <img src={OpMenuMob} alt="open burger menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;