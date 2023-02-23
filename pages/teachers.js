import React from 'react'
import Layout from '../components/Layout'

import TeachersDisplay from '../components/TeachersDisplay/TeachersDisplay'


export default function displayteachers() {
  return (

    <Layout>
    {/* <div>página displayteachers</div> */}
    {/* hay que hacer que se vea con flex-wrap para que baje el tercero  */}
    <TeachersDisplay/>
    </Layout>
  )
}
