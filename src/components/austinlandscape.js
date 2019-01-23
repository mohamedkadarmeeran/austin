import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../assets/styles/austinlandscape.scss';
import map from '../assets/images/map@3x.png';



class austinlandscape extends Component {
  
  render() {
    return (
      <div>
          <div class="container margintopb">
          <h2 className='austinlandscapeheading'>Austin Landscape</h2>
          </div>
          <img src={map} alt="map" className='img-fluid'/>
          <div className="container mapbottom">
            <div className="row">
              <div className="col-md-6 ">
              <ul>
                <li className="my-4 alfont"><span class="circle mr-2 bg-success">1</span>Most Diverse | Central West Central</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg2">2</span>Young Families/ Young Professionals | Downtown</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg3">3</span>Working Professionals | North</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg4">4</span>Shopping | North Central</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg-primary ">5</span>Outdoor Enthusiasts | Northwest</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg-warning">6</span>Students | Northeast</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg7">7</span>Music Enthusiasts/ Hippies | South</li>
              </ul>
              </div>
              <div className="col-md-6">
              <ul>
                <li className="my-4 alfont"><span class="circle mr-2 bg8">8</span>Affordable Homes | Southeast</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg9">9</span>Older People | Southwest</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg10">10</span>Award Winning Schools | Westlake Hills</li>
                <li className="my-4 alfont"><span class="circle mr-2  bg11 bg-danger">11</span>Business Owners | East</li>
                <li className="my-4 alfont"><span class="circle mr-2  bg12 bg7">12</span>New Homebuyers | East Central</li>
                <li className="my-4 alfont"><span class="circle mr-2 bg13 bg-secondary">13</span> Luxury Homes | West</li>
              </ul></div>
            </div>
           
          </div>
      <div className="bgblue ">
          <div className="container contmain">
          <div >
            <Button id="bla"outline color="secondary marRight ">AUSTIN OFFICE</Button>
            <Button id="bla"outline color="secondary  marRight">AUSTIN OFFICE SPACE</Button>
            <Button id="bla"outline color="secondary  marRight">AUSTIN OFFICE RENT</Button>
            <Button id="bla"outline color="secondary  marRight">AUSTIN OFFICE LEASE</Button>
            <Button id="bla"outline color="secondary  marRight">AUSTIN OFFICE FOR LEASE</Button>
            <Button id="bla"outline color="secondary  marRight">AUSTIN OFFICE OWNERS</Button>
            <Button id="bla"outline color="secondary  marRight">TEXAS OFFICE</Button>
            <Button id="bla"outline color="secondary  marRight">TEXAS OFFICE FOR LEASE</Button>
            <Button id="bla"outline color="secondary  marRight">TEXAS OFFICE OWNERS</Button>
            <Button id="bla"outline color="secondary  marRight">OFFICE SPACE AUSTIN</Button>
            <Button id="bla"outline color="secondary  marRight">CO-WORKING OWNERS</Button>
            <Button id="bla"outline color="secondary  marRight">WEWORK AUSTIN</Button>
            <Button id="bla"outline color="secondary  marRight">WORLD CLASS PROPERTY COMPANY AUSTIN</Button>
            <Button id="bla"outline color="secondary  marRight">NATEPAUL AUSTIN</Button>
            <Button id="bla"outline color="secondary  marRight">WORLD CLASS AUSTIN</Button>
          </div>
         </div>
      </div>
      </div>
    
      

  
    );
  }
}

export default austinlandscape;

