import React, { useEffect, useState } from "react";
import "./index.css";

const ModalS = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.open) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, props.closeDelay || 3000);

      return () => clearTimeout(timer);
    }
  }, [props.open, props.closeDelay]);

  return (
    <>
      {isVisible && (
        <div className="overlay">
          <div className="modal-container-success">
            <img src={props.img} alt="success" />
            <div className="text-title-desc-modal">
              <div className="kanit-paragraphBig">{props.label}</div>
              <p className="kanit-paragraphSmall">{props.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalS;
