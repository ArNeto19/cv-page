import "./ToggleSwitch.scss";

export const ToggleSwitch = ({ toggleToEnglish, toggleAction }: any) => {
  return (
    <div className="toggle-switch">
      <input
        className="toggle-switch-checkbox"
        id="toggleSwitch"
        name="toggleSwitch"
        type="checkbox"
        onClick={() => toggleAction(!toggleToEnglish)}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};
