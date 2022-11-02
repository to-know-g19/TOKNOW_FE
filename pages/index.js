import React from 'react'
import Layout from '../components/Layout'

// import Button from '../components/ButtonLand/Button'
import ButtonDonate from '../components/ButtonDonate/ButtonDonate'
import CardInfoLanding from '../components/CardInfoLanding/CardInfoLanding'

// import Navbar from '../components/NavBar/Navbar'

export default function home() {
  return (
    <Layout>
      <div>home</div>

      {/* <Navbar /> */}

      <article className='sectionOneHome d-flex d-lg-flex justify-content-lg-center align-items-lg-center'>
        <section className='col-12 col-lg-6'>
          <h2 className=''>toKnow</h2>
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
              {/* <Button
                text='Ingresa' />
              <Button
                text='Registrate' /> */}
            </div>
          </div>
          <div className='forgotPassword'>¿Olvidaste la contraseña?</div>
        </section>
      </article>

      <article className='sectionTwoHome d-flex col-lg-12 justify-content-center'>
        <CardInfoLanding
          ImgSrc='/img/Frame1.png'
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>

        <CardInfoLanding
          ImgSrc='/img/Frame2.png'
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>

        <CardInfoLanding
          ImgSrc='/img/Frame3.png'
          Title='H3 Solution 1'
          Description='Lorem ipsum dolor sit amet, 
          consectetur adipiscing dolor sit urna blandit 
          hendrerit placerat.'/>

        <CardInfoLanding
          ImgSrc='/img/Frame4.png'
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
          {/* <Button
            text='Registrate' /> */}
        </section>
      </article>

      <article className='sectionFourHome d-lg-flex col-lg-12'>
        <section className='col-6'> <img className='landingPicture' src="/img/kid&parent.jpeg" alt="" /></section>
        <section className='landingTextNextToImg col-6'>
          <h3>Acompañando de la mano</h3>
          <div className='landingLogoNextToImg'><img src="/img/logos/logo.svg" alt="" /></div>
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

      <article className='sectionSixHome d-flex justify-content-around align-items-center flex-column'>
        <h5 className='col-lg-6'>Un donativo mensual es una forma constante de lograr que madres y padres
          puedan comunicarse y estar pendientes de sus hijos.</h5>
        <div>
          <ButtonDonate />
        </div>
      </article>

      <article className='sectionSevenHome d-lg-flex col-lg-12'>
        <div className='FAQ col-lg-6'>H3  ¿FAQ?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper urna blandit hendrerit placerat.
            Vestibulum condimentum lorem lacus, in commodo purus consequat vitae. Vivamus molestie dui eget
            fringilla consequat. Quisque in enim elit. Sed non porttitor dui, in malesuada libero.
            Nullam fermentum vestibulum iaculis.
          </div>
        </div>
        <div className='FAQ col-lg-6'>H3  ¿FAQ?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper urna blandit hendrerit placerat.
            Vestibulum condimentum lorem lacus, in commodo purus consequat vitae. Vivamus molestie dui eget
            fringilla consequat. Quisque in enim elit. Sed non porttitor dui, in malesuada libero.
            Nullam fermentum vestibulum iaculis.
          </div>
        </div>
        <div className='FAQ col-lg-6'>H3  ¿FAQ?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper urna blandit hendrerit placerat.
            Vestibulum condimentum lorem lacus, in commodo purus consequat vitae. Vivamus molestie dui eget
            fringilla consequat. Quisque in enim elit. Sed non porttitor dui, in malesuada libero.
            Nullam fermentum vestibulum iaculis.
          </div>
        </div>
        <div className='FAQ col-lg-6'>H3  ¿FAQ?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper urna blandit hendrerit placerat.
            Vestibulum condimentum lorem lacus, in commodo purus consequat vitae. Vivamus molestie dui eget
            fringilla consequat. Quisque in enim elit. Sed non porttitor dui, in malesuada libero.
            Nullam fermentum vestibulum iaculis.
          </div>
        </div>
      </article>
      
    </Layout>
    
    
  )
}


