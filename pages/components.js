import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'




export default function home() {
  return (
    <Layout title='Ejemplo de componentes' description='Aqui se van a armar los componentes'>      
   
    
  
    
    <div>
    <p>iconos</p>
      <i className="bi bi-arrow-left-circle"></i>
      <i className="bi bi-bell"></i>
      <i className="bi bi-person-fill"></i>
      <i className="bi bi-list"></i>
      <i className="bi bi-trash"></i>
      <i className="bi bi-paperclip"></i>
      <i className="bi bi-eye"></i>
      <i className="bi bi-calendar"></i>
    </div>
    <div>
    <p>botones</p>
      <Button text="primary" />
        <Button text="secundary" />
        <Button text="danger" />
        <Button text="user" /></div>
        <p>Botón para grupos</p>
    <div> <a href="">1 B<span ><i className="bi bi-plus"></i></span></a> </div>
    </Layout>
  )
}
