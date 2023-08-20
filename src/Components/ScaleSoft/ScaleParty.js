import React, { useEffect, useState } from "react";
import ScalePartyModal from "./ScalePartyModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import "../Nav/Sidebar.css";

export default function ScaleParty() {
  const [showModal, setShowModal] = useState(false);

  const [column, setColumn] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:44327/api/scaleparty").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setdata(res.data);
    });
  }, []);

  return (
    <>
      
       <div className="bodyPage">
          <button to="/addParty" className="btn btn-info my-3 mx-3 ">
            Add New Party
          </button>
          
          <Button  onClick={() => setShowModal(true)}>Add New Party</Button>
          <ScalePartyModal
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </div>
        <SearchBar list={data} column={column} />
        <p>
        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 67:5:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

 </p>
       
      
    </>
  );
}
