import React from 'react'
// import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
// import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import FormGroup from '../components/FormGroup'
import GroupsDisplay from '../components/GroupsDisplay/GroupsDisplay'



export default function grouppage() {

    return (

<Layout>
    
    <GroupsDisplay/>
    <FormGroup/>

</Layout>


    )
}
