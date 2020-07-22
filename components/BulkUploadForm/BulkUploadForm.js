import React from 'react'
import Button from '@material-ui/core/Button'
import SaveAltIcon from '@material-ui/icons/SaveAlt'

import BulkUploadFormStyles from './BulkUploadFormStyles'

import { csvJSON } from '../../util/dataFunction'

import csv from 'csv'

function BulkUploadForm({ onChange }) {
  const classes = BulkUploadFormStyles()
  const handleFileChange = ({ target }) => {
    console.log('handleFileChange', target)
    const selectedFile = target.files[0]

    var reader = new FileReader()
    reader.onload = function (e) {
      csv.parse(reader.result, (err, data) => {
        onChange(csvJSON(data))
      })
    }
    reader.readAsText(selectedFile)
  }

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <div className="title">
          <span>Bulk Upload form</span>
        </div>
        <div className="caption">
          <span>You haven’t upload any bulk data yet</span>
        </div>
      </div>
      <div className={classes.section2}>
        <div className="title">
          <span>Choose your an input medthod</span>
        </div>
        <div className={classes.inputRoot}>
          <div style={{ marginBottom: 11 }}>
            <input
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
              <Button className={classes.buttonRoot} variant="outlined" component="span">
                <SaveAltIcon />
              </Button>
            </label>
          </div>
          <div className={classes.inputDescription}>
            <div>
              <span style={{ fontWeight: 'bold' }}>via CSV file</span>
            </div>
            <div>
              <span>อัปเดตข้อมูลจากไฟล์ CSV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkUploadForm
