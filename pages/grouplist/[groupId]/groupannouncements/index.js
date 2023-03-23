import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { format } from 'date-fns';
//components
import Layout from '../../../../components/Layout'
import CardAnnouncement from '../../../../components/CardAnnouncement'
import ArrowGoBack from '../../../../components/ArrowGoBack/ArrowGoBack'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../../../../components/useToastify'
//icons
import { BsPlusCircle } from 'react-icons/bs';


export default function GroupAnnouncements() {
  const router = useRouter()
  const groupId = router.query.groupId
  const [announceInfo, setAnnounceInfo] = useState([])
  const [userRole, setUserRole] = useState("")
  const notifySuccess = useToastify("success", "¡Anuncio creado con éxito!")

  //check de item que viene desde newAnnouncement para notificación de anuncio creado
  useEffect(() => {
    const notifAnnounceCreation = localStorage.getItem('notifAnnounceCreation')
    if (notifAnnounceCreation === "true") {
      notifySuccess()
      localStorage.setItem('notifAnnounceCreation', 'false')
    }

  }, [])

  //petición a la api para setear anuncios
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    setUserRole(userData.role)
    if (token) {
      //groupId anuncios
      fetch(`https://api.toknow.online/announcement/group/${groupId}`, {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.data) {
            const allAnnouncements = data.data.announcementsFound
            console.log("info de all anuncios ruta /groupannouncements", allAnnouncements)
            setAnnounceInfo(allAnnouncements.reverse())
          }
        })
    }
  }, [router.query]);
  return (
    <Layout>
      <div>
        <ArrowGoBack
          btnTxtModal={<h4>Anuncios grupales</h4>}
          btnTxtModal2nd={
            userRole !== "parent" ? (
              <Link href={`/grouplist/${groupId}/newgroupannouncement`}>
                <button className='btn-form bg-success'>Anuncio <BsPlusCircle /></button>
              </Link>) : null
          }
          route={`/grouplist/${groupId}`}
        />
        {(announceInfo.length > 0) ?
          announceInfo.map(announce => (
            <Link href="/grouplist/[groupId]/groupannouncements/[groupAnnouncementId]"
              as={`/grouplist/${groupId}/groupannouncements/${announce._id}`} style={{ textDecoration: 'none' }} key={announce.key} >

              <CardAnnouncement
                // coverimg={"/img/kid&parent.jpeg"}
                userId={announce.user || announce.teacher}
                role={(!!announce.user) ? "Administrador" : "Profesor"}
                date={format(new Date(announce.createdAt), 'dd/MM/yyyy')}
                announcementTitle={announce.announcementTitle} />
            </Link>
          )) : <div className="d-flex justify-content-center " >
            <h6 className='col-10 alert alert-primary' role="alert">
              Aún no hay anuncios grupales publicados
            </h6>
          </div>
        }

      </div>
      <ToastContainer />
    </Layout>
  )
}
