import React from 'react'
import ArrowGoBack from '../../../components/ArrowGoBack/ArrowGoBack'
import Layout from '../../../components/Layout'
import PostAnnouncement from '../../../components/PostAnnouncement'

export default function AnnouncementId() {
    return (
        <Layout>
            <div>
                <div>
                    <ArrowGoBack
                    //agregar botón para ir al formulario de creación
                    btnTxtModal={<h4>Anuncio</h4>}
                    route={"/announcements"}/>
                    <PostAnnouncement
                        coverimg={"/img/kid&parent.jpeg"}
                        userName={"carlos Francisco Arteaga"}
                        role={"admin"}
                        date={"17 de noviembre"}
                        announcementTitle={"¡Bienvenido A TOKNOW!"}
                        textInfo={"Nuestra aplicación de escuela digital te brinda la oportunidad de estar al tanto del progreso de tu hija o hijo en cualquier momento y lugar, simplemente ingresa a la plataforma y encuentra toda la información que necesitas, desde calificaciones y tareas, hasta notificaciones sobre eventos y actividades escolares. Sabemos que la educación de tus hijos es una prioridad, es por eso que hemos hecho que sea muy fácil y accesible para los padres el seguir acompañandolos en su proceso de aprendizaje."}
                    />
                </div>
            </div>
        </Layout>
    )
}
