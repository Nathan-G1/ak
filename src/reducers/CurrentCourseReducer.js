const initialState = {
  course: {
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
      rating: 5,
      totalDownloads: 22,
      updatedAt: "2020-08-07T15:48:33.322Z",
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: [
        ""
      ],
      objectives: [
        ""
      ],
      id: "5"
    },

    lectureVideos: [
      {
        url: 'https://youtu.be/juxyvqiOMfY',
        title: 'create repository',
        description: "application",
        courseId: "5f3176854262d10017f033b9",
        videoLength: 0,
        materials: "",
        part: 1,
        id: "",
      },
      {
        url: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
        title: 'cloning a repository',
        description: "application",
        courseId: "5f3176854262d10017f033b9",
        videoLength: 0,
        materials: "",
        part: 2,
        id: "",
      },
      {
        url: 'https://www.youtube.com/watch?v=c2Kf-rXI_pk',
        title: 'push and pull',
        description: "application",
        courseId: "5f3176854262d10017f033b9",
        videoLength: 0,
        materials: "",
        part: 3,
        id: "",
      }
    ]
  
}


export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_COURSE_VIDEOS':
      return {
        ...state,
        value: action.payload
      };

    case 'GET_COURSE':
      return {
        ...state,
        course: action.state.courseList.courses.filter((c) => c.id === action.id)[0],
      };

    // case 'persist/REHYDRATE':
    //   return {
    //       ...state,
    //       course: action.payload.currentCourse.course
    //   };
    default:
      return state;
  }
}