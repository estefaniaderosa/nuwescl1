import {
  ImageList,
  ImageListItem,
  makeStyles
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../../redux/user'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));

const BgImages = ({ result }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.info)

  const chooseBgImg = (bgimg) => {
    dispatch(setUserInfo({ ...user, bgimg }))
  }

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {result.map((item, index) => (
          <ImageListItem key={index} cols={item.cols || 1}>
            <img src={item.urls.regular} alt={item.alt_description} onClick={() => chooseBgImg(item.urls.regular)} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default BgImages;