import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Star } from 'react-feather';
import { Col, Button,Input,Row } from 'reactstrap'
import { MENUITEMS } from '../sidebar/menu'
import { Link } from 'react-router-dom'
import {Bookmark,AddNewBookmark,Back} from '../../constant'

const Bookmarks = (props) => {
    // eslint-disable-next-line
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const [bookmarkSearch, SetBookmarkSearch] = useState(false)
    const [bookmarkItems, setBookmarkItems] = useState([]);
    const [bookmarkDropDown, setBookmarkDropDown] = useState(false)

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('')
            setSearchResult([])
            SetBookmarkSearch(false)
            document.querySelector(".filled-bookmark").classList.remove('is-open');
            document.querySelector(".page-wrapper").classList.remove("offcanvas-bookmark");
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        mainmenu.map(menuItems => {
            menuItems.Items.filter(items => {
                if (items.bookmark) {
                    setBookmarkItems(bookmarkItems => [...bookmarkItems, items])
                }
                return items
            })
            return menuItems
        });
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [mainmenu, escFunction]);

    const handleSearchKeyword = (keyword) => {

        keyword ? addFix() : removeFix()
        const items = [];
        setSearchValue(keyword)
        mainmenu.map(menuItems => {
            menuItems.Items.filter(Items => {
                if (Items.title.toLowerCase().includes(keyword) && Items.type === 'link') {
                    items.push(Items);
                }
                if (!Items.children) return false
                Items.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = Items.icon
                        items.push(subItems);
                    }
                    if (!subItems.children) return false
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = Items.icon
                            items.push(suSubItems);
                        }
                        return suSubItems
                    })
                    return subItems
                })
                checkSearchResultEmpty(items)
                setSearchResult(items);
                return Items
            });
            return menuItems
        });
    }

    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            document.querySelector(".empty-bookmark").classList.add('is-open');

        } else {
            document.querySelector(".empty-bookmark").classList.remove('is-open');
        }
    }

    const addFix = () => {
        document.querySelector(".filled-bookmark").classList.add('is-open');
    }

    const removeFix = () => {
        setSearchValue('')
        setSearchResult([])
        document.querySelector(".filled-bookmark").classList.remove('is-open');
    }

    const addToBookmark = (event, items) => {
        const index = bookmarkItems.indexOf(items);
        if (index === -1 && !items.bookmark) {
            items.bookmark = true;
            event.currentTarget.classList.add('starred');
            setBookmarkItems([...bookmarkItems, items])
        } else {
            event.currentTarget.classList.remove('starred');
            bookmarkItems.splice(index, 1);
            setBookmarkItems(bookmarkItems)
            items.bookmark = false;
        }
    }

    const removeOffcanvas = () => {
        if (bookmarkSearch) {
            setSearchValue('')
            setSearchResult([])
            document.querySelector(".filled-bookmark").classList.remove('is-open');
            document.querySelector(".page-wrapper").classList.remove("offcanvas-bookmark");
        }
        SetBookmarkSearch(!bookmarkSearch)
    }

    const addnewbookmark = () => {
        document.querySelector(".flip-card-inner").classList.add("flipped");
    };
    const backtobookmark = () => {
        document.querySelector(".flip-card-inner").classList.remove("flipped");
    };


    return (
        <Fragment>
            <li className="onhover-dropdown">
                <div className="notification-box" onClick={() => setBookmarkDropDown(!bookmarkDropDown)}><Star/></div>
                <div className={`onhover-show-div bookmark-flip ${bookmarkDropDown ? "active" : ""}`}>
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front">
                        <ul className="droplet-dropdown bookmark-dropdown">
                            <li className="gradient-primary" onClick={removeOffcanvas}><Star/>
                            <h6 className="f-18 mb-0">{Bookmark}</h6>
                            </li>
                            <li className="custom-scrollbar">
                            <Row>
                                {bookmarkItems.map((items, index) => {
                                    return (
                                    <Col xs="4" className="text-center" key={index}>
                                        <Link to={items.path}>
                                        <items.icon id={`${items[index]}`} />
                                        </Link>
                                    </Col>
                                    );
                                })}
                            </Row>
                            </li>
                            <li className="text-center">
                            <Button className="flip-btn" onClick={addnewbookmark}>{AddNewBookmark}</Button>
                            </li>
                        </ul>
                        </div>
                        <div className="back">
                        <ul>
                            <li>
                            <div className="droplet-dropdown bookmark-dropdown flip-back-content">
                                <Input 
                                type="text" 
                                placeholder="search..."
                                value={searchValue}
                                onChange={(e) => handleSearchKeyword(e.target.value)}/>

                                <div className="Typeahead-menu filled-bookmark custom-scrollbar" id="search-outer">
                                    {searchValue ?
                                        searchResult.map((data, index) => {
                                            return (
                                                <div className="ProfileCard u-cf" key={index}>
                                                    <div className="ProfileCard-avatar">
                                                        <data.icon />
                                                    </div>
                                                    <div className="ProfileCard-details">
                                                        <div className="ProfileCard-realName">
                                                            <Link
                                                                to={data.path}
                                                                className="realname"
                                                                onClick={removeFix}
                                                            >
                                                                {data.title}
                                                            </Link>
                                                            <span className="pull-right">
                                                                <a href="#javascript">
                                                                    <i className="fa fa-star-o mt-1 icon-star" onClick={(e) => addToBookmark(e, data)}></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : ""}
                                </div>
                                <div className="Typeahead-menu empty-bookmark">
                                    <div className="tt-dataset tt-dataset-0">
                                        <div className="EmptyMessage">
                                            {"Opps!! There are no result found."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <Button className="d-block flip-back" onClick={backtobookmark} >{Back}</Button>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </li>
        </Fragment>
    );
}

export default Bookmarks;