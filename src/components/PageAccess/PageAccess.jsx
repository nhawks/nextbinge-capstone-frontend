import React from "react";
import UserAccess from "../UserAccess/UserAccess";

const PageAccess = (props) => {
  return (
    <div className="mt-4" align="center">
      <UserAccess {...props} />
    </div>
  );
};

export default PageAccess;
