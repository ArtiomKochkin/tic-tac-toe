import Label from "../../../UI/label/Label";
import Select from "../../../UI/select/Select";

const MenuSelect = ({ labelText, options, ...props }) => {
    return (
        <div {...props}>
            <Label>{labelText}</Label>
            <Select options={options}/>
        </div>
    )
}

export default MenuSelect;