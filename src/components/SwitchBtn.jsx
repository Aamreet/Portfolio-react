import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { switchBoardActions } from "../store/store1";


import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function SwitchBtn() {
  const dispatch = useDispatch();
  const checked = useSelector((store) => {
    return store.switchBoard;
  });

  const handleChange = () => {
    dispatch(switchBoardActions.toggle());
  };

  return (
    <>
      <div className="switch-container">
        <Form>
          <Form.Check
            type="switch"
            id={`custom-switch`}
            // className=""
            label={checked ? <MdOutlineDarkMode size={30} /> : <MdDarkMode size={30}/>}
            checked={checked}
            onChange={handleChange}
          />
        </Form>
      </div>
    </>
  );
}

export default SwitchBtn;
