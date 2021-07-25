import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, Tooltip, Hidden } from '@material-ui/core';
import BgImagesDialog from './BgImagesDialog';
import Axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DoneIcon from '@material-ui/icons/Done';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../../redux/user'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    backgroundColor: '#2e353f',
    marginBottom: 20
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '-150px'
  },
  responsiveAvatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '-210px'
  },
  avatar: {
    textAlign: 'center',
    width: 170,
    height: 170
  },
  responsiveAvatar: {
    width: 300,
    height: 300
  },
  titleStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '30px'
  },
  responsiveTitleStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '60px'
  },
  fontStyle: {
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 0
  },
  jobTitle: {
    marginTop: 30,
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  responsiveJobTitle: {
    marginTop: 30,
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px',
    marginBottom: '-20px'
  },
  fontStyleSlack: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: '-15px',
    fontSize: 18,
    fontWeight: 300
  },
  sideSpace: {
    marginRight: 20,
    marginLeft: 10,
    fontWeight: 300
  },
  responsiveSideSpace: {
    marginRight: 20,
    marginLeft: 10,
    fontWeight: 300,
    fontSize: '28px',
    color: '#fff'
  },
  bioContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  bio: {
    width: '80%',
    lineHeight: '18px',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 300,
    marginTop: 5,
    marginBottom: 15
  },
  responsiveBio: {
    width: '90%',
    fontSize: '28px',
    color: '#fff',
    marginTop: 20,
    marginBottom: 20
  },
  editButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10,
    color: 'pink'
  },
  logoContainer: {
    display: 'flex'
  },
  logos: {
    marginRight: 8,
    height: '22px',
    width: '22px',
    filter: 'invert(48%) sepia(79%) saturate(0%) hue-rotate(86deg) brightness(148%) contrast(119%)'
  },
  responsiveLogos: {
    marginRight: 8,
    height: '34px',
    width: '35px',
    filter: 'invert(48%) sepia(79%) saturate(0%) hue-rotate(86deg) brightness(148%) contrast(119%)'
  },
  topIcon: {
    fontSize: '20px',
    marginRight: 0,
    position: 'relative',
    top: '4px'
  },
  responsiveTopIcon: {
    fontSize: '30px',
    marginRight: 0,
    position: 'relative',
    top: '4px'
  },
  bgWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  backgroundEditButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 0,
    marginRight: 10,
    position: 'relative',
    top: 10
  },
  responsiveBackgroundEditButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 0,
    marginRight: 10,
    position: 'relative',
    top: 480,
  },
  bgImg: {
    marginTop: '-60px'
  },
  responsiveBgImg: {
    marginTop: '-70px'
  },
  paperWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%'
  },
  paper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2e353f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  skillLogo: {
    width: 50,
    height: 50,
    margin: '15px 20px',
    flexWrap: 'wrap',
  },
  responsiveSkillLogo: {
    width: 100,
    height: 100,
    margin: '30px 35px',
    flexWrap: 'wrap',
  },
  cityContainer: {
    display: 'flex',
  },
  editSlackButton: {
    position: 'relative',
    left: '97%',
    top: 20
  },
  responsiveEditSlackButton: {
    position: 'relative',
    left: '95%',
    top: 60
  },
  trial: {
    color: 'red'
  }
});


export default function TopCard() {
  const classes = useStyles();

  const [skillsData, setSkillsData] = useState([])
  const [openImagesDialog, setOpenImagesDialog] = useState(false);
  const [showEditSkills, setShowEditSkills] = useState(false)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Axios.get('/data/skills.json')
      .then((response) => {
        setSkillsData(response.data);
      });
  }, [])

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [info, setInfo] = useState({
    name: user.info.name,
    email: user.info.email,
    phone: user.info.phone,
    bio: user.info.bio,
    img: user.info.img,
    city: user.info.city,
    linkedin: user.info.linkedin,
    github: user.info.github,
    job: user.jobPreferences.job,
    bgimg: user.info.bgimg,
    stack: user.info.stack,
    openToWork: user.jobPreferences.openToWork,
    skills: user.info.skills,
    userPoints: user.info.userPoints,
    userRankPosition: user.info.userRankPosition
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(info))
    handleClose();
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleImagesDialogOpen = () => {
    setOpenImagesDialog(true);
  };
  const handleImagesDialogClose = () => {
    setOpenImagesDialog(false);
  };
  const handleEditSkills = () => {
    setShowEditSkills(!showEditSkills)
  }
  const handleSubmittedStack = () => {
    dispatch(setUserInfo({ ...user.info, stack: info.stack }))
    handleEditSkills()
  }
  const updateList = (inputs) => {
    setInfo({ ...info, stack: inputs })
  }

  return (
    <>
      <Card className={classes.root}>
        <div className="bgWrapper">
          <div className={!matches ? classes.backgroundEditButton : classes.responsiveBackgroundEditButton}  >
            <IconButton aria-label="edit" onClick={() => handleImagesDialogOpen()}>
              <EditIcon fontSize={!matches ? 'medium' : 'large'} />
            </IconButton></div>
          <CardMedia
            component="img"
            alt="User Background"
            height={!matches ? 300 : 550}
            image={user.info.bgimg}
            title="User Background"
            className={!matches ? classes.bgImg : classes.responsiveBgImg}
          /></div>
        <BgImagesDialog open={openImagesDialog} handleClose={handleImagesDialogClose} />
        <div className={classes.editButton} >
          <IconButton onClick={handleClickOpen}>
            <EditIcon fontSize={!matches ? 'medium' : 'large'} />
          </IconButton></div>
        <div className={!matches ? classes.avatarContainer : classes.responsiveAvatarContainer}><Avatar className={!matches ? classes.avatar : classes.responsiveAvatar} alt="Remy Sharp" src={user.info.img} /></div>
        <CardContent>
          <Typography className={!matches ? classes.titleStyle : classes.responsiveTitleStyle} gutterBottom  >
            {user.info.name}
          </Typography>
          <div className={classes.fontStyle}>
            <Typography component="p" className={!matches ? classes.sideSpace : classes.responsiveSideSpace}  >
              <MailOutlineIcon className={!matches ? classes.topIcon : classes.responsiveTopIcon} /> {user.info.email}
            </Typography>
            <Typography component="p" className={!matches ? classes.sideSpace : classes.responsiveSideSpace} >
              <PhoneIphoneIcon className={!matches ? classes.topIcon : classes.responsiveTopIcon} />  {user.info.phone}
            </Typography>
          </div>
          <div className={classes.bioContainer}>
            <Typography component="p" align="center" className={!matches ? classes.bio : classes.responsiveBio} >
              {user.info.bio}
            </Typography>
          </div>
          <div className={classes.fontStyle}>
            <div className={classes.logoContainer}>
              {(user.info.linkedin) !== '' ? <a href={user.info.linkedin}><img className={!matches ? classes.logos : classes.responsiveLogos} src={`${process.env.PUBLIC_URL}/images/linkedin.svg`} alt='linkedin logo' /></a> : <div></div>}
              {(user.info.github) !== '' ? <a href={user.info.github}><img className={!matches ? classes.logos : classes.responsiveLogos} src={`${process.env.PUBLIC_URL}/images/github.svg`} alt='github logo' /></a> : <div></div>}
            </div>
            <Typography component="p" className={!matches ? classes.sideSpace : classes.responsiveSideSpace}>
              Última conexión hace 2hs
            </Typography>
            <div className={classes.cityContainer}>
              <LocationOnOutlinedIcon className={!matches ? classes.logos : classes.responsiveLogos} />
              <Typography className={!matches ? '' : classes.responsiveSideSpace}>
                {user.info.city}
              </Typography>
            </div>
          </div>
          <Typography variant='h5' className={!matches ? classes.jobTitle : classes.responsiveJobTitle}>
            {!user.jobPreferences.openToWork ? <p> {user.info.job} </p> : `Buscando trabajo de: ${user.jobPreferences.job}`}
          </Typography>
          <CardContent>
            <Hidden xlDown={showEditSkills}> <IconButton className={!matches ? classes.editSlackButton : classes.responsiveEditSlackButton} onClick={() => handleEditSkills()}><EditIcon fontSize={!matches ? 'medium' : 'large'} /></IconButton>
              <Typography component="p" className={!matches ? classes.fontStyleSlack : classes.responsiveSideSpace}>Stack indicado por el usuario:</Typography></Hidden>
            <CardContent >
              <div className={classes.paperWrapper}>
                <Paper elevation={2} className={classes.paper} >
                  <Hidden xlDown={showEditSkills}>
                    {user.info.stack.map((skill, index) => {
                      return (
                        <Tooltip title={skill.name} key={index} arrow>
                          <img src={skill.logo} alt='skill.name' className={!matches ? classes.skillLogo : classes.responsiveSkillLogo} />
                        </Tooltip>
                      )
                    })}
                  </Hidden>
                  <Hidden xlDown={!showEditSkills}>
                    <Autocomplete
                      onChange={(e, v) => updateList(v)}
                      multiple
                      id="tags-outlined"
                      options={skillsData}
                      getOptionLabel={(option) => option.name}
                      defaultValue={info.stack}
                      filterSelectedOptions
                      style={{ width: "100%", padding: 20 }}
                      noOptionsText={''}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          placeholder="Selecciona tus skills"
                          label="Stack"
                        />)}
                    />
                    <IconButton onClick={() => { handleSubmittedStack() }}><DoneIcon /></IconButton>
                  </Hidden>
                </Paper>
              </div>
            </CardContent>
          </CardContent>
        </CardContent>
      </Card>
      <div>
        <Dialog open={open} onClose={handleFormSubmit} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Editar la información del usuario:</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre completo"
              placeholder={user.info.name}
              type="text"
              onChange={e => setInfo({ ...info, name: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Movil"
              placeholder={user.info.phone}
              type="text"
              onChange={e => setInfo({ ...info, phone: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="URL de la imagen de perfil"
              onChange={e => setInfo({ ...info, img: e.target.value })}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              placeholder={user.info.email}
              type="email"
              onChange={e => setInfo({ ...info, email: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Bio"
              placeholder={user.info.bio}
              onChange={e => setInfo({ ...info, bio: e.target.value })}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Github"
              placeholder={user.info.github}
              onChange={e => setInfo({ ...info, github: e.target.value })}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="LinkedIn"
              placeholder={user.info.linkedin}
              onChange={e => setInfo({ ...info, linkedin: e.target.value })}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ciudad"
              placeholder={user.info.city}
              onChange={e => setInfo({ ...info, city: e.target.value })}
              type="text"
              fullWidth
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
      </div>
    </>
  );
}
