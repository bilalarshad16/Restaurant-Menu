import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                key={curElem.id}
                onClick={() => {
                  filterItem(curElem);
                }}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default navbar;
