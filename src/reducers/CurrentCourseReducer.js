const initialState = {
  course: {
      id: 56,
      title: 'Biology in Amharic',
      rating: 5,
      time: 8,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ',
      imageUrl: '/images/products/product_5.png',
      totalDownloads: '835',
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
        {
          id: 3,
          title: 'push and pull',
          video: 'https://www.youtube.com/watch?v=c2Kf-rXI_pk',
          order: 3
        },
        {
          id: 4,
          title: 'rebasing and stashing',
          video: 'https://www.youtube.com/watch?v=GbECT1J9bXg',
          order: 4
        },
        {
          id: 5,
          title: 'create branch',
          video: 'https://www.youtube.com/watch?v=VGosZWBTF7A',
          order: 5
        },
        {
          id: 6,
          title: 'delete branch',
          video: 'https://www.youtube.com/watch?v=gDqGSmTPtOQ',
          order: 6
        },
        {
          id: 7,
          title: 'delete repository',
          video: 'https://www.youtube.com/watch?v=5dZ_lvDgevk',
          order: 7
        }
    
      ]
    },
  
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
    default:
      return state;
  }
}