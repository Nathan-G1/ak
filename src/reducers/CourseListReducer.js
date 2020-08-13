import uuid from 'uuid/v1';

const initialState = {
  courses: [
    {
      title: "Biology in Amharic",
      preparedBy: "Abebe",
      instructorPhoto: '/images/avatars/avatar_11.png',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [

      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: '/images/products/product_1.png',
      enrolledStudents: 1222,
      description: "is a web-based hosting service for version control o",
      categoryId: "",
      rating: 0,
      totalDownloads: 0,
      updatedAt: "2020-08-07T15:48:33.322Z",
      whatToLearn: [
        ""
      ],
      about: "",
      requirements: [
        ""
      ],
      objectives: [
        ""
      ],
      id: 1
    },
    {
      title: 'Customers or Buyers Expressions',
      preparedBy: "Girma",
      instructorPhoto: '/images/avatars/avatar_11.png',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [

      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: '/images/products/product_2.png',
      enrolledStudents: 0,
      description: "is a web-based hosting service for version control o",
      categoryId: "",
      rating: 0,
      totalDownloads: 0,
      updatedAt: "2020-08-07T15:48:33.322Z",
      whatToLearn: [
        ""
      ],
      about: "",
      requirements: [
        ""
      ],
      objectives: [
        ""
      ],
      id: 2
    },
    {
      title: 'English for Beginners',
      preparedBy: "Fekede",
      instructorPhoto: '/images/avatars/avatar_11.png',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [

      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: '/images/products/product_3.png',
      enrolledStudents: 0,
      description: "is a web-based hosting service for version control o",
      categoryId: "",
      rating: 0,
      totalDownloads: 0,
      updatedAt: "2020-08-07T15:48:33.322Z",
      whatToLearn: [
        ""
      ],
      about: "",
      requirements: [
        ""
      ],
      objectives: [
        ""
      ],
      id: "5f3176854262d10017f033b9"
    }
  ],

  isCourseUpdated: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_COURSES':
      return {
        ...state,
        courses: action.courseList,
        isCourseUpdated: true
      }

    case 'persist/REHYDRATE':
      if (action.payload.courseList) {
        return {
          ...state,
          courses: action.payload.courseList.courses,
          // isCourseUpdated: action.payload.courseList.isCourseUpdated,
        };
      }

    // case 'COURSE_FETCHED':
    //   return{
    //     ...state,
    //     isCourseUpdated: false
    //   }

    case 'SIGN_OUT':
      return{
        ...state,
        isCourseUpdated: false
      }
    case 'GET_COURSE':
      return {
        ...state,
        course: action.state.currentCourse.course.videos.filter((v) => v.id === action.id)[0],
      }
    case 'ADD_COURSE':
      return {
        ...state,
        courses: state.courses.concat(action.payload),
        isCourseUpdated: true
      }
    default:
      return state;
  }
}