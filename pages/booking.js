import PropTypes from "prop-types";
import cx from "classnames";
import useScript from "react-script-hook";
import { useEffect, useState } from "react";

export default function Booking() {
  useScript({
    src: "https://assets.calendly.com/assets/external/widget.js",
    checkForExisting: true,
  });

  // const account = "evanskwofie";
  // const eventName = "20mins";

  const calendlyUrl = `https://calendly.com/evanskwofie5/kaafuns-beauty-salon?month=2022-06`;

  const [state, setState] = useState("start");

  const heightFromState = {
    start: "100%",
    userInfo: "100%",
    end: "100%",
  };

  useEffect(function () {
    function handleMessage(e) {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        if (e.data.event === "calendly.date_and_time_selected") {
          setState("userInfo");
        } else if (e.data.event === "calendly.event_type_viewed") {
          setState("start");
        } else if (e.data.event === "calendly.event_scheduled") {
          setState("end");
        }
      }
    }
    window.addEventListener("message", handleMessage);

    return function () {
      window.removeEventListener("message", handleMessage);
    };
  });

  return (
    <div
      className={cx("calendly-inline-widget", heightFromState[state])}
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height: "580px" }}
    />
  );
}

Booking.propTypes = {
  account: PropTypes.string,
  eventName: PropTypes.string,
};
