export default function Button({ type = "admin", className = "" }) {
    const variantMap = {
        primary: "bg-primary",
        secondary: "bg-secondary text-dark",
        danger: "bg-danger"
      };
    return (
        <User
            type={type}
            className = {`$classname`}
        />
    )
}