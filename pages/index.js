import React, { Fragment, useState } from 'react'
import Container from '@material-ui/core/Container'
import Navigationbar from '../components/Navigationbar'
import BulkUploadForm from '../components/BulkUploadForm'
import DataTable from '../components/DataTable'

export default function Index() {
  const [items, setItems] = useState([])
  console.log('items', items)
  return (
    <Fragment>
      <Navigationbar />
      <Container maxWidth="sm">
        <BulkUploadForm onChange={setItems} />
      </Container>
      <DataTable items={items} />
    </Fragment>
  )
}
