import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import BackupIcon from '@material-ui/icons/Backup'

import DataTableStyles from './DataTableStyles'
import classNames from 'classnames'

function countAmenities(data) {
  let count = 0
  Object.keys(data).map((item) => {
    if (data[item] === 'TRUE') {
      count = count + 1
    }
  })
  // console.log('countAmenities', { data, count })
  return count
}

function validateData(values) {
  const errors = {}
  const requiredFields = [
    'id',
    'condo_name',
    'rent_price',
    'sale_price',
    'bath',
    'bedroom',
    'description',
    'floor',
    'photo1',
    'size',
    'title',
  ]
  requiredFields.forEach((field) => {
    if (!values[field]) errors[field] = 'This field is required'
  })
  // console.log('validateData', { values, errors })
  return errors
}

function createData(
  id,
  condo_name,
  rent_price,
  sale_price,
  bedroom,
  bath,
  size,
  floor,
  status,
  photo1,
  title,
  description,
  amenities,
  invalid,
) {
  return {
    id,
    condo_name,
    rent_price,
    sale_price,
    bedroom,
    bath,
    size,
    floor,
    status,
    photo1,
    title,
    description,
    amenities: countAmenities(amenities),
    errors: validateData(invalid),
  }
}

function DataTable({ items }) {
  const classes = DataTableStyles()
  const rows = items.map((item) => {
    return createData(
      item.id,
      item['condo_name-EN'],
      item.rent_price,
      item.sale_price,
      item.bedroom,
      item.bath,
      item['size (sq.m)'],
      item.floor,
      { accept_agent: item.accept_agent, agent_post: item.agent_post },
      item.photo1,
      item.title,
      item.description,
      {
        Aircon: item['Aircon'],
        BathTub: item['Bath tub'],
        ElectricStove: item['Electric stove'],
        Furniture: item['Furniture'],
        GasStove: item['Gas stove'],
        Refrigerator: item['Refrigerator'],
      },
      {
        id: item.id,
        condo_name: item['condo_name-EN'],
        rent_price: item.rent_price,
        sale_price: item.sale_price,
        bedroom: item.bedroom,
        bath: item.bath,
        size: item['size (sq.m)'],
        floor: item.floor,
        photo1: item.photo1,
        title: item.title,
        description: item.description,
      },
    )
  })

  console.log('rows', rows)
  return (
    <div>
      <div className={classes.titleRoot}>
        <div className={classes.titleNumber}>38</div>
        <div className={classes.titleText}>
          <span>listings successfully and Ready to published</span>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead} align="left">
                #
              </TableCell>
              <TableCell className={classes.tableHead}>CONDO NAME</TableCell>
              <TableCell className={classes.tableHead} align="left">
                RENT PRICE (Baht)
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                SELL PRICE (Baht)
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                BEDROOM
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                BATHROOM
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                SIZE (sqm.)
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                FLOOR
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                STATUS
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                PHOTO
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                TITLE
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                DESCRIPTION
              </TableCell>
              {/* <TableCell align="right">BENEFIT</TableCell> */}
              <TableCell className={classes.tableHead} align="left">
                Amenities
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <div
                    className={classNames({
                      [classes.idClass]: true,
                      [classes.error]: Object.keys(row.errors).length > 0,
                    })}
                  >
                    {row.id}
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.condo_name,
                    })}
                  >
                    {row.condo_name ? row.condo_name : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.rent_price,
                    })}
                  >
                    {row.rent_price ? row.rent_price : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.sale_price,
                    })}
                  >
                    {row.sale_price ? row.sale_price : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.bedroom,
                    })}
                  >
                    {row.bedroom ? row.bedroom : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.bath,
                    })}
                  >
                    {row.bath ? row.bath : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.size,
                    })}
                  >
                    {row.size ? row.size : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.floor,
                    })}
                  >
                    {row.floor ? row.floor : 'not found'}
                  </div>
                </TableCell>
                <TableCell align="right">
                  {row.status && (
                    <div style={{ display: 'flex', width: 200, justifyContent: 'space-between' }}>
                      {row.status.accept_agent === 'TRUE' && (
                        <div
                          style={{
                            background: 'rgba(111, 207, 151, 0.24)',
                            borderRadius: '24px',
                            textAlign: 'center',
                            padding: '7px 12px',
                            color: '#6FCF97',
                          }}
                        >
                          Agent post
                        </div>
                      )}
                      {row.status.agent_post === 'TRUE' && (
                        <div
                          style={{
                            background: 'rgba(243, 208, 83, 0.28)',
                            borderRadius: '24px',
                            textAlign: 'center',
                            padding: '7px 12px',
                            color: '#F2C94C',
                          }}
                        >
                          รับ Co-Agent
                        </div>
                      )}
                    </div>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Avatar alt="image" variant="rounded" src={row.photo1} />
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.title,
                    })}
                  >
                    {row.title ? (
                      <div
                        style={{
                          width: '97px',
                          maxWidth: '100%',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        <Typography>{row.title}</Typography>
                      </div>
                    ) : (
                      'not found'
                    )}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    className={classNames({
                      [classes.name]: true,
                      [classes.nameError]: !row.title,
                    })}
                  >
                    {row.title ? (
                      <div
                        style={{
                          width: '97px',
                          maxWidth: '100%',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        <Typography>{row.description}</Typography>
                      </div>
                    ) : (
                      'not found'
                    )}
                  </div>
                </TableCell>
                <TableCell align="right">{row.amenities}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
