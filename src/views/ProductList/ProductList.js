import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { connect } from 'react-redux';
import { handleSetUser } from '../../actions/userAction'; 

import { Classroom } from '../';
import { ProductsToolbar, ProductCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
}));

const ProductList = (props) => {
  const classes = useStyles();

  const [products, setProducts] = useState(props.courseList);
  const [userRole, setUserRole] = useState("Teacher");

  useEffect(() => {
    if(props.isCourseUpdated){
      setProducts(props.courseList)
    }
    props.handleSetUser(props.userId);
  })

  return (
    <div className={classes.root}>
      <ProductsToolbar 
        userRole={userRole}
      />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard 
                course={product}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  courseList: state.courseList.courses,
  isCourseUpdated: state.courseList.isCourseUpdated,
  userId: state.auth.userId,
  // isUserLoaded: state.currentUser.isUserFetched,
});

export default connect(mapStateToProps, { handleSetUser })(ProductList);
