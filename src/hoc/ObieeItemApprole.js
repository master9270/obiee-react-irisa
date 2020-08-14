import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme=>({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      formControl: {
        margin: 0,
        minWidth: 190,
      },
}))

export default function ObieeItemApprole(props){

    const classes = useStyles();

    const{mode,onAdd,onEdit,onDelete} = props;

    const [approleName,setApproleName] = React.useState(props.approle ? props.approle.approleName:'');
    const [approleDesc,setApproleDesc] = React.useState(props.approle ? props.approle.approleDesc:'');
    const [approleType,setApproleType] = React.useState(props.approle ? props.approle.approleType:'');
    const [approleLatinName,setApproleLatinName] = React.useState(props.approle ? props.approle.approleLatinName:'');

    return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Grid container spacing={1} >

      <Grid item xs={12} md={mode==='add' ? 12 : 4}>
            <TextField  
            label="approle latine name"
            placeholder="approle latine name"
            variant={"outlined"}
            value={approleLatinName}
            onChange={(e)=>setApproleLatinName(e.target.value)}
            />
        </Grid>

        <Grid item xs={12} md={mode==='add' ? 12 : 4}>
            <TextField  
            label="approle name"
            placeholder="approle name"
            variant={"outlined"}
            value={approleName}
            onChange={(e)=>setApproleName(e.target.value)}
            />
        </Grid>

        <Grid item xs={12} md={mode==='add' ? 12 : 4}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">approle Type</InputLabel>
        <Select
          //labelId="demo-simple-select-outlined-label"
          //id="demo-simple-select-outlined"
          value={approleType}
          onChange={(e)=>{setApproleType(e.target.value)}}
          label="approle Type"
        >
          <MenuItem value={'author'}>Author</MenuItem>
          <MenuItem value={'consumer'}>Consumer</MenuItem>
          <MenuItem value={'admin'}>Admin</MenuItem>
          <MenuItem value={'context author'}>Context Author</MenuItem>
        </Select>
      </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
            <TextField  
            label="approle Desc"
            placeholder="approle Desc"
            variant={"outlined"}
            fullWidth
            value={approleDesc}
            onChange={(e)=>setApproleDesc(e.target.value)}
            />
        </Grid>

        </Grid>
      </CardContent>
      <CardActions>
        {mode==='add' &&
        <Button size="large" variant="contained" color="primary" onClick={onAdd}>Save</Button>
        }
        {mode==='edit' &&
        <Button size="large" variant="contained" color="primary" onClick={onEdit}>Edit</Button>
        }
        {mode==='edit' &&
        <Button size="large" variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
        }
      </CardActions>
    </Card>
    )
}

ObieeItemApprole.propTypes ={
    mode: PropTypes.oneOf(['add','edit']).isRequired,
}
