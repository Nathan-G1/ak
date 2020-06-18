const initialState = {
  title: "",
  preparedBy: "",
  teacher: "",
  length: 0,
  certificate: true,
  icon: "",
  enrolledStudents: 0,
  description: "",
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
}


export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':
      console.log(action.payload);
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}