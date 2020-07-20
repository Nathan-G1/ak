import uuid from 'uuid/v1';

const initialState = {
  courses: [
    {
      id: 1,
      title: 'Biology in Amharic',
      rating: 5,
      time: 3,
      description:
        'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      imageUrl: '/images/products/product_1.png',
      totalDownloads: '594',
      updatedAt: '27/03/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: [
        {
          id: 1,
          title: 'create repository',
          video: 'https://youtu.be/juxyvqiOMfY',
          order: 1
        },
        {
          id: 2,
          title: 'cloning a repository',
          video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
          order: 2
        },
      ]
    },
    {
      id: 2,
      title: 'Customers or Buyers Expressions',
      rating: 5,
      time: 8,
      description:
        'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      imageUrl: '/images/products/product_2.png',
      totalDownloads: '625',
      createdAt: '31/03/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: [
        {
          id: 1,
          title: 'create repository',
          video: 'https://youtu.be/juxyvqiOMfY',
          order: 1
        },
        {
          id: 2,
          title: 'cloning a repository',
          video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
          order: 2
        },
      ]
    },
    {
      id: 3,
      title: 'English for Beginners',
      rating: 5,
      time: 9,
      description:
        'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
      imageUrl: '/images/products/product_3.png',
      totalDownloads: '857',
      createdAt: '03/04/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: [
        {
          id: 1,
          title: 'create repository',
          video: 'https://youtu.be/juxyvqiOMfY',
          order: 1
        },
        {
          id: 2,
          title: 'cloning a repository',
          video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
          order: 2
        },
      ]
    },
    {
      id: 4,
      title: 'Chemistry in Amharic',
      rating: 5,
      time: 3,
      description:
        'Lyft is an on-demand transportation company based in San Francisco, California.',
      imageUrl: '/images/products/product_4.png',
      totalDownloads: '406',
      createdAt: '04/04/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: [
        {
          id: 1,
          title: 'create repository',
          video: 'https://youtu.be/juxyvqiOMfY',
          order: 1
        },
        {
          id: 2,
          title: 'cloning a repository',
          video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
          order: 2
        },
      ]
    },
    {
      id: 5,
      title: 'Business English',
      rating: 5,
      time: 8,
      description:
        'GitHub is a web-based hosting service for version control of code using Git.',
      imageUrl: '/images/products/product_5.png',
      totalDownloads: '835',
      createdAt: '04/04/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: [
        {
          id: 1,
          title: 'create repository',
          video: 'https://youtu.be/juxyvqiOMfY',
          order: 1
        },
        {
          id: 2,
          title: 'cloning a repository',
          video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
          order: 2
        },
      ]
    },
    {
      id: 6,
      title: 'Maths in Amharic',
      rating: 5,
      time: 3,
      description:
        'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
      imageUrl: '/images/products/product_6.png',
      totalDownloads: '835',
      createdAt: '04/04/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: [
        {
          id: 1,
          title: 'create repository',
          video: 'https://youtu.be/juxyvqiOMfY',
          order: 1
        },
        {
          id: 2,
          title: 'cloning a repository',
          video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
          order: 2
        },
      ]
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