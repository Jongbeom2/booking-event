import React, { useState, useContext}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreatorInfoDialog from '../components/CreatorInfoDialog';
import AuthContext from '../context/authContext';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2)
  },
}));

function Event(props) {
  const { token} = useContext(AuthContext);
  const classes = useStyles();
  const {id, title, price, description, date, creator} = props;
  const [open, setOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleBtnBooking = async () => {
    const requestBody = {
      query: `
        mutation{
          bookEvent(eventId:"${id}"){
            _id
          }
        }
      `
    };
    try {
      const result = await axios({
        url:'/graphql',
        method: 'POST',
        data: requestBody,
        headers: {
        'Authorization': `Bearer ${token}`,
        },
      });
      if(!result.data.data){
        throw new Error('Booking Failed');
      }
      alert('Booking Succeed');
    } catch (err) {
      alert('Booking Failed');
      console.log(err);
    }
  }
  return (
    <div>
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant ="h4" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant ="h6">
          Created By : {creator.email}
        </Typography>
        <Typography variant ="h6" gutterBottom>
          Price : {price}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Date : {date}
        </Typography>
        <Typography variant="body2" >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary"size="small" onClick ={handleBtnBooking}>Book</Button>
        <Button color="primary"size="small" onClick = {handleDialogOpen}>Creator Info</Button>
      </CardActions>
    </Card>
    <CreatorInfoDialog handleClose={handleDialogClose} open={open} creator = {creator} />
    </div>
  );
}
export default Event;