import "./Button.css";

const Button = (props) => {

    const getVariant = (variant) => {
        switch (variant) {
            case 'primary':
                return 'btn-primary';
            case 'secondary':
                return 'btn-secondary';
            case 'success':
                return 'btn-success';
            case 'danger':
                return 'btn-danger';
            case 'warning':
                return 'btn-warning';
            case 'info':
                return 'btn-info';
            case 'light':
                return 'btn-light';
            case 'dark':
                return 'btn-dark';
            case 'link':
                return 'btn-link';
            default:
                return 'btn-primary';
        }
    };

    const getSize = (size) => {
        switch (size) {
            case 'small':
                return 'btn-sm';
            case 'large':
                return 'btn-lg';
            case 'medium':
                return 'btn-md';
            default:
                return 'btn-md';
        }
    };
    return (
        <button
            type={props.type ? "submit" : props.type}
            className={"btn " + getVariant(props.variant) + " " + getSize(props.size)}
            onClick={props.onClick}
        >
            {props.icon} &nbsp;
            {props.text}
        </button>
    )
};

export default Button;