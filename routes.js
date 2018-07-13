




/// consider using control f to find examples of what you need in this section ///




///////////////    APP.JS     //////////////////
import React, { Component } from 'react';
import routes from './routes'
import {Link} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link to="/" className='links'>Home</Link>
              <Link to="/about" className='links'>About</Link> 
          </div>
        </nav>
        {routes}
      </div>
    )
  }
}

//////////////    INDEX.JS    ////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './main.css';
import App from './App';



ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>
, document.getElementById('root'));

///////////////     ROUTES.JS    ////////////////

import React from 'react'
import{Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/classlist/:class" component={ClassList}/>
        <Route path="/student/:id" component={Student}/>
    </Switch>
)

///////////////     STUDENT.JS    /////////////////

import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state={
      studentInfo:{}
    };

  }

  componentDidMount(){
    return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(results => {
      this.setState({
        studentInfo:results.data
      });
    });
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <button onClick={()=>this.props.history.goBack()}>Previous</button>
      </div>
    )
  }
}

/////////////////////     HOME.JS     ////////////////////

import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to='/classlist/MATH1010'><button className='btn'>Math 1010</button></Link>
        <Link to='/classlist/ENGLISH2010'><button className='btn'>English 2010</button></Link>
        <Link to='/classlist/BIO2020'><button className='btn'>Biology 2020</button></Link>
      </div>
    );
  }
}

////////////////////    HISTORY.JS    /////////////////////

import React, { Component } from 'react';

export default class History extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>History of WestSide University:</h1>
        <p>Nullam cursus sem sit amet quam sollicitudin blandit. Phasellus quis odio nec magna ultricies lacinia ut quis nisi. Fusce ultricies leo at quam vehicula, sit amet tincidunt nisl scelerisque. Mauris vitae hendrerit quam. Maecenas sed mi a turpis sollicitudin bibendum. Pellentesque id felis in leo cursus pharetra ac non purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sapien tortor, cursus at sem ac, posuere condimentum mauris. Mauris auctor mi massa, non ullamcorper orci dapibus et. Phasellus ut pharetra nisl. Phasellus eu rhoncus lorem. In quis metus venenatis, eleifend dui a, iaculis arcu.
        <br/>
        <br/>
        Curabitur egestas libero vel tortor tincidunt finibus. Proin sollicitudin magna nulla, ac aliquet tellus tincidunt eu. Pellentesque elit ex, accumsan id lacus euismod, laoreet ornare est. Mauris sagittis justo ut pharetra lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam justo, mattis ut ornare eget, porttitor cursus nisl. Proin efficitur libero massa, vitae egestas nibh pellentesque eu. Ut sodales velit ipsum. In dapibus, nisl nec tristique pharetra, ante ligula iaculis dolor, nec aliquet odio est ultrices tellus. Nulla efficitur venenatis urna finibus ullamcorper. Aenean ut dictum tellus. Nullam turpis ex, dapibus vel hendrerit nec, dignissim id arcu.
        <br/>
        <br/>
        Morbi viverra quam dui. Quisque accumsan sed felis at gravida. Duis sed nibh dui. Etiam eu aliquam ligula, ac iaculis lorem. Vivamus non enim semper, vehicula quam hendrerit, dignissim diam. Integer eleifend nisl non magna vestibulum feugiat. Sed pellentesque, nisl ut fringilla dapibus, tortor augue porttitor nulla, rhoncus convallis erat enim gravida nulla. Aliquam ac euismod sem. Nulla non ultrices sapien. Vivamus sagittis eget leo vitae sagittis. Maecenas quis leo lacus. Ut sed aliquet orci.</p>
      </div>
    )
  }
}

//////////////////////    CONTACT.JS     ////////////////////////

import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>Contact Information of WestSide University:</h1>
        <div className='sub_box'>
          <p><strong>Address:</strong> 123 West 4590 North, Paradise UT</p>
          <p><strong>Number:</strong> 1-800-234-5678</p>
          <p><strong>Email:</strong> contact@wsu.edu</p>
        </div>
      </div>
    )
  }
}

////////////////////    CLASSLIST.JS      ////////////////////////

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state={
      students:[]
    }
    
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(results=>{
      this.setState({students:results.data});});

  }

  render() {
    const students = this.state.students.map((student,i)=>(<Link to={`/student/${student.id}` } key={i}><h3>{student.first_name} {student.last_name}</h3></Link>));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}

///////////////////////     ABOUT.JS     /////////////////////////

import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Contact from './../Contact/Contact'
import History from './../History/History'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link className='subnav_links' to='/about'>        <h3>About  </h3></Link>
          <Link className='subnav_links' to='/about/history'><h3>History</h3></Link>
          <Link className='subnav_links' to='/about/contact'><h3>Contact</h3></Link>
        </div>
        <div className='box'>
        <Switch>
          <Route path='/about/history' component={History}/>
          <Route path='/about/contact' component={Contact}/>
          <Route path='/about' render={()=>(
            <div>
              <h1>About the University</h1>
              <p>Here is the part where the waffle goes...</p>
            </div>
          )}/>
        </Switch>
        </div>
      </div>
    )
  }
}

