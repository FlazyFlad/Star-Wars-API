import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: '20px',
    backgroundColor: (theme) => {
      if (theme === true) {
        return '#151515' 
      }
        return "#ffffff"
    }
  },
  icon: {
    height: '100px',
    width: '100px',
  },
  button: {
    marginTop: '40px',
  },
  cardGrid: {
    padding : '20px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: (theme) => {
      if (theme === true) {
        return '#151515'
      }
        return "#ffffff"
    },
    backgroundColor: (theme) => {
      if (theme === true) {
        return '#151515'
      }
        return "#ffffff"
    },
    border: (theme) => {
      if (theme === true) {
        return '1px lightGray solid'
      }
        return "1px #151515 solid"
    },
  },
  cardActions: {
    color: (theme) => {
      if (theme === true) {
        return '#ffffff'
      }
        return "#151515"
    },
    backgroundColor: (theme) => {
      if (theme === true) {
        return '#151515'
      }
        return "#ffffff"
    },
    borderTop: (theme) => {
      if (theme === true) {
        return '1px lightGray solid'
      }
        return "1px #151515 solid"
    },
  },
  cardMedia: {
    paddingTop: '100%'
  },
  cardContent: {
    flexGrow: 1,
    color: (theme) => {
      if (theme === true) {
        return '#ffffff'
      }
        return "#151515"
    },
    backgroundColor: (theme) => {
      if (theme === true) {
        return '#151515'
      }
        return "#ffffff"
    }
  },
  appbar: {
    color: (theme) => {
      if (theme === true) {
        return '#ffffff'
      }
        return "#151515"
    },
    border: '0',
    display: 'grid',
    gridTemplateColums: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    backgroundColor: (theme) => {
      if (theme === true) {
        return '#151515'
      }
        return "#ffffff"
    }
  },
  body: {
    backgroundColor: (theme) => {
      if (theme === true) {
        return '#151515'
      }
        return "#ffffff"
    },
    fontFamily: 'DIN, Helvetica, Arial, sans-serif',
    color: (theme) => {
      if (theme === true) {
        return '#ffffff'
      }
        return "#151515"
    },
    update: ''
  },
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    right: '0'
  }
}));

export default useStyles;