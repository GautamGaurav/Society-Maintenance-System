import React from 'react';

interface OptionItem {
  id?: number | string;
  value?: string | number;
  text?: string;
  name?: string;
}

interface SelectProps {
  label?: string;
  name?: string;
  id?: string;
  value?: any;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  data?: OptionItem[];
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className="form-group">
      <label className="control-label mb-1">{props?.label}</label>
      <div className="input-group">
        <select
          name={props.name}
          id={props.id}
          value={props.value}
          className={"form-control " + props?.className}
          onChange={props.onChange}
          disabled={props.disabled || false}
        >
          <option value="0">{props.placeholder}</option>
          {props?.data?.map((item) => (
            <option key={item.id ? item.id : item.value} value={item.id ? item.id : item.value}>
              {item.text ? item.text : item.name || item.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
