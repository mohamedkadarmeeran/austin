import React, { Component } from 'react';
import '../assets/styles/austindetails.scss';
import carlos from '../assets/images/carlos-delgado-717278-unsplash@3x.png';
import group from '../assets/images/Group 807@3x.png';
import art from '../assets/images/art@3x.png';
import tech from '../assets/images/tech@3x.png';
import education from '../assets/images/edu@3x.png';

class Austindetails extends Component{
    
    render(){
        return(
            <div>

        <div class="container">
            <h2 className=' austinheader'>Why Austin</h2>
            <div className='row '>
                <div class="col-md-6">
                <img src={carlos} alt="carlos" className='img-fluid ' />
                </div>
            <div className="col-md-6">
            <div className="row ">
                <div className="col-md-4">
                <div className="icon1"></div></div>
                <div className="col-md-8 ">
                <h4 className="austinsideheading">153 "BEST OF LISTS"</h4><p className="austinsidedetails">Through 2016 and 2017, Austin made at least 153 “Best of lists”</p>
                </div>
                </div>
                <div className="row  ">
                <div className="col-md-4">
                <div className="icon2"></div></div>
                <div className="col-md-8">
                <h4 className="austinsideheading">35.7% GROWTH RATE</h4><p className="austinsidedetails">Austin had a 35.7% growth rate from 2010 to 2016 - the highest in the nation</p>
                </div>
                </div>

                <div className="row ">
                <div className="col-md-4">
                <div className="icon3"></div></div>
                <div className="col-md-8">
                <h4 className="austinsideheading">1.9% ECONOMIC GROWTH RATE</h4><p className="austinsidedetails">From 2016 to 2017, Austin’s economy grew faster than any city in the U.S</p>
                </div>
                </div>
                <div className="row ">
                <div className="col-md-4">
                <div className="icon4"></div></div>
                <div className="col-md-8">
                <h4 className="austinsideheading">2.8% UNEMPLOYMENT RATE</h4><p className="austinsidedetails">Austin’s unemployment rate is down 1.5% from April 2016</p>
                </div>
                </div>
                <div className="row ">
                <div className="col-md-4">
                <div className="icon5"></div></div>
                <div className="col-md-8">
                <h4 className="austinsideheading">HIGH EDUCATIONAL ATTAINMENT</h4><p className="austinsidedetails"> 88.6% of Austin’s population are High School Graduates or higher, which outpaces the national average of 86.6%</p>
                </div>
            </div>
            </div>
      </div>
      </div>
            <div className="cont">
            <div className="container ">
            <div className="row">
            <div className="col-md-4 ">
            <img src={group} alt="group" className='img-fluid'/></div>
            <div className="col-md-8  parag " id="para" >
            <p className="padd">Over 150 poeple move to Austin,TX every day. making it the fastest growing city in the US.</p>
             <p className="padd1">Located in Central Texas Hill Country,Austin,TX is a unique reservoir of arts,education,and eclectic poeple </p>
            </div>
            </div>
            </div>
              </div>
                <div className="container my-5">
                <div className="row">
                <div className="col-md-7 artscol">
                <p class="btn-art my-2" id="arts" >ART & CULTURE</p>
                     <p className="arts">Referred to as the Live Music Capital of the World, it’s not hard to walk down any given street on any given night of the week and see a great band playing. 
                </p>
                    <p className="arts"> Austin also hosts some of the country’s foremost festivals, including SXSW, ACL, and Fun Fun Fun Fest, all of which contribute to the growing amount of talent relocating to the city.</p>
                </div>
                <div className="col-md-5">
                <img src={art} alt="art" className='img-fluid artimage' height="300px" width="447px"/>
                </div>
                </div>
                </div>

                <div className="container my-5">
                <div className="row">
                <div className="col-md-5">
                <img src={tech} alt="tech" className='img-fluid'/>
                </div>
                <div className="col-md-7" id="techpara">
                <p class="btn-tech my-2" id="tech">TECH</p>
                <p className="tech">Its business climate enjoys the open policies and low taxes that the rest of Texas has, but it also includes the innovative and hustling nature of the slew of technology startups moving here.</p>
                <p className="tech"> ‘Silicon Hills’ is quickly becoming a hotbed for entrepreneurial talent.</p>
                </div></div>
                </div>

                <div className="container marginbottom">
                <div className="row">
                <div className="col-md-7">
                <p class="btn-education my-2" id="education">EDUCATION</p>
                <p className="education">At the center of Austin is the University of Texas, which now enrolls over 50,000 students. Saturdays in fall are electric events marked by huge crowds dressed in burnt orange. 
                </p>
                <p className="education"> The school world renowned, topping national rankings in computer science, accounting, and engineering.
                Austin is also a unique culinary experience.</p>
                </div>
                <div className="col-md-5 ">
                <img src={education} alt="education" className='img-fluid'/>
                </div></div></div>
                <hr></hr>

              </div>
        );
    }
}

export default Austindetails;