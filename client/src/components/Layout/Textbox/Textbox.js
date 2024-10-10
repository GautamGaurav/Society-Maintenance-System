import "./Textbox.css";


const Textbox = (props) => {

    return (
        <>
            <div className="form-group">
                <label className={props.labelClass}>{props.label}</label>
                <input
                    type={props.type}
                    name={props.name}
                    className={"au-input au-input--full " + props.className}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
        </>
    )
}


export default Textbox;

