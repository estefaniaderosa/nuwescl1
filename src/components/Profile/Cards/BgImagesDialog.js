import { useState } from 'react';
import { withStyles, TextField, Button, Dialog, IconButton, Typography } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import BgImages from './BgImages';
import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});

const useStyles = makeStyles({
    formTest: {
        display: 'flex',
    },
    inputStyle: {
        flex: 1,
        margin: 10
    },
    buttonStyle: {
        margin: '10px 10px 10px 0px'
    }
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});


const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const unsplashID = 'SwB1icjw8ZqGq_OxOSlXOqbQRPnWUEan3uhGroiWEvs'

export default function BgImagesDialog({ open, handleClose }) {
    const classes = useStyles();

    const [search, setSearch] = useState('')
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${unsplashID}`

        Axios.get(url)
            .then((response) => {
                setResult(response.data.results.length > 9 ? response.data.results.slice(0, 9) : response.data.results);
            });
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle onClose={handleClose}>
                Imagen de portada
            </DialogTitle>
            <form onSubmit={handleSubmit} className={classes.formTest} >
                <TextField onChange={handleChange} placeholder='Buscar...' variant='outlined' size='small' className={classes.inputStyle} />
                <Button className={classes.buttonStyle} onClick={handleSubmit}>Buscar</Button>
            </form>
            <DialogContent dividers>
                <BgImages result={result} />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="default">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
