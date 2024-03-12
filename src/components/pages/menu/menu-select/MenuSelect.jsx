import Label from "../../../UI/label/Label";
import Select from "../../../UI/select/Select";
import styles from "../Menu.module.scss";

const MenuSelect = ({ labelText, options, value, onChange, ...props }) => {
    return (
        <div className={styles.menu__select}>
            <Label>{labelText}</Label>
            <Select 
                options={options}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default MenuSelect;