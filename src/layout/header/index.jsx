import React, { Fragment,useState,useEffect,useCallback } from 'react';
import {Form,Row} from 'reactstrap'
import {X} from 'react-feather'
import {MENUITEMS} from '../sidebar/menu'
import LeftHeader from './leftbar'
import RightHeader from './rightbar'
import {Link} from 'react-router-dom'
import {Loading} from '../../constant'
import { useSelector } from 'react-redux'

const Header = (props) => {

  // eslint-disable-next-line
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [searchValue, setsearchValue] = useState('');
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState(false);
  // eslint-disable-next-line
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);
  const layout_type = useSelector(content => content.Customizer.layout)
  const layout_version = useSelector(content => content.Customizer.mix_background_layout)
  
  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      setsearchValue('')
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
        document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix()
    const items = [];
    setsearchValue(keyword)
    mainmenu.map(menuItems => {
      menuItems.Items.filter(mItems => {
        if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
            items.push(mItems);
        }
        if (!mItems.children) return false
        mItems.children.filter(subItems => {
            if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                subItems.icon = mItems.icon
                items.push(subItems);
            }
            if (!subItems.children) return false
            subItems.children.filter(suSubItems => {
                if (suSubItems.title.toLowerCase().includes(keyword)) {
                    suSubItems.icon = mItems.icon
                    items.push(suSubItems);
                }
                return suSubItems
            })
            return subItems
        })
        checkSearchResultEmpty(items)
        setsearchValue(items);
        return mItems
    });
        return menuItems
  });
  }

  const checkSearchResultEmpty = (items) => {
      if (!items.length) {
          setSearchResultEmpty(true);
          document.querySelector(".empty-menu").classList.add('is-open');
      } else {
          setSearchResultEmpty(false);
          document.querySelector(".empty-menu").classList.remove('is-open');
      }
  }

  const addFix = () => {
      setSearchResult(true);
      document.querySelector(".Typeahead-menu").classList.add('is-open');
      document.body.className = `${layout_version} ${layout_type} offcanvas`
  }

  const removeFix = () => { 
      setSearchResult(false)
      setsearchValue('')
      document.querySelector(".Typeahead-menu").classList.remove('is-open');
      document.body.className = `${layout_version} ${layout_type}`
  }

  return (
      <Fragment>
      <div className="page-header">
      <Row className="header-wrapper m-0">
      <Form className="form-inline search-full" action="#" method="get">
          <div className="form-group w-100">
            <div className="Typeahead Typeahead--twitterUsers">
              <div className="u-posRelative">
                <input 
                    className="Typeahead-input form-control-plaintext w-100" 
                    id="demo-input" 
                    type="search" 
                    placeholder="Search Cuba .."
                    defaultValue={searchValue}
                    onChange={(e) => handleSearchKeyword(e.target.value)}
                />
                  <div className="spinner-border Typeahead-spinner" role="status">
                    <span className="sr-only">{Loading}</span>
                  </div><X className="close-search" onClick={() => document.querySelector(".search-full").classList.remove("open")}/>
              </div>
                <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                  {searchValue ?
                      searchValue.map((data, index) => {
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
                                      </div>
                                  </div>
                              </div>
                          )
                      }) : ''
                  }
                </div>
                <div className="Typeahead-menu empty-menu">
                    <div className="tt-dataset tt-dataset-0">
                        <div className="EmptyMessage">
                            {"Opps!! There are no result found."}
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </Form> 
      <LeftHeader/>
      <RightHeader/>
      </Row>
    </div>
    </Fragment>
  );
}

export default Header;