import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUpload,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function PropertyHeader() {
  return (
    <React.Fragment>
      <div className="dt-header">
        <h2>
          M Motel &amp; Suites <br />
          <span>
            Hotel
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </h2>
        <button className="btn btn-primary action-btn">
          <FontAwesomeIcon icon={faBookmark} /> Save to wishlist Test
        </button>
        <button className="btn btn-primary action-btn">
          {" "}
          <FontAwesomeIcon icon={faUpload} /> Share this hotel
        </button>
      </div>
      <nav id="fixedHeader">
        <ul className="container property-nav">
          <li>
            <a className="active" href="#details">Select rooms</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#description">Description</a>
          </li>
          <li>
            <a href="#policies">Accomodation policies</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default PropertyHeader;
