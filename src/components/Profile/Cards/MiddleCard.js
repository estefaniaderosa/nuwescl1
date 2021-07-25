import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Hidden, IconButton, TextField, Button, DialogActions } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { setUserJobPreferences } from '../../../redux/user'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        backgroundColor: '#2e353f'
    },
    formControl: {
        margin: 11,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: 10,
    },
    jobTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '20px',
        marginBottom: 10,
        marginTop: '-40px'
    },
    responsiveJobTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 300,
        marginBottom: 30,
        marginTop: '-40px'
    },
    fontStyle: {
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    responsiveFontStyle: {
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    select: {
        width: 400
    },
    font: {
        marginRight: 20
    },
    responsiveFont: {
        marginRight: 20,
        fontSize: '30px'
    },
    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    editButtonSlack: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    responsiveEditButtonSlack: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'relative',
        top: 0,
        right: 5,
        margin: '10px 20px 20px 10px'
    },
    subtitle: {
        color: '#fff',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 30
    },
    icon: {
        position: 'relative',
        top: '3px',
        fontSize: '20px'
    },
    responsiveIcon: {
        position: 'relative',
        top: '3px',
        fontSize: '35px',
        marginRight: 10
    },
});

export default function MiddleCard() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user)

    const [jobPreferences, setJobPreferences] = useState({
        jobCity: user.jobPreferences.jobCity,
        typeOfCompany: user.jobPreferences.typeOfCompany,
        salary: user.jobPreferences.salary,
        travel: user.jobPreferences.travel,
        remote: user.jobPreferences.remote,
        incoorporation: user.jobPreferences.incoorporation,
        openToWork: user.jobPreferences.openToWork,
        job: user.jobPreferences.job
    });

    const [hidden, setHidden] = useState(jobPreferences.remote);
    const [hidden2, setHidden2] = useState(jobPreferences.travel);
    const [hidden3, setHidden3] = useState(jobPreferences.incoorporation);
    const [open2, setOpen2] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserJobPreferences(jobPreferences)); //envio la info al store global de redux
        handleClose();
    }
    const handleClickOpen = () => {
        setOpen2(true);
    };
    const handleClose = () => {
        setOpen2(false);
    };
    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };
    const handleHidden2Change = (event) => {
        setHidden2(event.target.checked);
    };
    const handleHidden3Change = (event) => {
        setHidden3(event.target.checked);
    };
    const handleOpenToWork = (event) => {
        setJobPreferences({ ...jobPreferences, openToWork: event.target.checked })
    }

    return (
        <Card className={classes.root}>
            <div className={!matches ? classes.editButtonSlack : classes.responsiveEditButtonSlack}> <IconButton onClick={() => handleClickOpen()}> <EditIcon fontSize={!matches ? 'medium' : 'large'} /> </IconButton></div>
            <CardContent>
                {!jobPreferences.openToWork && <h2 className={classes.subtitle}> {user.info.name} no esta buscando trabajo  </h2>}
                <Hidden xlDown={!jobPreferences.openToWork}>
                    <Typography className={!matches ? classes.jobTitle : classes.responsiveJobTitle}> Sobre el puesto que busca {user.info.name}</Typography>
                    <div className={!matches ? classes.fontStyle : classes.responsiveFontStyle}>
                        <Typography component="p" className={!matches ? classes.font : classes.responsiveFont} >
                            <LocationOnOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} />  {user.jobPreferences.jobCity}
                        </Typography>
                        <Typography component="p" className={!matches ? classes.font : classes.responsiveFont}  >
                            <BusinessOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> {user.jobPreferences.typeOfCompany}
                        </Typography>
                        <Typography component="p" className={!matches ? '' : classes.responsiveFont} >
                            {user.jobPreferences.salary} <EuroOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} />
                        </Typography>
                    </div>
                    <div className={!matches ? classes.fontStyle : classes.responsiveFontStyle} >
                        {hidden ? <Typography component="p" className={!matches ? classes.font : classes.responsiveFont}  > <ExploreOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> Con disponibilidad para traslado </Typography> : <Typography component="p" className={!matches ? classes.font : classes.responsiveFont} > <ExploreOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> Sin disponibilidad para traslado </Typography>}
                        {hidden2 ? <Typography component="p" className={!matches ? classes.font : classes.responsiveFont}  ><LanguageOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> Con disponibilidad para trabajo en remoto </Typography> : <Typography component="p" className={!matches ? classes.font : classes.responsiveFont}  > <LanguageOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> Sin disponibilidad para trabajo en remoto </Typography>}
                        {hidden3 ? <Typography component="p" className={!matches ? classes.font : classes.responsiveFont}  ><CalendarTodayOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> Incorporación Inmediata </Typography> : <Typography component="p" className={!matches ? classes.font : classes.responsiveFont}  > <CalendarTodayOutlinedIcon className={!matches ? classes.icon : classes.responsiveIcon} /> Incorporación a definir </Typography>}
                    </div>
                </Hidden>
                <Dialog open={open2} onClose={handleFormSubmit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Información Sobre el puesto de trabajo:</DialogTitle>
                    <DialogContent>
                        <FormControlLabel
                            control={<Switch checked={jobPreferences.openToWork} onChange={handleOpenToWork} color="primary" />}
                            label={jobPreferences.openToWork ? 'Esta buscando trabajo' : 'No esta buscando empleo'} 
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="puesto"
                            label="Puesto de Trabajo"
                            placeholder={user.jobPreferences.job}
                            type="text"
                            onChange={e => setJobPreferences({ ...jobPreferences, job: e.target.value })}
                            fullWidth
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="city"
                            label="Donde"
                            placeholder={user.jobPreferences.jobCity}
                            type="text"
                            onChange={e => setJobPreferences({ ...jobPreferences, jobCity: e.target.value })}
                            fullWidth
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="typeOfCompany"
                            label="Tipo de Empresa"
                            placeholder={user.jobPreferences.typeOfCompany}
                            type="text"
                            onChange={e => setJobPreferences({ ...jobPreferences, typeOfCompany: e.target.value })}
                            fullWidth
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="salary"
                            label="Salario deseado"
                            placeholder={user.jobPreferences.salary}
                            onChange={e => setJobPreferences({ ...jobPreferences, salary: e.target.value })}
                            type="text"
                            fullWidth
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                        <FormControlLabel
                            control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />}
                            label={hidden ? 'Con disponibilidad de traslado' : 'Sin disponibilidad de traslado'}
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                        <FormControlLabel
                            control={<Switch checked={hidden2} onChange={handleHidden2Change} color="primary" />}
                            label={hidden2 ? 'Con disponibilidad de trabajo remoto' : 'Sin disponibilidad de trabajo remoto'}
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                        <FormControlLabel
                            control={<Switch checked={hidden3} onChange={handleHidden3Change} color="primary" />}
                            label={hidden3 ? 'Incorporación Inmediata' : 'Incorporación a definir'}
                            disabled={jobPreferences.openToWork ? false : true}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="default">
                            Cancelar
                        </Button>
                        <Button onClick={handleFormSubmit} color="default">
                            Guardar
                        </Button>
                    </DialogActions>
                </Dialog>
            </CardContent>
        </Card>
    );
}
