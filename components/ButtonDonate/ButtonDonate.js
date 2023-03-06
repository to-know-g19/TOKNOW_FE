import React from 'react'

export default function ButtonDonate() {
    return (
        <div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="S33Q7ABYRXC8S" />
                <input type="image" src="https://www.paypalobjects.com/es_ES/i/btn/btn_donate_LG.gif" border="" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" height="35"/>
                <img alt="" border="0" src="https://www.paypal.com/en_MX/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    )
}