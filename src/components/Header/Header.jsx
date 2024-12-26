import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import "../../styles/header.css";
import carData from "../../assets/data/carData"

const navLinks = [
  {
    path: "/home",
    display: "Ana Səyfə",
  },
  {
    path: "/about",
    display: "Haqqında",
  },
  {
    path: "/cars",
    display: "Avtomobillər",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Əlaqə",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const [searchValue, setSearchValue] = useState("");
  const searchedCars = carData.filter((car) =>
    car.carName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleLogin = () => {
    navigate("/login"); 
  };

  const handleRegister = () => {
    navigate("/register"); 
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Kömək Lazımdır?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +994554964772
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" onClick={handleLogin} className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Daxil Ol
                </Link>

                <Link to="#" onClick={handleRegister} className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Qeydiyyat
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent a Car <br /> in Baku
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Azərbaycan</h4>
                  <h6>Bakı Şəhər, Azərbaycan</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Bazar-Cümə</h4>
                  <h6>10:00 - 19:00</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Zəng Vurun
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
            <div className="search__box-items">
                <div className="search__box">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
                <div className="search__box-result">
                  {searchValue !== "" ? (
                    searchedCars.length ? (
                      searchedCars.map((searchedCar, i) => (
                        <Link
                          key={i}
                          onClick={() => setSearchValue("")}
                          to={`/cars/${searchedCar.id}`}
                          className="search__box-result-row"
                        >
                          {searchedCar.carName}
                        </Link>
                      ))
                    ) : (
                      <div className="search__box-result-row">
                        <span>No result</span>
                      </div>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
