import React, { Component } from 'react';
import '../assets/styles/austinofficeowners.scss'
import './contact';
import icon1 from '../assets/images/wcpc@3x.png';
import icon2 from '../assets/images/tier@3x.png';
import icon3 from '../assets/images/calstrs@3x.png';
import icon4 from '../assets/images/dell@3x.png';
import icon5 from '../assets/images/Group 14@3x.png';
import icon6 from '../assets/images/accesso@3x.png';
import icon7 from '../assets/images/dra@3x.png';
import icon8 from '../assets/images/equity@3x.png';
import icon9 from '../assets/images/cousins@3x.png';
import icon10 from '../assets/images/intercontinental@3x.png';


class Austinofficeowners extends Component {
constructor(props){
super(props)
this.state={
data:[
        
{
name: "1  -  World Class Property Company",
imgUrl:icon1
},
{
name: "2  -  TIER REIT",
imgUrl:icon2
},
{
name: "3  -  CalSTRS",
imgUrl: icon3
},
{
name: "4  -  Dell Inc.",
imgUrl:icon4
},
{
name: "5  -  Brandywine Realty Trust",
imgUrl:icon5          },
{
name: "6  -  Accesso Partners",
imgUrl:icon6
},
{
name: "7  -  DRA Advisors",
imgUrl:icon7
},
{
name: "8  -  Equity Commonwealth",
imgUrl:icon8
},
{
name: "9  -  Cousins Properties",
imgUrl:icon9         },
{
name: "10  -  Intercontinental Real Estate",
imgUrl:icon10
}

]

}

}

// submit1 = () => { 
//   document.getElementById("worldclass").selected = "true";
// }
  render() {
    return (
      <div className="austinofficeowner ">
            <h2 className='austinheading'>Austin's Largest Office Owners</h2>
    <div className="container insidecontent">
            {this.state.data.map((data, index) =>
            <div className=" row"  key="index">
            <div className="col-md-4 astinimage-left my-3">
               <img className="imagess" src={data.imgUrl} height="204px" width="264px"alt="side images" /> 
            </div>
            <div className="col-md-8 austindetails my-3">
                <h2 className="sideheading">{data.name}</h2>
                <p className="loreumcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                <button type="button" class="butintouch" id="selected"  onClick={(e)=>this.props.submit1(data.name,e)} >GET IN TOUCH</button> 
            </div>
      
      </div>
            )}
        </div>
    
    </div>
    );
  }
}

export default Austinofficeowners;
