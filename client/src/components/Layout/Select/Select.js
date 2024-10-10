const Select = () => {
    return (
        <select
            name="builder"
            id="cars"
            className="form-control"
            onChange={(e) => {
                handleChange(e);
            }}
        >
            <option value="0">--Select Builder--</option>
            {builderList.map((builder) => (
                <option value={builder.id}>{builder.name}</option>
            ))}
        </select>
    )
}

export default Select;