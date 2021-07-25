import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography, Box } from '@material-ui/core';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import { ResponsiveRadar } from '@nivo/radar'
import { useSelector } from 'react-redux'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        backgroundColor: '#2e353f',
        marginBottom: 20,
        color: '#fff'
    },
    scoreWrapper: {
        backgroundColor: '#001',
        width: '25%',
        height: 37,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        color: '#fff'
    },
    responsiveScoreWrapper: {
        backgroundColor: '#001',
        width: '35%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        color: '#fff',
    },
    responsiveScoreFont: {
        fontSize: '25px',
        marginLeft: 10
    },
    container: {
        marginTop: 20
    },
    bottomCardTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleStyleSkills: {
        fontSize: '20px',
        marginBottom: 10,
        marginTop: '20px',
        textAlign: 'center'
    },
    responsiveTitleStyleSkills: {
        fontSize: '38px',
        marginBottom: 10,
        marginTop: '20px',
        textAlign: 'center'
    },
    responsiveSubTitleStyleSkills: {
        fontSize: '30px',
        marginBottom: 10,
        marginTop: '20px',
        textAlign: 'center'
    },
    titleStyle4: {
        fontSize: '20px',
        marginBottom: 0,
        marginTop: '30px'
    },
    subTitle: {
        fontSize: '18px',
        marginBottom: 10,
        marginTop: '15px',
        textAlign: 'center'
    },
    radarContainer: {
        height: 400,
        width: 800
    },
    hardSkillsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '82%'
    },
    otherHardSkillsContainer: { // Contenedor de toda la seccion
        height: '100%',
        width: '100%',
    },
    otherHardSkillsWrapper: { // Contenedor del grupo de otras skills
        height: '100%',
        witdth: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    otherSkillCointainer: { // Contenedor de la skill en sí
        backgroundColor: '#161a1f',
        height: '100%',
        width: '12%',
        margin: '10px 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px'
    },
    otherSkillCointanerImg: {
        width: 40,
        height: 40
    },
    other: {
        marginTop: '-10px'
    }
});

const BottomCard = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const colorGreen = "#6AB972";
    const color2 = '#fcc749';

    const user = useSelector((store) => store.user)

    const MyResponsiveRadar = (data, color) => (
        <ResponsiveRadar
            data={data}
            theme={{

                "textColor": "#ffffff",
                "fontSize": 15,
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 2
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": "#e0e0e0",
                        "strokeWidth": 1
                    }
                }
            }}
            keys={['points']}
            indexBy="name"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={color}
            gridLevels={5}
            gridShape="linear"
            gridLabelOffset={40}
            color='white'
            enableDots={true}
            dotSize={5}
            dotColor={color}
            dotBorderWidth={5}
            dotBorderColor={color}
            enableDotLabel={true}
            dotLabelYOffset={-12}
            dotLabelXOffset={8}
            colors={color}
            fillOpacity={0.6}
            blendMode="normal"
            animate={false}
            motionConfig="wobbly"
            isInteractive={false}
        />)
        
    const getTopSkills = (skills) => {
        return skills.sort((a, b) => b.points - a.points);
    }

    const topHardSkills = getTopSkills(user.info.skills.hardSkills);
    const topSoftSkills = getTopSkills(user.info.skills.softSkills);

    const anotherHardSkills = (topHardSkills) => {
        if (topHardSkills.length > 5) {
            const otherHardSkills = topHardSkills.slice(5, topHardSkills.length);
            return otherHardSkills.map((skill, index) => {
                return (<div className={classes.otherSkillCointainer} key={index}>
                    <p>{skill.name}</p>
                    <p className={classes.other}>{skill.points} pts</p>
                    <div><img className={classes.otherSkillCointanerImg} src={skill.logo} alt={skill.name} /></div>
                    <p>Top {skill.top}</p>
                </div>
                )
            })
        }
    }

    return (
        <>
            <div className={classes.container}>
                <Card className={classes.root}>
                    <div className={classes.bottomCardTitle}>
                        <Typography className={!matches ? classes.titleStyleSkills : classes.responsiveTitleStyleSkills}>Perfil válidado en Nuwe de {user.info.name}</Typography>
                        <Card className={!matches ? classes.scoreWrapper : classes.responsiveScoreWrapper}><AssessmentOutlinedIcon />
                            <Typography className={!matches ? '' : classes.responsiveScoreFont} >{user.info.userRankPosition} / 2500u | {user.info.userPoints} pts</Typography>
                        </Card>
                    </div>
                    <div className={classes.hardSkillsWrapper}>
                        <div className={classes.titleWrapper}>
                            <Typography className={!matches ? classes.titleStyle4 : classes.responsiveSubTitleStyleSkills} align='left'>Hard Skills validadas en NUWE</Typography>
                        </div>
                        <Box borderColor="#595a5c" border={1} borderRadius={15} padding={2} >
                            <div>
                                <Typography className={!matches ? classes.subTitle : classes.responsiveSubTitleStyleSkills}>Top 5 Hard Skills de {user.info.name}</Typography>
                            </div>
                            <div className={classes.radarContainer}>
                                {MyResponsiveRadar(topHardSkills.length > 5 ? topHardSkills.slice(0, 5) : topHardSkills, colorGreen)}
                            </div>
                            <div className={classes.otherHardSkillsContainer}>
                                <Typography className={!matches ? classes.titleStyleSkills : classes.responsiveSubTitleStyleSkills}>Otras Hard Skills Validadas</Typography>
                                <div className={classes.otherHardSkillsWrapper}>
                                    {anotherHardSkills(user.info.skills.hardSkills)}
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className={classes.hardSkillsWrapper}>
                        <div className={classes.titleWrapper}>
                            <Typography className={!matches ? classes.titleStyle4 : classes.responsiveSubTitleStyleSkills} align='left'>Soft Skills validadas en NUWE</Typography>
                        </div>
                        <Box borderColor="#595a5c" border={1} borderRadius={15} padding={2} marginBottom={7} >
                            <div>
                                <Typography className={!matches ? classes.subTitle : classes.responsiveSubTitleStyleSkills}>Puntuaciones obtenidas en los retos grupales</Typography>
                            </div>
                            <div className={classes.radarContainer}>
                                {MyResponsiveRadar(topSoftSkills.length > 5 ? topSoftSkills.slice(0, 5) : topSoftSkills, color2)}
                            </div></Box></div>
                </Card>
            </div>
        </>
    )
}

export default BottomCard;