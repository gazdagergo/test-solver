import React from "react";
import classnames from "classnames";

const Gap = ({ awaits, id, onClick, selected }) => (
  <span
    className={classnames("gap", { gap__selected: selected })}
    onClick={onClick}
  />
);

export default Gap;
