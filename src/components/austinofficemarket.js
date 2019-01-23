import React, { Component } from 'react';
import '../assets/styles/austinofficemarket.scss';

class Austinofficemarket extends Component {
  
  render() {
    return (
      <div class="container margintopaustinmarket">
      <h2 className='austinofficemarketheading'>Austin Office Market</h2>
      <div className="row">
            <div className="col-md-4 ">
                <div className='row vacancy '>
                     <div className="col-md-4 ">
                   <div className="vacany1"></div>
                     </div>
                    <div className="col-md-8">< p className="vacancysidehead">vacancy </p> <h6 className="vacancydetails">10.2%</h6></div>
                </div>
                <div className='row vacancy '>
                    <div className="col-md-4 ">
                    <div className="construction"></div>
                    </div>
                    <div className="col-md-8"><p className="vacancysidehead">Under Construction </p> <h6 className="vacancydetails">4,445,358 SF</h6></div>
                </div>
                <div className='row vacancy '>
                    <div className="col-md-4 ">
                    <div className="deliveries"></div>
                    </div>
                    <div className="col-md-8"><p className="vacancysidehead">Deliveries </p> <h6 className="vacancydetails">580,487 SF</h6></div>
                </div>

                <div className='row vacancy '>
                    <div className="col-md-4 ">
                    <div className="net"></div>
                    </div>
                    <div className="col-md-8"><p className="vacancysidehead">Net Absorption </p> <h6 className="vacancydetails">575,927 SF</h6></div>
                </div>
                <div className='row vacancy '>
                    <div className="col-md-4 ">
                    <div className="avg"></div>
                    </div>
                    <div className="col-md-8"><p className="vacancysidehead">Avg. Asking Rate</p> <h6 className="vacancydetails">$35.49 PSF</h6></div>
                </div>
                <div className="row"> <p className="source">Source:<span className="research"> CBRE Research, Q3 2018 </span></p></div>
               
        </div>
        <div className="col-md-7">
        <p className="downvacnacyheading">Down with vacancy and up with absorption in Q3 2018</p>
        <p className="downvacnacyheading1">Absorption levels in the Austin Office Market rebounded in Q3 2018 from a relatively flat first half of the year, cresting 575,000 sq. ft of positive space demand during the quarter. With vacancy steadily floating around the 10.0% mark and asking rates near historic highs, developers continue to read positively into Austin’s position during the late expansion stage of the market cycle.</p>
        <button type="button" class="btn btn-fom my-2" id="fom">FIND OUT MORE</button>
        </div>
      </div>
      </div>
    
      

  
    );
  }
}

export default Austinofficemarket;

