import React from 'react';
import './Textbox.css';

interface TextboxProps {
  label?: string;
  labelClass?: string;
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: any;
  disabled?: boolean;
  format?: string;
}

const Textbox: React.FC<TextboxProps> = (props) => {
  const isTextarea = props.type === 'textarea';

  return (
    <>
      <div className="form-group mt-1 mb-1">
        <label className={props.labelClass}>{props.label}</label>
        {isTextarea ? (
          <textarea
            name={props.name}
            className={"au-input au-input--full form-control " + props.className}
            placeholder={props.placeholder}
            onChange={props.onChange as any}
            value={props.value}
            disabled={props.disabled}
          />
        ) : (
          <input
            type={props.type || 'text'}
            name={props.name}
            className={"au-input au-input--full form-control " + props.className}
            placeholder={props.placeholder}
            onChange={props.onChange as any}
            value={props.value}
            disabled={props.disabled}
            data-format={props.format || 'text'}
          />
        )}
      </div>
    </>
  );
};

export default Textbox;
