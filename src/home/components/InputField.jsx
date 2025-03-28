import React from "react";

function InputField({
  label,
  type = "number",
  value,
  min = 0,
  max = 100,
  step = 1,
  onInput,
}) {
  return (
    <div className="flex flex-col space-y-2 py-3 rounded-lg ">
      <div className="flex justify-between" >
        <div>
          <label className="font-semibold text-gray-700">{label}</label>
        </div>
        <div>
          <input className="text-[#00c49f] font-semibold no-arrows w-20 text-end focus:outline-none"
            type={type}
            value={value}
            onInput={(e) => onInput(Number(e.target.value))}
          />
        </div>
      </div>
      <div>
        <input className="w-full h-8 slider "
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onInput={(e) => onInput(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default InputField;
