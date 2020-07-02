import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { addCourse } from '../../../../actions/courseAction';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Input,
  Avatar
} from '@material-ui/core';
import ReactPlayer from 'react-player'


const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none'
  },
  avatar: {
    marginRight: 'auto',
    height: 60,
    width: 60,
    flexShrink: 0,
    flexGrow: 0
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AddCourseForm = props => {
  const { className, handleClose, ...rest } = props;
  const [isCourseAdded, setIsCourseAdded] = useState(false);

  // useEffect(() => {
  //   if(isCourseUpdated){}
  // })
  const classes = useStyles();

  const [values, setValues] = useState({
    courseTitle: 'Version Control',
    courseCategory: 'Introduction',
    courseImage: '/images/products/product_5.png',
    courseObjective: '',
    courseDescription: 'ET'
  });

  const handleSubmit = event => {
    event.preventDefault();
    const course = {
      id: 12,
      title: values.courseTitle,
      rating: 0,
      time: 3,
      description: values.courseDescription,
      imageUrl: '/images/products/product_1.png',
      totalDownloads: '0',
      updatedAt: '27/03/2019',
      preparedBy: "",
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: []
    }

    props.addCourse(course);
    setIsCourseAdded(true);
  }

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const categories = [
    {
      value: 'Introduction',
      label: 'Introduction'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <CardHeader
          subheader="The information can be edited later"
          title="Course"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <Avatar
                className={classes.avatar}
                src={values.courseImage}
              />
              <Button
                className={classes.uploadButton}
                color="primary"
                variant="text"
              >
                Upload Image
              </Button>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the course title"
                label="Course title"
                margin="dense"
                name="courseTitle"
                onChange={handleChange}
                required
                value={values.courseTitle}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select category"
                margin="dense"
                name="courseCategory"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.courseCategory}
                variant="outlined"
              >
                {categories.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>


            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Course objective"
                margin="dense"
                name="courseObjective"
                onChange={handleChange}
                required
                value={values.courseObjective}
                variant="outlined"
              />

            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Course description"
                margin="dense"
                name="courseDescription"
                multiline
                rows='3'
                rowsMax='10'
                onChange={handleChange}
                required
                value={values.courseDescription}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            type='submit'
            onClick={() => handleClose()}
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddCourseForm.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps, { addCourse })(AddCourseForm);
