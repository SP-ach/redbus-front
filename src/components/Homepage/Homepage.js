import React from "react";
import "./homepage.css";
// import Menu from "@material-ui/core/Menu";
// import li from "@material-ui/core/li";
import { Link } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { MdAccountCircle } from "react-icons/md";
// import { GoogleLogin } from "react-google-login";

export default function Homepage({ history }) {
  const enterSite = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div className="container maint-cnt">
      <div className="header-nav">
        <div className="Navbar">
          <div className="leftSide_header">
            <img
              src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
              alt="logo"
              onClick={() => {
                history.push("/");
              }}
            />
            <ul className="Navbar__listOne">
              <li>
                <Link to="/">BUS TICKETS</Link>
              </li>
              <li>
                <Link>rYde</Link>
              </li>
              <li>
                redRail<sup>New</sup>
              </li>
            </ul>
          </div>
        </div>
        
        {/* <span className="mytext1"> Unique Travels </span> */}
      </div>

      <div className=""></div>

      <div className="container">
        <div className="slogan">
          <h1>
            <span>Bus Ticket Booking</span>
            <div className="message">
             
            </div>
          </h1>
        </div>

        <a href="/#" onClick={(e) => enterSite(e)} className="mainBtn">
          <svg width="277" height="62">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stopColor="#FF8282" />
                <stop offset="100%" stopColor="#E178ED" />
              </linearGradient>
            </defs>
            <rect
              x="5"
              y="5"
              rx="25"
              fill="none"
              stroke="url(#grad1)"
              width="266"
              height="50"
            ></rect>
          </svg>
          <span className="getstart">BOOK TICKETS !</span>
        </a>
      </div>
    </div>
  );
}
