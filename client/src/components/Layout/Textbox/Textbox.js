import "./Textbox.css";


const Textbox = (props) => {

    return (
        <>
            <div className="form-group mt-1 mb-1">
                <label className={props.labelClass}>{props.label}</label>
                <input
                    type={props.type}
                    name={props.name}
                    className={"au-input au-input--full " + props.className}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                />
            </div>
        </>
    )
}


export default Textbox;

