import style from '../styles/component'

const Button = ({ variant, text = "soy un botón", cb }) => {
    const variantMap = {
      primary: "bg-primary",
      secondary: "bg-secondary text-dark",
      danger: "bg-danger"
    };
    console.log(variantMap[variant]);
    return (
      <button
        onClick={() => {
          cb ? cb() : console.log("no cb");
        }}
        className={`button ${variantMap[variant]}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;