import React from "react";
import Calendar from "react-calendar";
import DateFormatter from "../DateFormatter";
import "react-calendar/dist/Calendar.css";
import "../App.css";

function Modal({ state, setState }) {
  const [calender, setCalender] = React.useState(false);
  const [value, onChange] = React.useState(new Date());

  const getDate = (str) => {
    return new Date(str.split(" ").slice(0, 3).join(" ")).toLocaleDateString();
  };

  const getTime = (str) => {
    return str.split(" ")[3];
  };

  let activityPeriod = state.userData.activity_periods.filter(
    (d) => getDate(d.start_time) === value.toLocaleDateString()
  );
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 modal-section">
            <div className="modal-css">
              <span
                onClick={() => setState((prev) => ({ ...prev, open: false }))}
                className="icon-cancel"
              >
                <i class="far fa-times-circle"></i>
              </span>
              <h4>{DateFormatter(value.toLocaleDateString())}</h4>
              <hr />
              {activityPeriod.length > 0 ? (
                <ul>
                  <h5>Available activities of the following User.</h5>
                  {activityPeriod.map((i) => {
                    return (
                      <li>
                        <h5>
                          <i class="fas fa-check"></i>
                          {getTime(i.start_time)} - {getTime(i.end_time)}{" "}
                        </h5>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <h5>
                  No Activity Found. Check for another date.
                  <br />
                  <u>click calendar</u>
                </h5>
              )}
              <span onClick={() => setCalender(!calender)} className="icon-cal">
                <i class="fas fa-calendar-day"></i>
              </span>
              {calender ? (
                <Calendar className="cal" onChange={onChange} value={value} />
              ) : null}
            </div>
            )
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
