import React from "react";

const InputField = ({ placeHolder, icon: Icon, iconStart: Iconn }) => {
  return (
    <div className="search-field">
      <div class="input-group mb-3">
        {Iconn && <div class="input-group-append">{<Iconn />}</div>}
        <input
          type="text"
          class="form-control rounded"
          placeholder={placeHolder}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        {Icon && <div class="input-group-append">{<Icon />}</div>}
      </div>
    </div>
  );
};

export default InputField;
