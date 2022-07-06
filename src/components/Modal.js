import React from "react";

import $ from "jquery";
import "../styles/button.css";
import "../styles/modal.css";
import "../styles/dimmer.css";
import "../styles/dimmer.css";
import "../styles/icon.css";
import "../scripts/modal.js";
import "../scripts/dimmer.js";

const Modal = () => {
  const [open, setOpen] = React.useState(false);

  console.log("Open State: " + open);

  let onClose = () => setOpen(false);
  let onOpen = () => setOpen(true);
  // let open = () => setOpen(true);

  $(".ui.modal").modal();

  const button = (
    <button className="ui button" onClick={() => onOpen}>
      show modal
    </button>
  );

  const modal = (
    <div id="modal" className="ui active modal">
      <i className="close icon"></i>
      <div className="header">Modal Title</div>
      <div className="image content">
        <div className="image">An image can appear on left or an icon</div>
        <div className="description">A description can appear on the right</div>
      </div>
      <div className="actions">
        <div className="ui button" onClick={() => onClose}>
          Cancel
        </div>
        <div className="ui button">OK</div>
      </div>
    </div>
  );

  let currentState;

  if (open) {
    currentState = modal;
    // $(".ui.modal").modal("show");
  } else {
    currentState = button;
    // $(".ui.modal").modal("hide");
  }

  return <>{currentState}</>;
};

export default Modal;
