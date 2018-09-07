import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Fa } from 'mdbreact';

const projects = [
  {
    title: 'Campaign Manager',
    tagLine: 'A Place for Many Spaces',
    format: 'Cloud-based, IoT Manager',
    mobile: false,
    stack: [
      {name: 'React', url: "https://reactjs.org/docs/hello-world.html"},
      {name: 'Redux', url: 'https://redux.js.org/'},
      {name: 'Redux-Saga', url: 'https://github.com/redux-saga/redux-saga'},
      {name: 'Jest', url: 'https://jestjs.io/'},
      {name: 'Enzyme(Airbnb)', url: 'https://github.com/airbnb/enzyme'},
      {name: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/'},
      {name: 'React-MD', url: 'https://github.com/mlaursen/react-md'},
    ],
    info: 'Campaign Manager was just one of four modules being built for this enterprise. The main focus of the team was to build features that would scale well and would be easy for another developer to pick up and read. By utilizing the most current/tested technologies and libraries, this particular suite of IoT management and deployment tools is ready to scale up to its demand of 50,000 new cloud users within the first year of launch.',
    github: null,
    url: 'http://www.fwicloud.com/',
    photos: ['https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/FWI.png', 'https://s3-us-west-2.amazonaws.com/miked-portfolio-site/clib.png', 'https://s3-us-west-2.amazonaws.com/miked-portfolio-site/clib-tables.png'],
    objectId: 1,
    icon: 'https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/cloud.png',
  },
  {
    title: 'Roofstops',
    tagLine: 'Rooftops Worth the Stop',
    format: 'Mobile iOS, ReactNative',
    mobile: true,
    stack: [ 
      {name:'ReactNative', url:"https://facebook.github.io/react-native/docs/getting-started.html"},
      {name:'Custom API', url:"https://github.com/Roofstops/Roofstops-API"},
      {name:'Native Maps(Airbnb)', url:"https://github.com/react-community/react-native-maps"},
      {name:'OpenWeatherMaps API', url:"https://openweathermap.org/"},
      {name:'ReactNative Elements', url:"https://github.com/react-native-training/react-native-elements"},
      {name:'ReactNative Gesture Handler', url:"https://github.com/kmagiera/react-native-gesture-handler"},
      {name:'ReactNative Phone Call', url:"https://github.com/tiaanduplessis/react-native-phone-call"},
      {name:'ReactNative Tab View', url:"https://github.com/react-native-community/react-native-tab-view"},
      {name:'ReactNative Text Input', url:"https://github.com/halilb/react-native-textinput-effects"},
      {name:'ReactNative Vector Icons', url:"https://github.com/oblador/react-native-vector-icons"},
      {name:'React Navigation', url:"https://github.com/react-community/react-navigation"},
    ],
    info: 'A Mobile app that helps you locate the closest Roof Top bars in your area. When a zip code is entered, a new list of all available rooftops in the area is returned for the user; as well as the local temperature. The list is generated by a custom built API and database. Clicking on a listed item will bring the user to the detailed view, which includes a picture of the venue, the address and a map button link, the hours of operations(both regular and happy), as well as links to their phone numbers and website.',
    github: 'https://github.com/Roofstops/Roofstops',
    url: null,
    photos: ['https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/roofstops-logo-2.png', 'https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/walkthroughcropped.gif',],
    objectId: 2,
    icon: 'https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/roof.png',
  },
  {
    title: 'pHOODz',
    tagLine: 'Match with Hott & Available... Food in your Hood',
    format: 'Mobile iOS, Swift 4',
    mobile: true,
    stack: [
      {name:'Native iOS Swift 4', url:"https://swift.org/"},
      {name:'Xcode 9', url:"https://developer.apple.com/xcode/"},
      {name:'Firebase', url:"https://firebase.google.com/"},
      {name:'GooglePlaces API', url:"https://cloud.google.com/maps-platform/places/"}
    ],
    info: 'I wanted to make this app as user friendly as possible. To do that, I wrote as much "behind the screen" as I could. Thanks to Apple\'s core functionality kits, and Firebase\'s DB capabilities, user interaction is minimal. 1.) Select or Add a Search Query. 2.) Swipe Left for next choice. 3.) Swipe Right for desired choice. 4.) Navigate to destination.',
    github: 'https://github.com/giblerw/pHOODz',
    url: null,
    photos: [],
    objectId: 3,
    icon: 'https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/swift.png',
  },
  {
    title: 'Hall of Recall',
    tagLine: 'Stroll down memory lane',
    format: '2D Game, Web App',
    mobile: false,
    stack: [
      {name: 'JavaScript', url:"https://www.javascript.com/"},
      {name: 'Phaser.io', url:"https://phaser.io/"},
      {name: 'Node.js', url:"https://nodejs.org/en/"},
      {name: 'ExpressJS', url:"https://expressjs.com/"},
      {name: 'PostgreSQL', url:"https://www.postgresql.org/"},
      {name: 'CSS3', url:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"},
      {name: 'HTML5', url:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"},
      {name: 'Bootstrap', url:"https://getbootstrap.com/"}
    ],
    info: 'A game committed to enabling the user to access & utilize a virtual memory palace, thereby directly connecting spatial cues to each point of data. A memory palace is a method of memory enhancement related to spatial memory and familiar environment awareness to quickly recall information. This game is for placing personal memories into a 2D space for improved retention.',
    github: 'https://github.com/giblerw/Hall-of-Recall',
    url: 'https://the-hall-of-recall.herokuapp.com/',
    photos: [],
    objectId: 4,
    icon: 'https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/phaser.png',
  },
  {
    title: 'In a Box',
    tagLine: 'an Email Inbox Clone',
    format: 'Single-Page Web App',
    mobile: 'false',
    stack: [
      {name: 'React', url: "https://reactjs.org/docs/hello-world.html"},
      {name: 'Bootstrap', url: "https://getbootstrap.com/"},
      {name:'Firebase', url:"https://firebase.google.com/"},
    ],
    info: 'This is an email inbox mockup; built using Facebook\'s React Frontend Library. React\'s component based rendering allows a developer to create "Single Page Applications" that are capable of immense complexity, while remaining performant. React\'s encapsulated components make the rendered views declarative; increasing code predictability and easing debugging practices.',
    github: 'https://github.com/giblerw/react-inbox',
    url: 'https://westons-react-inbox.firebaseapp.com/',
    photos: [],
    objectId: 5,
    icon: 'https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/react.png',
  },
];

const NotMobilePictureFrame = ({project}) => (
  <div className="col-lg-4 col-md-6 d-flex flex-lg-column flex-row justify-content-start project-left">
    <div className="col-12 cover_img1 d-flex flex-column justify-content-center">
      <img src={project.photos[0]} atl="project cover" className="img-fluid"/>
    </div>
    <div className="col-12 cover_img2 d-flex flex-column justify-content-center">
      <img src={project.photos[1]} atl="project cover" className="img-fluid"/>
    </div>
  </div>
  )

const MobilePictueFrame = ({project}) => (
  <div className="col-lg-4 col-md-6 d-flex flex-lg-column flex-row justify-content-start project-left">
    <div className="col-12 cover_img_full d-flex flex-row justify-content-center">
      <img src={project.photos[1]} atl="project cover" className="img-fluid"/>
    </div>
  </div>
  )

class Projects extends Component {
  render() {
    return(
      <div className="container-fluid projects_content">
      <span className="row section_header projects_header"><u>Projects</u></span>
      {projects.map(project => {
        const myStack = project.stack;
        const tallScreen = project.mobile;
        return (
          <div className="row project_row d-flex justify-content-around" key={project.objectId}>
            {tallScreen === true ? <MobilePictueFrame project={project} /> : <NotMobilePictureFrame project={project} />}
            <div className="container col-md-8 project-center">
              <strong className="row app_title display-4 dark-title-text">{project.title}</strong>
              <p className="app_subtitle h4-responsive text-muted">"{project.tagLine}"</p>
              <div className="row project_content_row">
                <div className="col-lg-3 col-md-6 col-sm-8 project_content-left d-flex flex-column justify-content-end">

                  <div className="row project_badge flex-row justify-content-end ">
                    <img src={project.icon} alt="content logo" className="img-fluid project_content_logo"/>
                  </div>

                  <div className="row project_info_titles">
                    <Button rounded color="info" block className="pro_butt"><i className="fa fa-photo fa-4x" aria-hidden="true"></i> Visual Gallery</Button>
                  <div className="buffer"></div>
                    {
                      project.github !== null ? 
                          <Button href={project.github} alt="github repo" target="_blank" color="elegant" block className="pro_butt d-flex justify-content-between align-items-end">
                          <i className="fa fa-github fa-2x" aria-hidden="true"></i> Github</Button> : ''
                    }
                    <div className="buffer"></div>
                    {
                      project.url !== null ? 
                          <Button href={project.github} alt="github repo" target="_blank" color="default" block className="pro_butt d-flex justify-content-between align-items-end">
                          <i className="fa fa-chrome fa-2x" aria-hidden="true"></i> Visit Site</Button>: ''
                    }
                    
                  </div>
            
                </div>
                <div className="col-lg-3 col-md-6 project_content-center text-right">
                  <div className="row project_info_titles">
                    <em className="h4-responsive">Tech Stack</em>
                  </div>
                  <ListGroup className="row project_info_content flex-column">
                    {myStack.map(tech => {
                      return(
                        <ListGroupItem href={tech.url} target="_blank" hover className="p-1 d-inline-block text-truncate">
                          {tech.name}
                        </ListGroupItem>
                        )}
                      )}
                  </ListGroup>
                </div>
                <div className="col-lg-6 project_content-right">
                  
                  <div className="row project_info_content">
                    <blockquote className="blockquote light-grey-text">
                      <p className="text-left">{project.info}</p>
                      <p className="bq-title">{project.format}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }
      </div>
    )
  }
}

export default Projects;
