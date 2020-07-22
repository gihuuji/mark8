import { makeStyles } from '@material-ui/core/styles'

const BulkUploadForm = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    borderRadius: 6,
    margin: '64px 0px',
  },
  section1: {
    padding: 24,
    '& .title': {
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '28px',
      color: '#002240',
    },
    '& .caption': {
      fontSize: '14px',
      lineHeight: '16px',
      color: '#0089FF',
      paddingTop: 8,
    },
  },
  section2: {
    padding: 24,
    borderTop: '1px solid #E5E5E5',
    '& .title': {
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '28px',
      color: '#002240',
    },
    '& .caption': {
      fontSize: '14px',
      lineHeight: '16px',
      color: '#0089FF',
      paddingTop: 8,
    },
  },
  inputRoot: {
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    borderRadius: 6,
    marginTop: 16,
    padding: 24,
    display: 'flex',
    alignItems: 'center',
  },
  buttonRoot: {
    minWidth: 56,
    minHeight: 56,
    background: '#F3F5F8',
    borderRadius: 6,
    color: '#002240',
  },
  inputDescription: {
    fontSize: '14px',
    lineHeight: '16px',
    color: '#002240',
    marginLeft: 24,
  },
}))

export default BulkUploadForm
