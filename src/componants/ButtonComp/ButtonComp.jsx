import React from "react";
import "./Button.css";
import Image from "../ImageComp/Image";
const Button = ({ thirdVarient, text, darkVarient, RightIcon, onClick ,type }) => {
  return (
    <div className="button-main-wrapper">
      <button
        type={type || "click"}
        onClick={onClick}
        className={
          darkVarient
            ? "btn btn-primary dark"
            : thirdVarient
            ? "btn btn-primary third-varient"
            : "btn btn-primary"
        }
      >
        <div className="d-flex" style={{ marginTop: "-2px" }}>
          {text}{" "}
          {RightIcon && (
            <div style={{ marginLeft: "5px" }}>
              <Image image={RightIcon} width={15} objectFit={"contain"} />
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default Button;
