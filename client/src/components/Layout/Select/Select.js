const Select = (props) => {
    return (
        <div className="form-group">
            <label className="control-label mb-1">{props?.label}</label>
            <div className="input-group">
                <select
                    name={props.name}
                    id={props.id}
                    className={"form-control " + props?.className}
                    onChange={props.onChange}
                >
                    <option value="0">{props.placeholder}</option>
                    {props?.data.map((item) => (
                        <option value={item.id ? item.id : item.value}>{item.text ? item.text : item.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select;