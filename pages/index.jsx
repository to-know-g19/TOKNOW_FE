import React from 'react'
import Button from '../components/Button/Button'
import CardInfoLanding from '../components/CardInfoLanding/CardInfoLanding'


export default function home() {
  return (
    <>
      <div>Placeholder Navbar toKnow</div>

      <article className='sectionOneHome d-flex d-lg-flex justify-content-lg-center align-items-lg-center'>
        <section className='col-12 col-lg-6'>
          <h2 className=''>ToKnow</h2>
          <h5 className='landingSubtitle'>Queremos que acompañes a tu hijo en esta etapa</h5>
          <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed semper urna blandit hendrerit placerat. Vestibulum condimentum lorem lacus,
            in commodo purus consequat vitae. Vivamus molestie dui eget fringilla consequat.
            Quisque in enim elit. Sed non porttitor dui, in malesuada libero.
            Nullam fermentum vestibulum iaculis. </div>
        </section>

        <section className='col-12 col-lg-4'>
          <h5 className='landingLogin'>Acceder</h5>
          <div className='landingForm d-lg-flex flex-lg-column'>
            <input type="text" placeholder='aquí va form de react hook forms' />
            <input type="text" />
          </div>
          <div className='d-flex justify-content-lg-between'>
            <div className='col-lg-5'>sus datos están seguros con nosotros</div>
            <div className='landingButtons d-flex'>
              <Button
                text='Ingresa' />
              <Button
                text='Registrate' />
            </div>
          </div>
          <div className='forgotPassword'>¿Olvidaste la contraseña?</div>
        </section>
      </article>

      <article className='sectionTwoHome d-flex col-lg-12 justify-content-center'>
        <CardInfoLanding
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>

        <CardInfoLanding
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>

        <CardInfoLanding
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>

        <CardInfoLanding
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>
      </article>

      <article className='sectionThreeHome d-flex col-lg-12 justify-content-end align-items-center'>
        <section className='col-lg-7'>
          <h3>Registrate para disfrutar el servicio</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed semper urna blandit hendrerit placerat.
            Vestibulum condimentum lorem lacus, in commodo purus consequat vitae. </div>
        </section>
        <section className='d-flex col-lg-4 justify-content-center align-items-center '>
          <Button
            text='Registrate' />
        </section>


      </article>

      <article className='sectionFourHome d-lg-flex col-lg-12'>
        <section className='col-6'> <img className='landingPicture' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC" alt="" /></section>
        <section className='landingTextNextToImg col-6'>
          <h3>Acompañando de la mano</h3>
          <div className='landingLogoNextToImg'>toKnow LOGO</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper urna blandit hendrerit 
            placerat. Vestibulum condimentum lorem lacus, in commodo purus consequat vitae. 
            Vivamus molestie dui eget fringilla consequat. 
            Quisque in enim elit. Sed non porttitor dui, in malesuada libero. 
            Nullam fermentum vestibulum iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed semper urna blandit hendrerit placerat. Vestibulum condimentum lorem lacus, 
            in commodo purus consequat vitae. Vivamus molestie dui eget fringilla consequat. 
            Quisque in enim elit. Sed non porttitor dui, in malesuada libero. Nullam fermentum 
            vestibulum iaculis. Fusce lacinia vel nulla ac rutrum. Vivamus a mi in ligula rutrum 
            sollicitudin at elementum ipsum. Pellentesque eget ante nec urna sodales blandit. </div>
        </section>
      </article>
      <article className='sectionFiveHome d-lg-flex col-lg-12 justify-content-center align-items-center'> 
      <h4>Cómo contribuir</h4>
      </article>

    </>
  )
}
