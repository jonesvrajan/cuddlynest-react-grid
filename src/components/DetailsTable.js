import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUpload,
  faChevronDown,
  faChevronUp,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

class DetailsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalGuests: 1,
      isOpen: false,
      activeAcc: null,
      tableTitles: [
        "Rooms",
        "Guests",
        "Amenities and services",
        "Policies",
        "Average price per room",
      ],
      tableData: [
        {
          rooms: "Double Bed Room",
          guests: 1,
          amenities: ["Non-smoking", "No Window", "Satellite Channels", "TV"],
          policies: [
            "Instant Confirmation",
            "Refund on cancellation before 19 Jun 2020 (11:00 AM) - $55.74",
          ],
          price: 44,
        },
        {
          rooms: "Deluxe Bed Room",
          guests: 1,
          amenities: ["Non-smoking", "No Window", "Satellite Channels", "TV"],
          policies: [
            "Instant Confirmation",
            "Refund on cancellation before 19 Jun 2020 (11:00 AM) - $55.74",
          ],
          price: 54,
        },
        {
          rooms: "Superior Bed Room",
          guests: 1,
          amenities: ["Non-smoking", "No Window", "Satellite Channels", "TV"],
          policies: [
            "Instant Confirmation",
            "Refund on cancellation before 19 Jun 2020 (11:00 AM) - $55.74",
          ],
          price: 64,
        },
      ],
    };
  }

  toggleSidenav(i) {
    i === this.state.activeAcc
      ? this.setState({ activeAcc: null })
      : this.setState({ activeAcc: i });
  }

  increment() {
    this.setState({
      totalGuests: this.state.totalGuests + 1
    });
  };
  
  decrement() {
    if (this.state.totalGuests<= 1) {
      return null
    }
    this.setState({
      totalGuests: this.state.totalGuests - 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="selectors">
          <div className="date-selector">
            <input type="text" value="21 June 2020"/>
            <FontAwesomeIcon icon={faArrowRight} />
            <input type="text" value="22 June 2020"/>
          </div>
          <div className="g-selector">
            <button className="decrement" onClick={(e) => this.decrement(e)}>-</button>
            {this.state.totalGuests} {this.state.totalGuests === 1 ? "guest" : "guests"}
            <button className="increment" onClick={(e) => this.increment(e)}>+</button>
          </div>
        </div>
        <div className="grid-table" id="details">
          <div className="grid-table-row">
            {this.state.tableTitles.map((i) => {
              return <div key={i} className="grid-table-cell">{i}</div>;
            })}
          </div>

          {this.state.tableData.map((i, e) => {
            return (
              <React.Fragment key={i.price}>
                <div
                  className={
                    e === this.state.activeAcc
                      ? "grid-table-row header hidden"
                      : "grid-table-row header show"
                  }
                >
                  <div className="grid-table-cell">
                    <p>{i.rooms}</p>
                  </div>
                  <div className="grid-table-cell">
                    <p>{this.state.totalGuests}</p>
                  </div>
                  <div className="grid-table-cell">
                    <p></p>
                  </div>
                  <div className="grid-table-cell">
                    <p></p>
                  </div>
                  <div className="grid-table-cell">

                      <p>${i.price * this.state.totalGuests}/night</p>
                      <a
                        onClick={this.toggleSidenav.bind(this, e)}
                        href="javascript:void(0)"
                        className="btn-menu show-on-small"
                      >
                        {e === this.state.activeAcc ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </a>
                  </div>
                </div>
                <div
                  className={
                    e === this.state.activeAcc
                      ? "grid-table-row content show"
                      : "grid-table-row content hidden"
                  }
                >
                  <div
                    className="grid-table-cell"
                    data-title={this.state.tableTitles[0]}
                  >
                    <p>
                      {i.rooms}

                      <a
                        onClick={this.toggleSidenav.bind(this, e)}
                        href="javascript:void(0)"
                        className="btn-menu show-on-small"
                      >
                        {e === this.state.activeAcc ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </a>
                    </p>
                  </div>
                  <div
                    className="grid-table-cell"
                    data-title={this.state.tableTitles[1]}
                  >
                    <p>{this.state.totalGuests}</p>
                  </div>
                  <div
                    className="grid-table-cell"
                    data-title={this.state.tableTitles[2]}
                  >
                    {i.amenities.map((i) => {
                      return <p key={i}>{i}</p>;
                    })}
                  </div>
                  <div
                    className="grid-table-cell"
                    data-title={this.state.tableTitles[3]}
                  >
                    {i.policies.map((i) => {
                      return <p key={i}>{i}</p>;
                    })}
                  </div>
                  <div
                    className="grid-table-cell"
                    data-title={this.state.tableTitles[4]}
                  >
                    <p>${i.price * this.state.totalGuests}/night</p>
                    <p>${(i.price * this.state.totalGuests) + 10} total</p>
                    <button className="btn btn-book">Book now</button>
                    <a
                      onClick={this.toggleSidenav.bind(this, e)}
                      href="javascript:void(0)"
                      className="btn-menu"
                    >
                      {e === this.state.activeAcc ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </a>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default DetailsTable;
