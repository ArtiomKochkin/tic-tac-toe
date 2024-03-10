import styles from "./Select.module.scss";

const Select = ({ options, ...props }) => {
    return (
        <select className={styles.select} {...props}>
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default Select;