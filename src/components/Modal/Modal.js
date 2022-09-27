import { faBowlFood, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Modal = ({ modalData, setModalData }) => {
    const { strMeal, strInstructions } = modalData;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-left">
          <label
            onClick={() => {
              setModalData(null);
            }}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold font-mono"> <FontAwesomeIcon icon={faBowlFood}/> {strMeal}</h3>
          <div className="py-4">
            <p><FontAwesomeIcon icon={faInfoCircle} title="food info"/> {strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
