import React from "react";

const Title = ({ children }) => {
  return (
    <React.Fragment>
      <div className={`titleFirst notLoaded`} />
      <div className={`titleSecond notLoaded`} />
    </React.Fragment>
  );
};

export default Title;
