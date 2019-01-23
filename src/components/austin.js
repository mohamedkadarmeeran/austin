import React, { Component } from 'react';
import '../assets/styles/austin.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
   import Logo from '../assets/images/Group 29@3x.png';
   import scrollToComponent from 'react-scroll-to-component';
   import Austindetails from '../components/austindetails';
   import Austinofficemarket from '../components/austinofficemarket';
   import Austinofficeowners from '../components/austinofficeowners';
   import Austinlandscape from '../components/austinlandscape';
   


class Austin extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }
 
  render() {
    return (
      <div>
      <div className="banner">
          <div className="main">
       
          <nav className=" navbar  navbar-expand-sm bg-white " id="nvbars">
            <a className="navbar-brand" href="/" ><img className="logo" src={Logo} alt="logo"/> </a>
            <button className="navbar-toggler " data-toggle="collapse" data-target="#navbarMenu" >
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                  <a  onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1200})}className="nav-link" href="#WhyAustin">Why Austin</a>
                  </li>
                  <li className="nav-item">
                  <a  onClick={() => scrollToComponent(this.Black, { offset: 0, align: 'top', duration: 1200})}className="nav-link" href="#AustinOfficeMarket">Austin Office Market</a>
                  </li>
                  <li className="nav-item">
                  <a  onClick={() => scrollToComponent(this.White, { offset: 0, align: 'top', duration: 1200})}className="nav-link" href="#TopOfficeOwners">Top Office Owners </a>
                  </li>
                  <li className="nav-item">
                  <a onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 1200})} className="nav-link" href="#AustinLandscape">Austin Landscape</a>
                  </li>
               </ul>
            </div>
          </nav>
          </div>

          <div className="Austintaxas">
              <div className=" container">
                  <p className=" texas">Austin,Texas is the</p>
                  <p className="best" >#1 Best Place to Live</p>
                  <p className="us">- U.S. News 2/7/17</p>
              </div>
          </div>
          
          <div class="container cont_width ">
          <div class="row text-white ">
            <div class="col-sm-3 bg-danger ">
              <h2 className="three">#1 </h2>
              <p className=" city3">City for Job Seekers</p>
              <p className="forbes">- NerdWallet 12/19/16</p>
            </div>
            <div class="col-sm-3 bg-warning">
              <h2 className="three">0% </h2>
              <p className=" city3">State and Local Income Tax </p>
              
            </div>
            <div class="col-sm-3 bg-info ">
              <h2 className="three">#3 </h2>
              <p className=" city3">City Creating the Most Tech Jobs in 2017</p>
              <p className="forbes">- Forbes 3/17/17</p>
            </div>
            <div class="col-sm-3 bg-color ">
              <h2 className="three">#1 </h2>
              <p className=" city3">U.S. City for Millennials</p>
              <p className="forbes">- Nestpick 4/19/17</p>
            </div>
            </div>
          </div>
      </div>
      <section className='violet' ref={(section) => { this.Violet = section; }}><Austindetails></Austindetails></section>
      <section className='Black' ref={(section) => { this.Black = section; }}><Austinofficemarket></Austinofficemarket></section>
      <section className='White' ref={(section) => { this.White = section; }}><Austinofficeowners submit1={this.props.submit1}></Austinofficeowners></section>
      <section className='Red' ref={(section) => { this.Red = section; }}><Austinlandscape></Austinlandscape>></section>
      </div>
    );
  }
}

export default Austin;

