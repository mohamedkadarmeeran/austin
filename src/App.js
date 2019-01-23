import React, { Component } from 'react';
import Austin from './components/austin';
import Austindetails from './components/austindetails';
import './App.scss';
import Austinofficemarket from './components/austinofficemarket';
import Austinofficeowners from './components/austinofficeowners'
import Austinlandscape from './components/austinlandscape';
import Contact from './components/contact';
import Footer from './components/footer';
import scrollToComponent from 'react-scroll-to-component';


class App extends Component {

  componentDidMount() {
    scrollToComponent(this.contact, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

submit1=(param,e)=>{
   var contact=document.getElementById("contactUs");
   scrollToComponent(contact, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
   var sel = document.getElementById("select");
   for ( var i = 0, len = sel.options.length; i < len; i++ ) {
    var opt = sel.options[i];
    console.log(param);
     if ( opt.value === param ) {
       
       sel.selectedIndex=i;
      
       break;
     }
    }    

}

  render() {
    return (
      <div>
        <Austin  submit1={this.submit1} />
         {/* <Austindetails/>
         <Austinofficemarket/>
         <Austinofficeowners />
         <Austinlandscape/> */}
         <Contact />
         <Footer />
      </div>
    );
  }
}

export default App;
