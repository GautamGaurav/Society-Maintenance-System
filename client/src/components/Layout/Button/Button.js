import "./Button.css";

const Button = (props) => {

    const getClass = (variant) => {
        switch (variant) {
            case 'danger':
                return 'btn-danger';
            case 'info':
                return 'btn-info';
            default:
                return 'btn-info';
        }
    }

    return (
        <button
            type={props.type ? "submit" : props.type}
            className={"btn btn-md " + getClass(props.variant)}
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