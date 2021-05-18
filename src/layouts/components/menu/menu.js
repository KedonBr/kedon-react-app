import React, { useState } from "react";
import {
  ArrowRight,
  Logo,
  NewFile,
  Config,
  CreditCard,
  Logout,
} from "../../../shared/images";
import navigationConfig from "../../../configs/navigationConfig";
import { Link } from 'react-router-dom'
import './menu.scss'
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <React.Fragment>
      {
        window.innerWidth < 768 ?
          <div className="header-mobile d-flex justify-content-between align-items-center">
            <Logo width={120} />

            <label className="menu">
              <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />
              <div className="menu__hamburguer">
                <span></span>
              </div>
            </label>
          </div>
          :
          null
      }
      <div className={`sidebar-content ${isOpen ? 'sidebarIsOpen' : 'sidebarIsClose'}`}>
        <div className="d-flex justify-content-center">
          <Logo width={200} />
        </div>
        <div className="profile d-flex justify-content-between align-items-center px-4 py-2">
          <div class="d-flex align-items-center">
            <img
              className="profile__image"
              src="https://ogimg.infoglobo.com.br/in/24954685-f93-a27/FT1086A/xviuva.jpg.pagespeed.ic.CtHmw2NcIH.jpg"
            />
            <legend className="profile__name fs-20 fw-100 color-default px-2 ">
              Olá, Amanda Amanda Amanda!
            </legend>
          </div>
          <ArrowRight height={14} />
          <div class="profile__dropdown">
            <ul>
              <li className="profile__dropdown--item d-flex align-items-center py-2 px-4">
                <div className="profile__dropdown--icon">
                  <NewFile
                    width={21}
                    style={{ marginLeft: 2, marginRight: 2 }}
                  />
                </div>
                <p className="profile__dropdown--title fs-20 fw-300 color-default px-2">
                  Novo membro
                </p>
              </li>
              <li className="profile__dropdown--item d-flex align-items-center py-2 px-4">
                <div className="profile__dropdown--icon">
                  <Config width={25} />
                </div>
                <p className="profile__dropdown--title fs-20 fw-300 color-default px-2">
                  Configurações
                </p>
              </li>
              <li className="profile__dropdown--item d-flex align-items-center py-2 px-4">
                <div className="profile__dropdown--icon">
                  <CreditCard width={25} />
                </div>
                <p className="profile__dropdown--title fs-20 fw-300 color-default px-2">
                  Pagamentos
                </p>
              </li>
              <li className="profile__dropdown--item d-flex align-items-center py-2 px-4">
                <div className="profile__dropdown--icon">
                  <Logout width={25} />
                </div>
                <p className="profile__dropdown--title fs-20 fw-300 color-default px-2">
                  Sair
                </p>
              </li>
              <li className="profile__dropdown--item d-flex align-items-center justify-content-center py-2 px-4">
                <p className="profile__dropdown--title fs-20 fw-300 color-default text-center px-2">
                  Ajuda
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="menu mt-5">
            {navigationConfig.map((item) => (
              <li className="menu__item d-flex align-items-center justify-content-between py-2 px-4">
                  <Link to={item.navLink}>

                <div className="d-flex align-items-center">
                  <div className="menu__item--icon">{item.icon}</div>
                  <p className="menu__item--title fs-20 fw-300 color-default mx-2">
                    {item.title}
                  </p>
                </div>
                </Link>
                {item.type === "collapse" ? <ArrowRight height={14} /> : null}
                {item.children ? (
                  <ul className="menu__dropdown">
                    {item.children.map((children) => (
                      <li className="menu__dropdown--item py-2">
                        <Link to={children.navLink}>
                          <p className="menu__dropdown--title fs-20 fw-300 color-default mx-2">
                            {children.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
