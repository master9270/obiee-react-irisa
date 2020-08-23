import {createMuiTheme} from '@material-ui/core/styles';
//import { faIR } from '@material-ui/core/locale';
import * as locales from '@material-ui/core/locale';

export const themeDarkRTL = createMuiTheme({
    type:'themeDarkRTL',
    direction: 'rtl',
    body:{
        backgrouundColor:'#000000'
    },
    overrides: {
        MuiDrawer: {
        root: {
            position: 'absolute',
        },
        paperAnchorDockedRight: {
            width: 225
        },
        paper: {
            //backgroundColor: '#18202c',
            //backgroundColor: '#f4f6f8',
            backgroundColor: '#000000',
            color:'#ffffff',
        },


    },
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: '#3f51b5'
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
}, locales['faIR']);