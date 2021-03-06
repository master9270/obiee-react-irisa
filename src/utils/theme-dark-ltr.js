import {createMuiTheme} from '@material-ui/core/styles';
//import { enUS } from '@material-ui/core/locale';
import * as locales from '@material-ui/core/locale';
import { blue } from '@material-ui/core/colors';

export const themeDarkLTR = createMuiTheme({
    type:'themeDarkLTR',
    direction: 'ltr',    
    palette:{
        type:'dark' 
    },
overrides: {
      MuiDrawer:theme=>( {
            root: {
                direction:'ltr',
                display: 'flex',
              },
              menuButton: {
                marginRight: 36,
              },
              hide: {
                display: 'none',
              },
              drawer: {
                width: 240,
                flexShrink: 0,
                whiteSpace: 'nowrap',
              },
              drawerOpen: {
                width: 240,
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              },
              drawerClose: {
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1,
                [theme.breakpoints.up('sm')]: {
                  width: theme.spacing(9) + 1,
                },
              },
              toolbar: {
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: theme.spacing(0, 1),
                ...theme.mixins.toolbar,
              },
              content: {
                flexGrow: 1,
                padding: theme.spacing(3),
              },
              avatar:{
                backgroundColor: blue[500],
              }
        }),
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: '#333'
        }
    },

    MuiCardHeader: {
        root: {
            padding: '8px'
        }, title: {
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#263238'
        }, action: {
            marginTop: 0,
            color:'black'
        }, avatar: {
            marginRight: 9,
            marginLeft: 0,
        }
    },
    }    
}, locales['enUS']);