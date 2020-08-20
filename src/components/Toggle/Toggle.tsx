import React from "react";

interface Props {
  checked: boolean;
  onPress(): void;
}

const Toggle = ({ checked, onPress }: Props) => {
  return (
    <div className="ToggleWrapper" onClick={onPress}>
      <p>
        {checked ? "Disable" : "Enable"} dark mode{" "}
        <input type="checkbox" checked={checked} />
      </p>
    </div>
  );
};

export default Toggle;
