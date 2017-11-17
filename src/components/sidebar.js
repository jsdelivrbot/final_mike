import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Tooltip , OverlayTrigger,Button } from 'react-bootstrap';


class Sidebar extends Component {

	render() {

		return (
            <div className="page-sidebar">
                <ul className= "x-navigation">
                    <li className="xn-logo">
                        <Link to="/dashboard" ></Link>
                        <Link to="#" className="x-navigation-control"></Link>
                    </li>
                    <li className="xn-profile">
                             
                        <div className="profile">
                            <div className="profile-image">
                                    <img src="../../images/mike.png" />
                                 
                            </div>
                     
                              <div className="profile-data">
                                <div className="profile-data-name">Mike</div>
                                <div className="profile-data-title">MikeLegal</div>
                              </div>
           
                        </div>                                                                        
                    </li>
                    <li className="xn-title">Navigation</li>
                    <li >
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Dashboard</strong></Tooltip>}>
                     <Link to="/dashboard" activeClassName="active"><span className="fa fa-dashboard"></span> <span className="xn-text">Dashboard</span></Link>
                    </OverlayTrigger> 
                    </li>
                     
                      
                         <li>
                          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Creative Approval</strong></Tooltip>}>
                            <Link><span className="fa fa-image"></span> <span className="xn-text">Creative Approval</span></Link>
                          </OverlayTrigger>
                        </li>
                   
                    <li>
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Campaigns</strong></Tooltip>}>
                        <Link ><span className="fa fa-tasks"></span> <span className="xn-text">Campaigns</span></Link>
                      </OverlayTrigger>
                    </li>
  
                    <li>
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Vendors</strong></Tooltip>}>
                        <Link ><span className="fa fa-user-circle"></span> <span className="xn-text">Vendor</span></Link>
                      </OverlayTrigger>
                    </li> 

                    <li>
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Monitors</strong></Tooltip>}>
                        <Link ><span className="fa fa-users"></span> <span className="xn-text">Monitor</span></Link>
                      </OverlayTrigger>
                    </li>

 
                    <li>
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Shared Campaigns</strong></Tooltip>}>
                        <Link ><span className="fa fa-share"></span> <span className="xn-text">Shared Campaigns</span></Link>
                      </OverlayTrigger>
                    </li>

                    <li>
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Media Hub</strong></Tooltip>}>
                        <Link to="/media_hub"><span className="fa fa-object-ungroup"></span> <span className="xn-text">Media Hub</span></Link>
                      </OverlayTrigger>
                    </li>

                       <li>
                          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Shared Creatives</strong></Tooltip>}>
                            <Link to="/shared_creatives"><span className="fa fa-share"></span> <span className="xn-text">Shared Creatives</span></Link>
                          </OverlayTrigger>
                        </li>  
                    } 
                    

                    {/*              
                    <li className="xn-openable">
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Map</strong></Tooltip>}>
                        <Link to="/map"><span className="fa fa-map-marker"></span> <span className="xn-text">Map</span></Link>
                      </OverlayTrigger>
                    </li>
                    <li className="xn-openable">
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip"><strong>Reports</strong></Tooltip>}>
                        <Link to="/testing"><span className="fa fa-table"></span> <span className="xn-text">Reports</span></Link>
                      </OverlayTrigger>
                    </li>                                       
                    */}
                </ul>
            </div>
		);
	}
}


function mapStateToProps(state) {
   console.log('state',state);
   return {}
}

export default connect(mapStateToProps,null)(Sidebar);
