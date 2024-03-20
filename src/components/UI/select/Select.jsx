import SelectElement from "react-select";
import "./Select.module.scss";

const Select = ({ ...props }) => {
    return (
        <SelectElement
            classNamePrefix="custom__select"
            isSearchable={false}
            { ...props }    
        />
    )
}

export default Select;