const SET_INFO = "SET_INFO";
const SET_JOB_PREFERENCES = "SET_JOB_PREFERENCES";

const INITIAL_STATE = {
  info: {
    name: 'Estefanía De Rosa',
    email: 'estefania@gmail.com',
    phone: '+34 654321123',
    bio: ' Hi Im Estefanía 👋, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 👩🏻‍💻. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 🙌. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    img: 'https://i.pinimg.com/750x/0e/90/c6/0e90c6b1e82c57fd30f932b2898b1949.jpg',
    city: 'Madrid, España',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    job: 'Fullstack Senior',
    userRankPosition: '20',
    userPoints: '4250',
    bgimg: 'https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1981&q=80',
    stack: [
      {
        "name": "HTML5",
        "logo": "https://cdn.svgporn.com/logos/html-5.svg"
      },
      {
        "name": "CSS3",
        "logo": "https://cdn.svgporn.com/logos/css-3.svg"
      },
      {
        "name": "Sass",
        "logo": "https://cdn.svgporn.com/logos/sass.svg"
      },
      {
        "name": "JavaScript",
        "logo": "https://cdn.svgporn.com/logos/javascript.svg"
      },
      {
        "name": "React",
        "logo": "https://cdn.svgporn.com/logos/react.svg"
      },
      {
        "name": "Redux",
        "logo": "https://cdn.svgporn.com/logos/redux.svg"
      },
      {
        "name": "NextJS",
        "logo": "https://cdn.svgporn.com/logos/nextjs-icon.svg"
      },
      {
        "name": "NodeJS",
        "logo": "https://cdn.svgporn.com/logos/nodejs-icon.svg"
      },
      {
        "name": "MYSQL",
        "logo": "https://cdn.svgporn.com/logos/mysql.svg"
      },
      {
        "name": "Angular",
        "logo": 'https://cdn.svgporn.com/logos/angular-icon.svg'
      }
    ],
    skills: {
      hardSkills: [{
        "name": "React",
        "logo": "https://cdn.svgporn.com/logos/react.svg",
        points: 800,
        top: '10%'
      }
        ,
      {
        "name": "NodeJS",
        "logo": "https://cdn.svgporn.com/logos/nodejs-icon.svg",
        points: 200,
        top: '10%'
      },


      {
        "name": "MongoDB",
        "logo": "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        points: 160,
        top: '10%'
      },
      {
        "name": "JavaScript",
        "logo": "https://cdn.svgporn.com/logos/javascript.svg",
        points: 1000,
        top: '10%'
      },
      {
        "name": "CSS3",
        "logo": "https://cdn.svgporn.com/logos/css-3.svg",
        points: 600,
        top: '10%'
      },
      {
        "name": "HTML5",
        "logo": "https://cdn.svgporn.com/logos/html-5.svg",
        points: 700,
        top: '10%'
      },
      {
        "name": "SASS",
        "logo": "https://cdn.svgporn.com/logos/sass.svg",
        points: 190,
        top: '10%'
      }, {
        "name": "Redux",
        "logo": "https://cdn.svgporn.com/logos/redux.svg",
        points: 600,
        top: '10%'
      }],
      softSkills: [
        {
          "name": "Teamwork",
          "points": 4
        },
        {
          "name": "Capacidad Analítica",
          "points": 5
        },
        {
          "name": "Resolución de Problemas",
          "points": 3
        },
        {
          "name": "Comunicación",
          "points": 2
        },
        {
          "name": "Liderazgo",
          "points": 3
        }
      ]
    }

  },
  jobPreferences: {
    job: 'Fullstack Senior',
    jobCity: 'Madrid, España',
    salary: '15000 a 25000',
    incoorporation: true,
    travel: true,
    remote: true,
    openToWork: true,
    typeOfCompany: 'Startup, Software, Internet, Consultora'
  }
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INFO:
      return { ...state, info: action.payload };
    case SET_JOB_PREFERENCES:
      return { ...state, jobPreferences: action.payload };
    default:
      return state;
  }
};

export const setUserInfo = (payload) => ({
  type: SET_INFO,
  payload
});

export const setUserJobPreferences = (payload) => ({
  type: SET_JOB_PREFERENCES,
  payload
});
