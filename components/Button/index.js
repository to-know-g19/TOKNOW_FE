import './style.module.scss'
export default function Button({ variant, stade, text, cb, className = "" }) {
    const variantMap = {
        primary: "bg-primary",
        secondary: "bg-secondary text-dark",
        orange: "bg-orange",
        danger: "bg-danger"
      };
      
    return (
        <button
      onClick={() => {
        cb ? cb() : console.log("no cb");
      }}
      className={` button ${variantMap[variant]} ` }
    >
      {text}
    </button>
    )
}