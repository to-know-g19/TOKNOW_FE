import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'




export default function home() {
  return (
    <Layout title='Ejemplo de componentes' description='Aqui se van a armar los componentes'>      
   
    
  
    
    <div>
    <p>iconos</p>
      <i class="bi bi-arrow-left-circle"></i>
      <i class="bi bi-bell"></i>
      <i class="bi bi-person-fill"></i>
      <i class="bi bi-list"></i>
      <i class="bi bi-trash"></i>
      <i class="bi bi-paperclip"></i>
      <i class="bi bi-eye"></i>
      <i class="bi bi-calendar"></i>
    </div>
    <div>
    <p>botones</p>
      <Button text="primary" />
        <Button text="secundary" />
        <Button text="danger" />
        <Button text="user" /></div>
        <p>Botón para grupos</p>
    <div className='group-button'>1 B<span className='group-button__action'><i className="bi bi-plus"></i></span></div>
    </Layout>
  )
}
