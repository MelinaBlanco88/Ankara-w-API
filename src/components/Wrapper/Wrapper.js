import React from "react";
import { STATUS } from "../../config/constants";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./Wrapper.css";

const Wrapper = ({ children, status }) => {
  if (status === STATUS.ERROR) {
    return (
      <div className="wrapperFlex">
        <Error />
      </div>
    );
  }
  if (status === STATUS.LOADING) {
    return (
      <div className="wrapperFlex">
        <Loader />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Wrapper;
