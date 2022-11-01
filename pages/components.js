import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default function home() {
  return (
    <Layout title='Ejemplo de componentes' description='Aqui se van a armar los componentes'>
      <div>
        <h2>iconos</h2>
        <a href=""><i className="bi bi-arrow-left-circle"></i></a>
        <a href=""><i className="bi bi-bell"></i></a>
        <a href=""><i className="bi bi-person-fill"></i></a>
        <a href=""><i className="bi bi-list"></i></a>
        <a href=""><i className="bi bi-trash"></i></a>
        <a href=""><i className="bi bi-paperclip"></i></a>
        <a href=""><i className="bi bi-eye"></i></a>
        <a href=""><i className="bi bi-calendar"></i></a>
      </div>
      <div>
        <h2>botones</h2>
        <Button variant="primary" text="primary" />
        <Button variant="orange" text="secundary" />
        <Button variant="primary" text="danger" />
        <Button text="user" /></div>
      <h2>Botón para grupos</h2>
      <div> <a href="">1 B<span ><i className="bi bi-plus"></i></span></a> </div>
    </Layout>
  )
}
