import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import avatar from './avatar.png'

import './MainHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinked  } from '@fortawesome/free-solid-svg-icons'
import { faHome  } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends  } from '@fortawesome/free-solid-svg-icons'
import { faArchive  } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'

import { CountNotificationBadge, NoCountNotificationBadge } from '../../components/Header'

export const MainHeader = () => {
  const history = useHistory()
  const location = useLocation()
  return (
    <div >
      <Navbar fixed="top">
        <div className="container">
        <Navbar.Brand onClick={() => history.push('/')}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" data-supported-dps="34x34" focusable="false">
          <g transform="scale(.7083)" fill="none" fillRule="evenodd">
          <rect className="bug-text-color" fill="#FFF" x="1" y="1" width="46" height="46" rx="4"></rect>
          <path d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#0077B5"></path>
          </g>
          </svg>  
        </Navbar.Brand>
        <Form inline className="search-form ml-3 pl-2">
            <FontAwesomeIcon icon={faSearch } />
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link onClick={() =>history.push('/')}
            className={location.pathname==='/' ? 'active' : ''}>
            <NoCountNotificationBadge />
            <div>
              <FontAwesomeIcon icon={faHome } />
            </div>            
            <span className="nav-link-text">Home</span>
          </Nav.Link>

          <Nav.Link onClick={() => history.push('/mynetwork')}
            className={location.pathname==='/mynetwork' ? 'active' : ''}>
              <CountNotificationBadge />
              <div>
                  <FontAwesomeIcon icon={faUserFriends } />
              </div>            
              <span className="nav-link-text">My Network</span>
          </Nav.Link>

          <Nav.Link onClick={() => history.push('/jobs')}
            className={location.pathname==='/jobs' ? 'active' : ''}>
              <div>
                  <FontAwesomeIcon icon={faArchive } />
              </div>            
              <span className="nav-link-text">Jobs</span>
            </Nav.Link>

          <Nav.Link onClick={() => history.push('/messaging')}
            className={location.pathname==='/messaging' ? 'active' : ''}>
              <CountNotificationBadge />
              <div>
                  <FontAwesomeIcon icon={faCommentAlt } />
              </div>            
              <span className="nav-link-text">Messaging</span>
          </Nav.Link>

          <Nav.Link onClick={() => history.push('/notifications')}
            className={location.pathname==='/notifications' ? 'active' : ''}>
              <div>
                  <FontAwesomeIcon icon={faBell } />
              </div>            
              <span className="nav-link-text">Notifications</span>
          </Nav.Link>
          <div className="nav-me">
            <span className="nav-avatar">
              <img src={avatar}
              width="25"
              height="25"
              className="d-inline-block align-top">
              </img>
            </span>
            <NavDropdown title="Me" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <span className="nav-avatar">
                  <img src={avatar}
                  width="50"
                  height="50"
                  className="d-inline-block align-top">
                  </img>
              </span>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          </div>
          <div className="nav-me divider">
            <span className="nav-avatar mt-2">
              <FontAwesomeIcon icon={faTh } />
            </span>
            <NavDropdown title="Work" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <span className="nav-avatar">
                <img src={avatar}
                width="25"
                height="25"
                className="d-inline-block align-top">
                </img>
              </span>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          </div>
        </Nav>
        </div>
      </Navbar>
    </div>
  );
};
