import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

const FoodCard = ({ food }) => {
  const [modalData, setModalData] = useState({});
  const { strMeal, strInstructions, strMealThumb } = food;
  return (
    <div className="w-[350px] h-[550px] border-2 mx-auto my-5 rounded-xl">
      <img
        className="w-[95%] h-[50%] mx-auto mt-2 rounded-xl"
        src={strMealThumb}
        alt=""
      />
      <div className="text-left ml-3 mt-[30px]">
        <h1 className="text-2xl font-sans font-semibold">{strMeal}</h1>
        <p>{strInstructions.slice(0, 200)}...</p>
        <label
          htmlFor="my-modal-3"
          onClick={() => setModalData(food)}
          className="btn modal-button bg-pink-400 
           rounded font-medium text-white border-0 mt-3"
        >
          See Details
          <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
        </label>
      </div>
      {modalData && <Modal modalData={modalData} setModalData={setModalData} />}
    </div>
  );
};

export default FoodCard;
