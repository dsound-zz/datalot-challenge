import React from "react";

const Modal = props => {
  return (
    <div id="myModal" className="modal">
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <div className="modal-header"></div>
        <div className="modal-body">
          <h3
            style={{
              textAlign: "center"
            }}
          >
            {props.modalMessage}
          </h3>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
