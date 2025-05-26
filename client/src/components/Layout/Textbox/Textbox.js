import "./Textbox.css";


const Textbox = (props) => {

    return (
        <>
            <div className="form-group mt-1 mb-1">
                <label className={props.labelClass}>{props.label}</label>
                <input
                    type={props.type || 'text'}
                    name={props.name}
                    className={"au-input au-input--full form-control " + props.className}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    disabled={props.disabled}
                />
            </div>
        </>
    )
}


export default Textbox;

