"use client";

const DiscountFilter = ({ onToogle }) => {
  return (
    <div onClick={onToogle}>
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default DiscountFilter;
