import {createMuiTheme} from '@material-ui/core/styles';
//import { faIR } from '@material-ui/core/locale';
import * as locales from '@material-ui/core/locale';

export const themeLightRTL = createMuiTheme({
    direction: 'rtl',
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
            backgroundColor: '#ffffff',
            color:'#263238',
        },


    },
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: '#3f51b5'
        }
    },
}, locales['faIR']);