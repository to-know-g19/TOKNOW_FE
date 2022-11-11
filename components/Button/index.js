/* default */
import Link from 'next/link'

/**
 * Button
 * @param { children }
 * @param { string } label (required) -to display in the button - disabled it has children
 * @param { ...any } props 
 * @returns component
 */

export const Button = ( { children, label,  ...props } ) => {    
    return (
      <>
        { props.target === '_blank' ||
          !props.href && <a {...props}> { children ?? label } </a> ||
          <Link {...props}> { children ?? label } </Link>
        }
      </>
    )
}