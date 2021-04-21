import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    color: (props) => (props.color === 'primary' ? 'dodgerblue' : 'black'),
  },
});

const StyledButton = (props) => {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
};

const AdaptProps = () => {
  return (
    <div>
      <h1>ADAPT PROPS</h1>
      <StyledButton color="primary">클릭</StyledButton>
    </div>
  );
};

export default AdaptProps;
