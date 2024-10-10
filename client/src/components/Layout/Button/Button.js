import "./Button.css";

const Button = (props) => {

    return (
        <button
            type={props.type ? "submit" : props.type}
            className={"btn btn-md " + props.className}
            onClick={props.onClick}
        >
            <i className="fa fa-lock fa-lg"></i>&nbsp;
            <span id="payment-button-amount">
                {props.text}
            </span>
        </button>
    )
};

export default Button;