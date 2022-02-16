import React, { useState } from "react";
import {Dropdown,DropdownMenu, DropdownItem,Button,ButtonGroup } from 'reactstrap';
const ColorDropdown = props => {
  const {Buttonitem} = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <div className="btn-group mb-0">
        <Button className="dropbtn" color={Buttonitem.btncolor} >{"Action"}<span><i className="icofont icofont-arrow-down"></i></span></Button>
        <DropdownMenu className="dropdown-content">
            <DropdownItem href="#">{Buttonitem.item1}</DropdownItem>
            <DropdownItem href="#">{Buttonitem.item2}</DropdownItem>
            <DropdownItem href="#">{Buttonitem.item3}</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem href="#">{Buttonitem.item4}</DropdownItem>
        </DropdownMenu>
        </div>
    </Dropdown>
    </>
  );
};

const SplitDropdown = props => {
    const {Splititem} = props;
    return (
      <>
      <div className="btn-group">
        <Button color={Splititem.btncolor}>Primary Button</Button>
        <Dropdown className="separated-btn">
        <Button color={Splititem.btncolor}><i className="icofont icofont-arrow-down"></i></Button>
        <DropdownMenu className="dropdown-content digits">
            <DropdownItem href="#">{Splititem.item}</DropdownItem>
            <DropdownItem href="#">{Splititem.item}</DropdownItem>
            <DropdownItem href="#">{Splititem.item}</DropdownItem>
        </DropdownMenu>
        </Dropdown>
     </div>
      </>
    );
  };

  const RoundedDropdown = props => {
    const {roundeditem} = props;
    return (
      <>
       <Dropdown>
            <ButtonGroup className="mb-0">
            <Button className="dropbtn btn-round" color={roundeditem.btncolor}>{roundeditem.btntext}<span><i className="icofont icofont-arrow-down"></i></span></Button>
            <DropdownMenu className="dropdown-content">
            <DropdownItem href="#">{roundeditem.item1}</DropdownItem>
            <DropdownItem href="#">{roundeditem.item2}</DropdownItem>
            <DropdownItem href="#">{roundeditem.item3}</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem href="#">{roundeditem.item4}</DropdownItem>
            </DropdownMenu>
            </ButtonGroup>
        </Dropdown>
      </>
    );
  };

export const DropDownButtonColor = props => {
    return (
      <>
        {[
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"primary"
  
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"secondary"
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"success"
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"info"
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"warning"
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"danger"
          }
        ].map((dropdownItem, i) => {
          return <ColorDropdown key={i} Buttonitem={dropdownItem}/>;
        })}
      </>
    );
  };

  export const DropDownSplit = props => {
    return (
      <>
        {[
          {
              item:"Link 1",
              btncolor:"primary"
  
          },
          {
              item:"Link 1",
              btncolor:"secondary"
          },
          {
              item:"Link 1",
              btncolor:"success"
          },
          {
              item:"Link 1",
              btncolor:"info"
          },
          {
              item:"Link 1",
              btncolor:"warning"
          },
          {
              item:"Link 1",
              btncolor:"danger"
          }
        ].map((dropdownItem, i) => {
          return <SplitDropdown key={i} Splititem={dropdownItem}/>;
        })}
      </>
    );
  };

  export const DropDownRounded = props => {
    return (
      <>
        {[
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"primary",
              btntext:'Primary Button'
  
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"secondary",
              btntext:'Secondary Button'
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"success",
              btntext:'Success Button'
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"info",
              btntext:'Info Button'
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"warning",
              btntext:'Warning Button'
          },
          {
              item1:"Action",
              item2:"Another Action",
              item3:"Something Else Here",
              item4:"Separated Link",
              btncolor:"danger",
              btntext:'Danger Button'
          }
        ].map((dropdownItem, i) => {
          return <RoundedDropdown key={i} roundeditem={dropdownItem}/>;
        })}
      </>
    );
  };

