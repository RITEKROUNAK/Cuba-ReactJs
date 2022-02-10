import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { Container, Row } from 'reactstrap'
import { Nav, NavLink, TabContent, TabPane, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Media } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { useHistory} from "react-router-dom";
import { Configuration, ModalTitle, CopyText, Cancel, LayoutType, LTR, RTL, Box, SidebarType, SidebarSettings, Default, Border, IconColor, RouterAnimation, ZoomFade, SildeFade, Fade, ZoomOut, None, MixLayout, FadeBottom, UnlimitedColor, QuickOption, BuyNow, Support, CheckFeatures, Document, Apply } from '../../constant'
import {
    ADD_LAYOUT,
    ADD_SIDEBAR_TYPES,
    ADD_SIDEBAR_SETTINGS,
    ADD_COLOR,
    ADD_COSTOMIZER,
    ADD_MIX_BACKGROUND_LAYOUT,
    ROUTER_ANIMATION
} from '../../redux/actionTypes'
import one from '../../assets/images/layouts/1.jpg';
import two from '../../assets/images/layouts/2.jpg';
import three from '../../assets/images/layouts/3.jpg';
import four from '../../assets/images/layouts/4.jpg';
import five from '../../assets/images/layouts/5.jpg';
import six from '../../assets/images/layouts/6.jpg';
import seven from '../../assets/images/layouts/7.jpg';
import eight from '../../assets/images/layouts/8.jpg';
import nine from '../../assets/images/layouts/9.jpg';
import ten from '../../assets/images/layouts/10.jpg';
import eleven from '../../assets/images/layouts/11.jpg';
import twelve from '../../assets/images/layouts/12.jpg';
import { classes } from '../../data/layouts';

let DefaultLayout = {};
const Themecustomizer = (props) => {
    const [rightSidebar, setRightSidebar] = useState(true);
    const [showHorizontal, setShowHorizontal] = useState(true);
    const [showBoxLayout, setshowBoxLayout] = useState(true);
    // eslint-disable-next-line
    const [activeTab1, setActiveTab1] = useState('1');
    const default_color = localStorage.getItem('default_color');
    const secondary_color = localStorage.getItem('secondary_color');
    const layout_animation = localStorage.getItem('animation');
    const [modal, setModal] = useState();
    const configDB = useSelector(content => content.Customizer.customizer);
    const dispatch = useDispatch();
    const [layout_type, setLayout_type] = useState(configDB.settings.layout_type);
    const [sidebar_type, setSidebar_type] = useState(configDB.settings.sidebar.type);
    const sidebar_setting = configDB.settings.sidebar_setting;
    const mix_background_layout = configDB.color.mix_background_layout;
    const config_primary = configDB.color.primary_color;
    const config_secondary = configDB.color.secondary_color;
    const [colorBackground1, setColorBackground1] = useState(default_color || config_primary)
    const [colorBackground2, setColorBackground2] = useState(secondary_color || config_secondary)
    const width = useWindowSize()
    let history = useHistory();
 
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
    // fetch object which is default set in sidebar_type, used when user not select any layout
    const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === sidebar_type);
    // somecases taken static url so need to modified
    const modifyURL= process.env.PUBLIC_URL+"/dashboard/default/"+Object.keys(defaultLayoutObj).pop()
    // fetch id from URL
    const  id  = window.location.pathname==='/'?history.push(modifyURL):window.location.pathname.split('/').pop()
    
    // fetch object by getting URL
    const layoutobj = classes.find(item=> Object.keys(item).pop() === id) ;   
    const layout = id  ?layoutobj :defaultLayoutObj
    DefaultLayout= defaultLayoutObj

        handlePageLayputs(layout);
        dispatch({ type: ADD_COSTOMIZER });

        dispatch({
            type: ADD_COLOR,
            payload: {
                default_color,
                secondary_color,
            }
        })

        dispatch({ type: ROUTER_ANIMATION, payload: layout_animation });

        if (default_color == null || secondary_color == null) {
            document.documentElement.style.setProperty('--theme-deafult', config_primary);
            document.documentElement.style.setProperty('--theme-secondary', config_secondary);
            dispatch({
                type: ADD_COLOR,
                payload: {
                    primary_color: config_primary,
                    secondary_color: config_secondary,
                }
            })
        } else {
            document.documentElement.style.setProperty('--theme-deafult', default_color);
            document.documentElement.style.setProperty('--theme-secondary', secondary_color);
            dispatch({
                type: ADD_COLOR,
                payload: {
                    primary_color: default_color,
                    secondary_color: secondary_color,
                }
            })
        }

        //set layout_type
        document.body.className = `${mix_background_layout} ${layout_type}`
        document.documentElement.dir = layout_type;
        console.log("width", configDB.settings.sidebar.type);
        //set sidebar_type
       if (width <= 991 && configDB.settings.sidebar.type.split(' ').includes('horizontal-wrapper')) {
            document.querySelector(".page-wrapper").className = 'page-wrapper compact-wrapper'
            document.querySelector(".page-header").className = 'page-header close_icon';
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon"
        } else {
            document.querySelector(".page-wrapper").className = 'page-wrapper ' + configDB.settings.sidebar.type;
            document.querySelector(".page-header").className = 'page-header close_icon';
            document.querySelector(".sidebar-wrapper").className = 'sidebar-wrapper close_icon';
        }
 

        //set sidebar setting
        document.querySelector(".sidebar-wrapper").setAttribute('sidebar-layout', sidebar_setting);
        // eslint-disable-next-line
    }, [width]);

    const toggle = () => {
        setModal(!modal)
    }

    const openCustomizer = (type) => {
        setActiveTab1(type)
        setRightSidebar(!rightSidebar)
        if (rightSidebar) {          
            document.querySelector(".customizer-contain").classList.add('open');
            document.querySelector(".customizer-links").classList.add('open');
        }
    }

    const handlePageLayputs= (type) => {
        let key = Object.keys(type).pop();
        let val =  Object.values(type).pop();
        document.querySelector(".page-wrapper").className = 'page-wrapper ' + val;
        dispatch({ type: ADD_SIDEBAR_TYPES, payload: { type: val} })
        localStorage.setItem("layout",key)
        history.push(key);
    }

    const closeCustomizer = () => {
        setRightSidebar(!rightSidebar)
        document.querySelector(".customizer-contain").classList.remove('open');
        document.querySelector(".customizer-links").classList.remove('open');
    }

    const handleLayout = (layout) => {
        setLayout_type(layout)
        setShowHorizontal(true)
        document.querySelectorAll(".main-layout li").forEach((item) => {
            item.classList.remove('active');
        });
        document.body.className = `${mix_background_layout} ${layout}`
        document.documentElement.dir = layout;

        if (layout === "box-layout") {
            setShowHorizontal(false)
        }
        if (sidebar_type === "horizontal-wrapper" && layout === "box-layout") {
            document.querySelector(".page-wrapper").className = 'page-wrapper compact-wrapper'
        }
        if (width <= 991 && sidebar_type === "horizontal-wrapper" && layout === "box-layout") {
            document.querySelector(".page-wrapper").className = 'page-wrapper compact-wrapper'
            document.querySelector(".page-header").className = 'page-header ';
            document.querySelector(".sidebar-wrapper").className = 'sidebar-wrapper ';
        }
        dispatch({ type: ADD_LAYOUT, payload: layout });
    }

    const handleSidebarType = (e, type) => {
        e.preventDefault();
        setSidebar_type(type)
        document.querySelectorAll(".sidebar-type li").forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector(".page-wrapper").className = 'page-wrapper ' + type;
        e.currentTarget.classList.add('active');

        if (type === "horizontal-wrapper") {
            setshowBoxLayout(false)
        } else {
            setshowBoxLayout(true)
        }

        if (width <= 991 && type === "horizontal-wrapper") {
            document.querySelector(".page-wrapper").className = 'page-wrapper compact-wrapper'
            document.querySelector(".page-header").className = 'page-header close_icon';
            document.querySelector(".sidebar-wrapper").className = 'sidebar-wrapper close_icon';
        }
        dispatch({ type: ADD_SIDEBAR_TYPES, payload: { type} })
    }

    const handleSidebarSetting = (e, 
        ) => {
        e.preventDefault();
        document.querySelectorAll(".sidebar-setting li").forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector(".sidebar-wrapper").setAttribute('sidebar-layout', sidebar_setting);
        e.currentTarget.classList.add('active');
        dispatch({ type: ADD_SIDEBAR_SETTINGS, payload: sidebar_setting })

    }

    const handleCustomizerMix_Background = (e) => {
        e.preventDefault();
        document.querySelectorAll(".customizer-mix li").forEach((item) => {
            item.classList.remove('active');
        });
        document.body.className = `${e.currentTarget.getAttribute('data-attr')} ${layout_type}`;
        e.currentTarget.classList.add('active');
        dispatch({ type: ADD_MIX_BACKGROUND_LAYOUT, payload: e.currentTarget.getAttribute('data-attr') });
    }

    const selectAnimation = (e) => {
        localStorage.setItem("animation", e.target.value)
        dispatch({ type: ROUTER_ANIMATION, payload: e.target.value });
        window.location.reload();
    }

    const handleUnlimatedColor1Change = (e) => {
        const { value } = e.target
        setColorBackground1(value)
    }
    const handleUnlimatedColor2Change = (e) => {
        const { value } = e.target
        setColorBackground2(value)
    }
    const OnUnlimatedColorClick = () => {
        localStorage.setItem('default_color', colorBackground1);
        localStorage.setItem('secondary_color', colorBackground2);
        window.location.reload()
    }
    return (
        <Fragment>
            <div className="customizer-links">
                <Nav className="flex-column nac-pills">
                    <NavLink onClick={() => openCustomizer('2')}>
                        <div className="settings" >
                            <i className="icon-paint-bucket"></i>
                        </div>
                        <span>{QuickOption}</span>
                    </NavLink>
                    <NavLink onClick={() => openCustomizer('1')}>
                        <div className="settings" >
                            <i className="icon-settings"></i>
                        </div>
                        <span>{QuickOption}</span>
                    </NavLink>
                    <a className="nav-link" href="https://pixelstrap.freshdesk.com/">
                        <div><i className="icon-support"></i></div><span>{Support}</span>
                    </a>
                    <a className="nav-link" href="http://admin.pixelstrap.com/cuba/document/index.html">
                        <div><i className="icon-settings"></i></div><span>{Document}</span>
                    </a>
                    <a className="nav-link" href="http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks" >
                        <div><i className="icon-panel"></i></div><span>{CheckFeatures}</span>
                    </a>
                    <a className="nav-link" href="https://1.envato.market/3GVzd">
                        <div><i className="icon-shopping-cart-full"></i></div><span>{BuyNow}</span>
                    </a>
                </Nav>
            </div>

            <div className="customizer-contain">
                <div className="tab-content" id="c-pills-tabContent">
                    <div className="customizer-header">
                        <i className="icon-close" onClick={closeCustomizer}></i>
                        <h5>{"PREVIEW SETTINGS"}</h5>
                        <p className="mb-0">{"Try It Real Time"} <i className="fa fa-thumbs-o-up txt-primary"></i></p>
                        <Button color="primary" className="plus-popup mt-2" onClick={() => setModal(!modal)}>{Configuration}</Button>
                        <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
                            <ModalHeader toggle={toggle}>{ModalTitle}</ModalHeader>
                            <ModalBody>
                                <Container fluid={true} className="bd-example-row">
                                    <Row>
                                        <p>{"To replace our design with your desired theme. Please do configuration as mention"} </p>
                                        <p> <b> {"Path : data > customizer > config.jsx "}</b> </p>
                                    </Row>
                                    <pre>
                                        <code>
                                            <div> {"export class ConfigDB "}&#123;</div>
                                            <div>  {"static data"} = &#123;</div>
                                            <div>       {"settings"}&#58; &#123;</div>
                                            <div>           {"layout_type"}&#58;  '{configDB.settings.layout_type}',</div>

                                            <div>       {"sidebar"}&#58; &#123;</div>
                                            <div>           {"type"}&#58; '{configDB.settings.sidebar.type}',</div>
                                            <div>       &#125;,</div>
                                            <div>       {"sidebar_setting"}&#58; '{configDB.settings.sidebar_setting}', </div>
                                            <div>       &#125;,</div>
                                            <div>       {"color"}&#58; &#123;</div>
                                            <div>           {"primary_color"}&#58; '{configDB.color.primary_color}', </div>
                                            <div>           {"secondary_color"}&#58; '{configDB.color.secondary_color}', </div>
                                            <div>           {"mix_background_layout"}&#58; '{configDB.color.mix_background_layout}', </div>
                                            <div>       &#125;,</div>
                                            <div>       {"router_animation"}&#58; {"'fadeIn'"}</div>
                                            <div>   &#125;</div>
                                            <div> &#125;</div>
                                        </code>
                                    </pre>

                                </Container>
                            </ModalBody>
                            <ModalFooter>
                                <CopyToClipboard text={JSON.stringify(configDB)}>
                                    <Button
                                        color="primary"
                                        className="notification"
                                        onClick={() => toast.success("Code Copied to clipboard !", {
                                            position: toast.POSITION.BOTTOM_RIGHT
                                        })}
                                    >{CopyText}</Button>
                                </CopyToClipboard>
                                <Button color="secondary" onClick={toggle}>{Cancel}</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div className="customizer-body custom-scrollbar">
                        <TabContent activeTab={activeTab1}>
                            <TabPane tabId="1">
                                <h6>{LayoutType}</h6>
                                <ul className="main-layout layout-grid">
                                    <li className={`${layout_type === 'ltr' ? 'active' : ''}`} onClick={() => handleLayout('ltr')}>
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li><li></li><li></li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                <li className="bg-light sidebar"></li>
                                                <li className="bg-light body">
                                                    <span className="badge badge-primary">{LTR}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`${layout_type === 'rtl' ? 'active' : ''}`} onClick={() => handleLayout('rtl')}>
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li><li></li><li></li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                <li className="bg-light sidebar"></li>
                                                <li className="bg-light body">
                                                    <span className="badge badge-primary">{RTL}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {showBoxLayout ?
                                        <li className={`${layout_type === 'box-layout' ? 'active' : ''}`} onClick={() => handleLayout('box-layout')}>
                                            <div className="header bg-light">
                                                <ul>
                                                    <li></li><li></li><li></li>
                                                </ul>
                                            </div>
                                            <div className="body">
                                                <ul>
                                                    <li className="bg-light sidebar"></li>
                                                    <li className="bg-light body">
                                                        <span className="badge badge-primary">{Box}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        : ""}
                                </ul>
                                <h6 className="">{SidebarType}</h6>
                                <ul className="sidebar-type layout-grid">
                                    {showHorizontal ?
                                        <li data-attr="normal-sidebar" className="normal-sidebar" onClick={(e) => handleSidebarType(e, 'horizontal-wrapper')}>
                                            <div className="header bg-light">
                                                <ul> <li></li><li></li><li></li></ul>
                                            </div>
                                            <div className="body">
                                                <ul>
                                                    <li className="bg-dark sidebar"></li>
                                                    <li className="bg-light body"> </li>
                                                </ul>
                                            </div>
                                        </li>
                                        : ""}
                                    <li className="active" data-attr="compact-sidebar" onClick={(e) => handleSidebarType(e, 'compact-wrapper')}>
                                        <div className="header bg-light">
                                            <ul> <li></li><li></li><li></li></ul>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                <li className="bg-dark sidebar compact"></li>
                                                <li className="bg-light body"> </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <h6 className="">{SidebarSettings}</h6>
                                <ul className="sidebar-setting layout-grid">
                                    <li className="active" data-attr="default-sidebar" onClick={(e) => handleSidebarSetting(e, "default-sidebar")}>
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li><li></li><li></li>
                                            </ul>
                                        </div>
                                        <div className="body bg-light">
                                            <span className="badge badge-primary">{Default}</span>
                                        </div>
                                    </li>
                                    <li data-attr="border-sidebar" onClick={(e) => handleSidebarSetting(e, "border-sidebar")}>
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li><li></li><li></li>
                                            </ul>
                                        </div>
                                        <div className="body bg-light">
                                            <span className="badge badge-primary">{Border}</span>
                                        </div>
                                    </li>
                                    <li data-attr="iconcolor-sidebar" onClick={(e) => handleSidebarSetting(e, "iconcolor-sidebar")} >
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="body bg-light">
                                            <span className="badge badge-primary">{IconColor}</span>
                                        </div>
                                    </li>
                                </ul>
                                <h6>{RouterAnimation} {layout_animation}</h6>
                                <Input type="select" defaultValue={layout_animation} name="selectMulti" onChange={selectAnimation}>
                                    <option value="zoomfade">{ZoomFade}</option>
                                    <option value="slidefade">{SildeFade}</option>
                                    <option value="fadebottom">{FadeBottom}</option>
                                    <option value="fade">{Fade}</option>
                                    <option value="zoomout">{ZoomOut}</option>
                                    <option value="none">{None}</option>
                                </Input>

                                <h6>{UnlimitedColor}</h6>
                                <ul className="layout-grid unlimited-color-layout">
                                    <input type="color" name="Color-Background1" value={colorBackground1} onChange={(e) => handleUnlimatedColor1Change(e)} />
                                    <input type="color" name="Color-Background2" value={colorBackground2} onChange={(e) => handleUnlimatedColor2Change(e)} />
                                    <Button color="primary" className="color-apply-btn color-apply-btn" disabled={!(colorBackground1 && colorBackground2)} onClick={() => OnUnlimatedColorClick()}>{Apply}</Button>
                                </ul>

                                <h6 className="">{MixLayout}</h6>
                                <ul className="layout-grid customizer-mix">
                                    <li className="color-layout active" data-attr="light-only" onClick={handleCustomizerMix_Background}>
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                <li className="bg-light sidebar"></li>
                                                <li className="bg-light body"> </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="color-layout" data-attr="dark-sidebar" onClick={handleCustomizerMix_Background}>
                                        <div className="header bg-light">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                <li className="bg-dark sidebar"></li>
                                                <li className="bg-light body"> </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="color-layout" data-attr="dark-only" onClick={handleCustomizerMix_Background}>
                                        <div className="header bg-dark">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                <li className="bg-dark sidebar"></li>
                                                <li className="bg-dark body"> </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane tabId="2">
                                <ul className="sidebar-type layout-grid layout-types">
                                    <li data-attr="compact-sidebar"  onClick={(e) => handlePageLayputs(classes[0])} >
                                        <div className="layout-img"> <Media src={one}
                                            className="img-fluid" alt="" />
                                            <h6>Dubai</h6>
                                        </div>
                                    </li>
                                    <li className="only-body" data-attr="default-body" onClick={(e) => handlePageLayputs(classes[1])}>
                                        <div className="layout-img"><Media src={two}
                                            className="img-fluid" alt="" />
                                            <h6>London</h6>
                                        </div>
                                    </li>
                                    <li data-attr="modern-layout" onClick={(e) => handlePageLayputs(classes[2])}>
                                        <div className="layout-img"><Media src={nine}
                                            className="img-fluid" alt="" />
                                            <h6>Seoul</h6>
                                        </div>
                                    </li>
                                    <li data-attr="material-layout" onClick={(e) => handlePageLayputs(classes[3])}>
                                        <div className="layout-img"><Media src={ten}
                                            className="img-fluid" alt="" />
                                            <h6>Los Angeles</h6>
                                        </div>
                                    </li>
                                    <li ata-attr="dark-sidebar" onClick={(e) => handlePageLayputs(classes[4])}>
                                        <div className="layout-img"><Media src={three}
                                            className="img-fluid" alt="" />
                                            <h6>Paris</h6>
                                        </div>
                                    </li>
                                    <li data-attr="compact-wrap" onClick={(e) => handlePageLayputs(classes[5])}>
                                        <div className="layout-img"><Media src={four}
                                            className="img-fluid" alt="" />
                                            <h6>Tokyo</h6>
                                        </div>
                                    </li>
                                    <li data-attr="color-sidebar" onClick={(e) => handlePageLayputs(classes[6])}>
                                        <div className="layout-img"><Media src={five}
                                            className="img-fluid" alt="" />
                                            <h6>Madrid</h6>
                                        </div>
                                    </li>
                                    <li data-attr="compact-small" onClick={(e) => handlePageLayputs(classes[7])}>
                                        <div className="layout-img"><Media src={six}
                                            className="img-fluid" alt="" />
                                            <h6>Moscow</h6>
                                        </div>
                                    </li>
                                    <li data-attr="box-layout" className="box-layout" onClick={(e) => handlePageLayputs(classes[8])}>
                                        <div className="layout-img"><Media src={seven}
                                            className="img-fluid" alt="" />
                                            <h6>New York</h6>
                                        </div>
                                    </li>
                                    <li data-attr="enterprice-type" onClick={(e) => handlePageLayputs(classes[9])}>
                                        <div className="layout-img"><Media src={eight}
                                            className="img-fluid" alt="" />
                                            <h6>Singapore</h6>
                                        </div>
                                    </li>
                                    <li data-attr="material-icon" onClick={(e) => handlePageLayputs(classes[10])}>
                                        <div className="layout-img"><Media src={eleven}
                                            className="img-fluid" alt="" />
                                            <h6>Rome</h6>
                                        </div>
                                    </li>
                                    <li data-attr="advance-type" onClick={(e) => handlePageLayputs(classes[11])}>
                                        <div className="layout-img"><Media src={twelve}
                                            className="img-fluid" alt="" />
                                            <h6>Barcelona</h6>
                                        </div>
                                    </li>
                                </ul>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Themecustomizer;
export { DefaultLayout } ;