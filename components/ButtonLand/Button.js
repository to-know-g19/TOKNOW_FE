import React from 'react'


export default function Button({ variant, text = "default button", cb }) {
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
          className={`mainBtn ${variantMap[variant]}`}
        >
          {text}
        </button>
      );
    };
    
