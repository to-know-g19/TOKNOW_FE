export default function Button({ variant, text, cb, className = "" }) {
    const variantMap = {
        primary: "bg-primary",
        secondary: "bg-secondary text-dark",
        danger: "bg-danger"
      };
    return (
        <button
      onClick={() => {
        cb ? cb() : console.log("no cb");
      }}
      className={`button ${variantMap[variant]}`}
    >
      {text}
    </button>
    )
}