import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Nav, NavItem,DropdownButton, MenuItem, ButtonGroup, Button, Table,Navbar,FormGroup, FormControl } from 'react-bootstrap';


class Header extends Component {


  render() {
         
         
    return (
            <div>
                <ul className="x-navigation x-navigation-horizontal x-navigation-panel ">
                    <li className="xn-search">
                        <form role="form">
                            <input style={{background:'white'}} type="text" name="search" placeholder="Search"/>
                        </form>
                    </li>


                    <li className="xn-icon-button pull-right" style={{display:'none'}}>
                        <Link to="#"><span className="flag flag-gb"></span></Link>
                        <ul className="xn-drop-left xn-drop-white animated zoomIn">
                            <li><Link to="#"><span className="flag flag-gb"></span> English</Link></li>
                            <li><Link to="#"><span className="flag flag-de"></span> Deutsch</Link></li>
                            <li><Link to="#"><span className="flag flag-cn"></span> Chinese</Link></li>
                        </ul>                        
                    </li> 
      
                </ul>
            </div>          
           
    );
  }
}

function mapStateToProps(state) {
   console.log('state',state);
   return {} 
}

export default connect(mapStateToProps,null)(Header);
