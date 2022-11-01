import React from 'react'
import Layout from '../components/Layout/index'



export default function home() {
  return (
    <Layout title='Ejemplo de componentes' description='Aqui se van a armar los componentes'>

      

    <div><i className="bi-alarm"></i>
    </div>
    <div className='group-button'>1 B<span className='group-button__action'><i className="bi bi-plus"></i></span></div>
    </Layout>
  )
}
