import uuid from 'uuid/v1';

const initialState = {
  courses: [
    {
      title: "Biology in Amharic",
      preparedBy: "",
      teacher: "Abebe",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
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
      preparedBy: "",
      teacher: "Girma",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
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
      preparedBy: "",
      teacher: "Fekede",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
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
      id: 3
    },
    {
      title: 'Chemistry in Amharic',
      preparedBy: "",
      teacher: "Trusew",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [
        
      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: '/images/products/product_4.png',
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
      id: 4
    },
    {
      title: 'Business English',
      preparedBy: "",
      teacher: "Abebe",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [
        
      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: '/images/products/product_5.png',
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
      id: 5
    },
    {
      title: 'Maths in Amharic',
      preparedBy: "",
      teacher: "Abebe",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [
        
      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: '/images/products/product_6.png',
      enrolledStudents: 0,
      description: "",
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
      id: 6
    }
  ],

  isCourseUpdated: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case 'GET_COMMENTS':
    //     return {
    //         ...state,
    //         comments: [...state.comments]
    //         // value: action.payload
    //     };
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