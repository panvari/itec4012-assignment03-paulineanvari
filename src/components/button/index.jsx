import './styles.css';

export const Button = (props) => {
    const {isDisabled, type, text} = props;

    return (
        <button disabled={isDisabled} className={type}>{text}</button>
    )
}