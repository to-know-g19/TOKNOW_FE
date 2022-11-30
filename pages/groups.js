import React from 'react'
import GroupCardDisplay from '../components/GroupCardDisplay/GroupCardDisplay'
import Layout from '../components/Layout'
import GroupModal from '../components/GroupModal/GroupModal'

export default function groups() {
  return (
    <Layout>
    <div>
      <div>hola</div>
      <div><GroupModal/></div>
        <GroupCardDisplay/>
    </div>
    </Layout>
  )
}
