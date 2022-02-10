import React, { Fragment, useState, useLayoutEffect, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { X, Layers, GitPullRequest, User, Users, UserMinus, UserCheck, Airplay, Zap,Heart,Inbox, Sliders } from 'react-feather'
import { Link } from 'react-router-dom'
import { errorPages, authPages, usefullPages, comingsoonPages } from './pages'
import {BonusUi,MegaMenu,ErrorPage,Authentication,UsefullPages,ComingSoon, FileManager,SocialApp,UserEdit,UsersCards,UserProfile,KanbanBoard,Bookmark,LevelMenu} from '../../constant'
import { DefaultLayout } from '../theme-customizer';

const Leftbar = (props) => {
  const id = window.location.pathname.split('/').pop()
  const defaultLayout= Object.keys(DefaultLayout);
  const layout= id ? id : defaultLayout
  const [bonusui, setBonusUI] = useState(false)
  const [levelMenu, setLevelMenu] = useState(false)
  const [sidebartoggle, setSidebartoggle] = useState(true)
  const [megaboxtoggle1, setMegaboxtoggle1] = useState(true)
  const [megaboxtoggle2, setMegaboxtoggle2] = useState(true)
  const [megaboxtoggle3, setMegaboxtoggle3] = useState(true)
  const [megaboxtoggle4, setMegaboxtoggle4] = useState(true)
  const width = useWindowSize()

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }


  useEffect(() => {

    var ignoreClick_On_Out_side_Element = document.getElementById('out_side_click');
    var ignoreClick_On_Main_Nav_Element = document.getElementById('sidebar-menu');
    document.addEventListener('click', function(event) {
        var isClickOutSideElement = ignoreClick_On_Out_side_Element.contains(event.target);
        var isClickMainNavElement = ignoreClick_On_Main_Nav_Element.contains(event.target);
        if (window.innerWidth <= 991 && !isClickOutSideElement && !isClickMainNavElement && document.getElementById("sidebar-wrapper")) {
            //Do something click is outside specified element
            document.querySelector(".page-header").className = "page-header close_icon";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        }
    });

    if (width <= 767) {
      setMegaboxtoggle1(true)
      setMegaboxtoggle2(true)
      setMegaboxtoggle3(true)
      setMegaboxtoggle4(true)
    } else {
      setMegaboxtoggle1(false)
      setMegaboxtoggle2(false)
      setMegaboxtoggle3(false)
      setMegaboxtoggle4(false)
    }

  }, [width])

  const responsiveMegaMenuclose = () => {
    setBonusUI(false)
    document.querySelector(".mega-menu-container").classList.remove("d-block")
  }

  const ToggleBonusUI = (value) => {
    setLevelMenu(false)
    if (value) {
      setBonusUI(!value)
      document.querySelector(".mega-menu-container").classList.remove("d-block")
    } else {
      setBonusUI(!value)
      if (width <= 991) {
        document.querySelector(".page-header").className = "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        document.querySelector(".mega-menu-container").classList.add("d-block")
      } else {
        document.querySelector(".mega-menu-container").classList.add("d-block")
      }
    }
  }

  const responsive_openCloseSidebar = (toggle) => {
    if(width <= 991){
      setBonusUI(false)
      document.querySelector(".page-header").className = "page-header";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
    }else{
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        document.querySelector(".mega-menu-container").classList.remove("d-block")
      } else {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
      }
    }
  };


  const responsiveMegaBox1 = (megabox) => {
    if(width <= 1199){
      if (megabox) {
        setMegaboxtoggle1(!megabox);
      } else {
        setMegaboxtoggle1(!megabox);
      }
    }
  }
  const responsiveMegaBox2 = (megabox) => {
    if(width <= 1199){
      if (megabox) {
        setMegaboxtoggle2(!megabox);
      } else {
        setMegaboxtoggle2(!megabox);
      }
    }
  }
  const responsiveMegaBox3 = (megabox) => {
    if(width <= 1199){
      if (megabox) {
        setMegaboxtoggle3(!megabox);
      } else {
        setMegaboxtoggle3(!megabox);
      }
    }
  }
  const responsiveMegaBox4 = (megabox) => {
    if(width <= 1199){
      if (megabox) {
        setMegaboxtoggle4(!megabox);
      } else {
        setMegaboxtoggle4(!megabox);
      }
    }
  }

  const OnLevelMenu = (menu) => {
    setBonusUI(false)
    document.querySelector(".mega-menu-container").classList.remove("d-block")
    setLevelMenu(!menu)
  }

  return (
    <Fragment>
      <div className="header-logo-wrapper" id="out_side_click">
        <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default/`}>
            <img className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
            <img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" />
          </Link>
        </div>
        <div className="toggle-sidebar" onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? {display:"block"} : {display:"none"}}>
          <Sliders className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
        </div>
      </div>
      <Col className="left-header horizontal-wrapper pl-0">
        <ul className="horizontal-menu">
          <li className="mega-menu outside">
          <a className={`nav-link ${bonusui ? 'active' : ''}`} href="#javascript" onClick={() => ToggleBonusUI(bonusui)}><Layers /><span>{BonusUi}</span></a>
            <div className="mega-menu-container nav-submenu menu-to-be-close" style={bonusui ? { display: "" } : { display: "none" }}>
                <Container fluid={true}>
                  <Row>
                    <Col className="mega-box" onClick={() => responsiveMegaBox1(megaboxtoggle1)}>
                      <div className="mobile-title d-none">
                        <h5>{MegaMenu}</h5><X onClick={() => responsiveMegaMenuclose()} />
                      </div>
                      <div className="link-section icon">
                        <div className={`${megaboxtoggle1 ? "active" : ""}`}>
                          <h6>{ErrorPage}</h6>
                        </div>
                        <ul className={`${megaboxtoggle1 ? "d-none" : ""}`}>
                          {errorPages.map((pagesItem, i) =>
                            <li key={i}>
                              <Link to={pagesItem.path}>{pagesItem.title}</Link>
                            </li>)}
                        </ul>
                      </div>
                    </Col>
                    <Col className="mega-box" onClick={() => responsiveMegaBox2(megaboxtoggle2)}>
                      <div className="link-section doted">
                        <div className={`${megaboxtoggle2 ? "active" : ""}`}>
                          <h6>{Authentication}</h6>
                        </div>
                        <ul className={`${megaboxtoggle2 ? "d-none" : ""}`}>
                          {authPages.map((pagesItem, i) =>
                            <li key={i}><Link to={pagesItem.path+'/'+layout}>{pagesItem.title}</Link></li>
                          )}

                        </ul>
                      </div>
                    </Col>
                    <Col className="mega-box" onClick={() => responsiveMegaBox3(megaboxtoggle3)}>
                      <div className="link-section dashed-links">
                        <div className={`${megaboxtoggle3 ? "active" : ""}`}>
                          <h6>{UsefullPages}</h6>
                        </div>
                        <ul className={`${megaboxtoggle3 ? "d-none" : ""}`}>
                          {usefullPages.map((pagesItem, i) =>
                            <li key={i}><Link to={pagesItem.path}>{pagesItem.title}</Link></li>
                          )}
                        </ul>
                      </div>
                    </Col>
                    <Col className="mega-box" onClick={() => responsiveMegaBox4(megaboxtoggle4)}>
                      <div className="link-section">
                        <div className={`${megaboxtoggle4 ? "active" : ""}`}>
                          <h6>{ComingSoon}</h6>
                        </div>
                        <ul className={`svg-icon ${megaboxtoggle4 ? "d-none" : ""}`}>
                          {comingsoonPages.map((pagesItem, i) =>
                            <li key={i}><Link to={pagesItem.path}><pagesItem.icon />{pagesItem.title}</Link></li>
                          )}
                        </ul>

                      </div>
                    </Col>
                  </Row>
                </Container>
            </div>
          </li>
          <li className="level-menu outside"><a className={levelMenu ? "nav-link active" : "nav-link"} href="#javascript" onClick={() => OnLevelMenu(levelMenu)}><Inbox/><span>{LevelMenu}</span></a>
            <ul className="header-level-menu menu-to-be-close" style={levelMenu ? { display: "" } : { display: "none" }}>
              <li><Link to={`${process.env.PUBLIC_URL}/app/file-manager/${layout}`}><GitPullRequest/><span>{FileManager}</span></Link></li>
              <li><a href="#javascript"><Users/><span>{"Users"}</span></a>
                <ul className="header-level-sub-menu">
                  <li><Link to={`${process.env.PUBLIC_URL}/app/users/userProfile/${layout}`}><User/><span>{UserProfile}</span></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/app/users/userEdit/${layout}`}><UserMinus/><span>{UserEdit}</span></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/app/users/userCards/${layout}`}><UserCheck/><span>{UsersCards}</span></Link></li>
                </ul>
              </li>
              <li><Link to={`${process.env.PUBLIC_URL}/app/kanban-board/${layout}`}><Airplay/><span>{KanbanBoard}</span></Link></li>
              <li><Link to={`${process.env.PUBLIC_URL}/app/bookmark/${layout}`}><Heart/><span>{Bookmark}</span></Link></li>
              <li><Link to={`${process.env.PUBLIC_URL}/app/social-app/${layout}`}><Zap/><span>{SocialApp}</span></Link></li>
            </ul>
          </li>
        </ul>
      </Col>
    </Fragment>
  );
}

export default Leftbar;