import { makeStyles } from '@material-ui/core/styles'

const DataTableStyles = makeStyles((theme) => ({
  root: {},
  idClass: {
    borderRadius: '6px',
    padding: '12px',
    color: '#A6AAB4',
  },
  error: {
    background: '#EB5757',
    color: '#FFFFFF',
  },
  name: {
    fontSize: '14px',
    lineHeight: '16px',
    color: '#002240',
  },
  nameError: {
    color: '#EB5757',
  },
  tableHead: {
    color: '#A6AAB4',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '12px',
  },
  titleRoot: {
    background: '#FFFFFF',
    border: '0.5px solid #E5E5E5',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
  titleNumber: {
    background: '#F3F5F8',
    padding: '30px 28px',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#002240',
  },
  titleText: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#002240',
    marginLeft: 24,
  },
}))

export default DataTableStyles
