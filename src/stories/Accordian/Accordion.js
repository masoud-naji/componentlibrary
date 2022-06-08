import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import './Accordion.css'

export default function Accordion({ data }) {
  return (
    <div className="accordion-section">
      {Array.isArray(data) &&
        data.map((d) => (
          <AccordionItem key={d.title} title={d.title} content={d.content} />
        ))}
    </div>
  );
}
Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

const AccordionItem = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  const contentElm = useRef(null);
  return (
    <div className="accordion-item">
      <div
        className={classNames("accordion-title", { active: isActive })}
        role="button"
        onClick={(e) => setActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div className="icon">
          {isActive ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>
      <div
        ref={contentElm}
        className={classNames("accordion-content", { active: isActive })}
        style={{
            height: isActive ? contentElm.current.scrollHeight : "0px"
        }}
      >
        {content}
      </div>
    </div>
  );
};
