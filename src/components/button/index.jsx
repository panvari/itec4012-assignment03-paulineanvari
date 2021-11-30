import './styles.css';

export const Button = (props) => {
    //define button props
    const {isDisabled, type, text} = props;

    //return button with props
    return (
        <button disabled={isDisabled} className={type}>{text}</button>
    )
}