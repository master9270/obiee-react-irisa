import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {themeLightLTR} from './utils/theme-light-ltr';
import {themeLightRTL} from './utils/theme-light-rtl';
import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import UserContext from './Context';

import '../i18next';
import {useTranslation} from 'react-i18next';

const jssRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

const countries = [
    { code: "US",lang:"en", label: "United States", phone: "1", suggested: true },
    { code: "IR",lang:"fa", label: "Iran, Islamic Republic of", phone: "98",suggested: false }
  ];

function IndexComp(props) {    

    const [userDetails,setUserDetails] = React.useState(
            false
    );

    //const { i18n } = useTranslation();

    return (
        <UserContext.Provider value={ {
            direction:userDetails,
            handleChange: ()=>{
                setUserDetails(!userDetails);
                //i18n.changeLanguage(userDetails ? countries[1].lang : countries[0].lang)
            }
        }}>
        <React.Suspense fallback={<h1>Loading profile...</h1>}>
            <StylesProvider jss={jssRtl}>
            <MuiThemeProvider theme={userDetails===false ? themeLightLTR : themeLightRTL}>
                <App/>
            </MuiThemeProvider>
            </StylesProvider>
        </React.Suspense>
        </UserContext.Provider>
    )
}

ReactDOM.render(<IndexComp/>,document.getElementById('root'));
