import styles from "./Label.module.scss";

const Label = ({children, ...props}) => {
    return (
        <label className={styles.label} {...props}>
            {children}
        </label>
    )
}

export default Label;