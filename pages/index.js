/* default */
import React from 'react'

/* components */
import Layout from '../components/Layout'
import ButtonDonate from '../components/ButtonDonate/ButtonDonate'
import CardInfoLanding from '../components/CardInfoLanding/CardInfoLanding'
import FormLogin from '../components/FormLogin/FormLogin'
import Link from 'next/link'



export default function home() {
  return (

    <Layout title='toKnow de la mano con tu hijo' description='Aplicación para escuelas, herramienta para desarrollar una comunicación efectiva en la comunidad'>
      <article className='sectionOneHome d-lg-flex justify-content-lg-around align-items-lg-center'>
        <section className='flex-direction-column col-12 col-lg-6 align-items-end '>
          <h2 className='landingTitle'>toKnow</h2>
          <h5 className='landingSubtitle'>Conectando a la comunidad escolar</h5>
          <div className=''>¡Bienvenidos a toKnow!
            Somos una plataforma que te ayudará a conectar con la comunidad escolar de tus hijos y alumnos.
            En esta página encontrarás información útil sobre tu escuela, incluyendo detalles de grupos y
            sus profesores. </div>
          <Link className='links col-12 d-flex justify-content-lg-start justify-content-center' href='/register'>
            <button className='btn-form col-6 bg-success'>Regístra tu escuela</button>
          </Link>
        </section>

        <section className='col-12 col-lg-4'>
          <h5 className='landingLogin'>Acceder</h5>
          <FormLogin />
          <div className='d-flex justify-content-lg-between'>
            {/* <div className='col-lg-5'>sus datos están seguros con nosotros</div> */}
            <div className='landingButtons d-flex'>
              {/* <Button
                text='Ingresa' />
              <Button
                text='Registrate' /> */}
            </div>
          </div>
          {/* <div className='forgotPassword'>¿Olvidaste la contraseña?</div> */}
        </section>
      </article>

      <article className='sectionTwoHome d-lg-flex col-lg-12 justify-content-around'>
        <CardInfoLanding
          ImgSrc='/img/Frame1.png'
          Title='#1 Estamos a un click'
          Description='Haz click en el botón de Registro y comienza a explorar todas las 
          herramientas que tenemos para tí' />

        <CardInfoLanding
          ImgSrc='/img/Frame2.png'
          Title='#2 Accede a tu grupo'
          Description='Acceder a los grupos de clase de tus hijos nunca fue tan fácil, tan solo 
          ingresa a la plataforma y escoge el grupo que deseas entrar' />

        <CardInfoLanding
          ImgSrc='/img/Frame3.png'
          Title='#3 Información a la mano'
          Description='Con toKnow la información que necesitas está siempre a la mano, encuentra 
          todo lo que necesitas saber de la comunidad escolar' />

        <CardInfoLanding
          ImgSrc='/img/Frame4.png'
          Title='#4 El poder de estar conectado!'
          Description='Descubre el poder de nuestra aplicación, donde podrás ingresar fácilmente y 
          estar al tanto de lo que sucede en tu escuela' />
      </article>

      <article className='sectionThreeHome d-lg-flex col-lg-12 justify-content-end align-items-center'>
        <section className='col-lg-7'>
          <h3>Registrate para disfrutar del servicio</h3>
          <div>¡Regístrate ahora mismo para disfrutar de todos los servicios que nuestra aplicación tiene
            para ofrecerte! Podrás crear tu escuela y hacer grupos con profesores y alumnos.</div>
        </section>
        <section className='d-flex col-lg-4 justify-content-center align-items-center '>
          <div className='d-flex justify-content-around'>
            <Link className='col-12' href='/register'><button className='btn-form col-12 bg-success'>Regístrarse</button></Link>
          </div>
        </section>
      </article>

      <article className='sectionFourHome d-lg-flex col-lg-12'>
        <section className='col-12 col-lg-6'> <img className='landingPicture' src="/img/kid&parent.jpeg" alt="" /></section>
        <section className='landingTextNextToImg col-12 col-lg-6'>
          <h3>Acompañando de la mano</h3>
          <div ><img className='landingLogoNextToImg' src="/img/logos/logo.svg" alt="" /></div>
          <div>Nuestra aplicación de escuela digital te brinda la oportunidad de estar al tanto
            del progreso de tu hija o hijo en cualquier momento y lugar, simplemente ingresa a la plataforma
            y encuentra toda la información que necesitas, desde calificaciones y tareas, hasta
            notificaciones sobre eventos y actividades escolares. Sabemos que la educación de tus hijos
            es una prioridad, es por eso que hemos hecho que sea muy fácil y accesible para los padres
            el seguir acompañandolos en su proceso de aprendizaje. </div>
        </section>
      </article>

      <article className='sectionFiveHome d-flex col-12 col-lg-12 justify-content-center align-items-center'>
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
        <div className='FAQ col-lg-6'>
          <div className='FAQ__title'>¿Cómo puedo acceder a la aplicación de toKnow?</div>
          <div>
            Acceder a nuestra aplicación es muy fácil. Lo primero que debes hacer es ingresar
            a la página web desde tu navegador. Luego, crea tu cuenta de usuario utilizando
            tus datos personales y la información de contacto que te solicitemos. Una vez
            que hayas creado tu cuenta, podrás ingresar fácilmente a la plataforma y comenzar
            a disfrutar de todos los beneficios.
          </div>
        </div>
        <div className='FAQ col-lg-6'>
          <div className='FAQ__title'>¿Qué debo hacer?</div>
          <div>
            Si tienes alguna duda o problema con el proceso de registro, nuestro equipo de
            soporte técnico estará a tu disposición para ayudarte en todo lo que necesites.
            ¡Anímate a ingresar ahora y descubre todas las posibilidades que nuestra aplicación
            de escuela digital tiene para ofrecerte!
          </div>
        </div>
        <div className='FAQ col-lg-6'>
          <div className='FAQ__title'>
            ¿Cómo puedo ver los grupos de mi hijo?
          </div>
          <div>
            Para ver los grupos en los que está inscrito tu hijo primero debes ingresar con tu
            cuenta de usuario y seleccionar el grupo correspondiente al grado que está cursando.
            Luego, encontrarás una sección de Profesores y otra de Alumnos donde podrás visualizar
            la información que necesitas.
          </div>
        </div>
        <div className='FAQ col-lg-6'>
          <div className='FAQ__title'>
            ¿La aplicación de toKnow tiene algún costo?
          </div>
          <div>
            No, nuestra aplicación es completamente gratuita para todas las escuelas, padres,
            estudiantes y profesores. No requerimos ningún pago para utilizar nuestra plataforma,
            ya que nuestro objetivo es hacer que la educación sea más accesible y fácil
            para todos.
          </div>
        </div>
      </article>

    </Layout>


  )
}


