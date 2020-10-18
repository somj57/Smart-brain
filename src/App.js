import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';



const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  },
  box1:{},
  box2:{},
  box3:{},
  box4:{},
  box5:{},
  box6:{},
  box7:{},
  box8:{},
  box9:{},
  box11:{},
  box12:{},
  box13:{},
  box14:{},
  box15:{},
  box16:{},
  box17:{},
  box18:{},
  box19:{},
}

const particlesOption = {
  particles: {
	        number: {
	            value: 100
	        },
	        size: {
	            value: 2
	        }
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse"
	            }
	        }
	    }
    }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  componentDidMount(){
    fetch('https://enigmatic-atoll-45476.herokuapp.com/')
    .then(response => response.json())
    .then(console.log);
  }

  calculateFaceLocation = (data) => {
   const clarifaiFace = data.region_info.bounding_box;
   const image = document.getElementById('inputimage');
   const width = Number(image.width);
   const height = Number(image.height);
   return {
     leftCol: clarifaiFace.left_col * width,
     topRow: clarifaiFace.top_row * height,
     rightCol: width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row * height)
   }
 }

 displayFaceBox = (box) => {
    this.setState({box: box});
  }
displayFaceBox1 = (box1) => {
     this.setState({box1: box1});
   }
   displayFaceBox2 = (box2) => {
  this.setState({
    box2: box2
  });
}
displayFaceBox3 = (box3) => {
  this.setState({
    box3: box3
  });
}
displayFaceBox4 = (box4) => {
  this.setState({
    box4: box4
  });
}
displayFaceBox5 = (box5) => {
  this.setState({
    box5: box5
  });
}
displayFaceBox6 = (box6) => {
  this.setState({
    box6: box6
  });
}
displayFaceBox7 = (box7) => {
  this.setState({
    box7: box7
  });
}
displayFaceBox8 = (box8) => {
  this.setState({
    box8: box8
  });
}
displayFaceBox9 = (box9) => {
  this.setState({
    box9: box9
  });
}
displayFaceBox11 = (box11) => {
     this.setState({box11: box11});
   }
   displayFaceBox12 = (box12) => {
  this.setState({
    box12: box12
  });
}
displayFaceBox13 = (box13) => {
  this.setState({
    box13: box13
  });
}
displayFaceBox14 = (box14) => {
  this.setState({
    box14: box14
  });
}
displayFaceBox15 = (box15) => {
  this.setState({
    box15: box15
  });
}
displayFaceBox16 = (box16) => {
  this.setState({
    box16: box16
  });
}
displayFaceBox17 = (box17) => {
  this.setState({
    box17: box17
  });
}
displayFaceBox18 = (box18) => {
  this.setState({
    box18: box18
  });
}
displayFaceBox19 = (box19) => {
  this.setState({
    box19: box19
  });
}

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      this.setState({
        box:{},
        box1:{},
        box2:{},
        box3:{},
        box4:{},
        box5:{},
        box6:{},
        box7:{},
        box8:{},
        box9:{},
        box11:{},
        box12:{},
        box13:{},
        box14:{},
        box15:{},
        box16:{},
        box17:{},
        box18:{},
        box19:{},
      });
        fetch('https://enigmatic-atoll-45476.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
        .then(response => response.json())
        .then(response => {
          if (response) {
            fetch('https://enigmatic-atoll-45476.herokuapp.com/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(response => response.json())
              .then(count => {
                this.setState(Object.assign(this.state.user, { entries: count}))
              })
              .catch(console.log)

          }
          this.displayFaceBox(this.calculateFaceLocation(response.outputs[0].data.regions[0]))
          this.displayFaceBox1(this.calculateFaceLocation(response.outputs[0].data.regions[1]))
          this.displayFaceBox2(this.calculateFaceLocation(response.outputs[0].data.regions[2]))
          this.displayFaceBox3(this.calculateFaceLocation(response.outputs[0].data.regions[3]))
          this.displayFaceBox4(this.calculateFaceLocation(response.outputs[0].data.regions[4]))
          this.displayFaceBox5(this.calculateFaceLocation(response.outputs[0].data.regions[5]))
          this.displayFaceBox6(this.calculateFaceLocation(response.outputs[0].data.regions[6]))
          this.displayFaceBox7(this.calculateFaceLocation(response.outputs[0].data.regions[7]))
          this.displayFaceBox8(this.calculateFaceLocation(response.outputs[0].data.regions[8]))
          this.displayFaceBox9(this.calculateFaceLocation(response.outputs[0].data.regions[9]))
          this.displayFaceBox11(this.calculateFaceLocation(response.outputs[0].data.regions[11]))
          this.displayFaceBox12(this.calculateFaceLocation(response.outputs[0].data.regions[12]))
          this.displayFaceBox13(this.calculateFaceLocation(response.outputs[0].data.regions[13]))
          this.displayFaceBox14(this.calculateFaceLocation(response.outputs[0].data.regions[14]))
          this.displayFaceBox15(this.calculateFaceLocation(response.outputs[0].data.regions[15]))
          this.displayFaceBox16(this.calculateFaceLocation(response.outputs[0].data.regions[16]))
          this.displayFaceBox17(this.calculateFaceLocation(response.outputs[0].data.regions[17]))
          this.displayFaceBox18(this.calculateFaceLocation(response.outputs[0].data.regions[18]))
          this.displayFaceBox19(this.calculateFaceLocation(response.outputs[0].data.regions[19]))
        })
        .catch(err => console.log(err));
    }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
      const { isSignedIn, imageUrl, route, box } = this.state;
      return (
        <div className="App">
        <Particles className="particles" params={particlesOption}/>
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          { route === 'home'
                ? <div>
                    <Logo />
                    <Rank
                      name={this.state.user.name}
                      entries={this.state.user.entries}
                      />
                    <ImageLinkForm
                      onInputChange={this.onInputChange}
                      onButtonSubmit={this.onButtonSubmit}
                    />
                    <FaceRecognition
                      imageUrl={imageUrl}
                      box={box}
                      box1={this.state.box1}
                      box2={this.state.box2}
                      box3={this.state.box3}
                      box4={this.state.box4}
                      box5={this.state.box5}
                      box6={this.state.box6}
                      box7={this.state.box7}
                      box8={this.state.box8}
                      box9={this.state.box9}
                      box11={this.state.box11}
                      box12={this.state.box12}
                      box13={this.state.box13}
                      box14={this.state.box14}
                      box15={this.state.box15}
                      box16={this.state.box16}
                      box17={this.state.box17}
                      box18={this.state.box18}
                      box19={this.state.box19}
                      />
                  </div>
                : (
                    route === 'signin'
                    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                     :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>

                  )
          }
        </div>
      );
    }
}

export default App;
