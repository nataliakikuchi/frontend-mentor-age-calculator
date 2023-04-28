import styles from './button.module.css';
import iconArrow from '../../assets/icon-arrow.svg';

type ButtonProps = {
    className?: string,
    disabled: boolean,
    onClick: () => void,
}

const Button = ({className, disabled, onClick}: ButtonProps) => {
    return (
      <button className={`${styles['button-calculation']} ${className}`} disabled={disabled} onClick={onClick}>
        <img src={iconArrow} className={styles.icon}/>
      </button>
    );
}

export default Button;