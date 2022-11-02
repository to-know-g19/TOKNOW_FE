import React from 'react'

export default function ButtonDonate() {
    return (
        <div>
<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="S33Q7ABYRXC8S" />
<input type="image" src="https://pics.paypal.com/00/s/NzIxN2YwNWUtYTAwOC00MWVmLWE2MDAtMzIxODgzOTI2YmI1/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_MX/i/scr/pixel.gif" width="1" height="1" />
</form>
        </div>
    )
}
