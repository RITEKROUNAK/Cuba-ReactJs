import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody} from "reactstrap"
const PopoverBasicItem = props => {
  const {item} = props;
  const [popover, setPopover] = useState(false)
  const Toggle = () => setPopover(!popover);
  return (
    <>
     
      <Button color={item.btncolor} className="example-popover" id={"Popover-" + item.id}>{item.btntext}</Button>
      <Popover
        placement={item.placement}
        isOpen={popover}
        target={"Popover-" + item.id}
        toggle={Toggle}
        trigger={item.trigger}
        >
        <PopoverHeader>{item.Popoverheader}</PopoverHeader>
        <PopoverBody>
          {item.Popoverbody}
        </PopoverBody>
      </Popover>
    </>
  );
};

const PopoverDirectionItem = props => {
    const {item} = props;
    const [popover, setPopover] = useState(false)
    const DirectionToggle = () => setPopover(!popover);
    return (
      <>
       
        <Button color={item.btncolor} className="example-popover" id={"Popover-" + item.id}>{item.btntext}</Button>
        <Popover
          placement={item.placement}
          isOpen={popover}
          target={"Popover-" + item.id}
          toggle={DirectionToggle}>
          <PopoverHeader>{item.Popoverheader}</PopoverHeader>
          <PopoverBody>
            {item.Popoverbody}
          </PopoverBody>
        </Popover>
      </>
    );
  };
  

  const PopoverHtmlContentItem = props => {
    const {item} = props;
    const [popover, setPopover] = useState(false)
    const HtmlContentToggle = () => setPopover(!popover);
    return (
      <>
        <Button color={item.btncolor} className="example-popover" id={"Popover-" + item.id}>{item.btntext}</Button>
        <Popover
          placement={item.placement}
          isOpen={popover}
          target={"Popover-" + item.id}
          toggle={HtmlContentToggle}>
          <PopoverHeader>{item.Popoverheader}</PopoverHeader>
          <PopoverBody>
            {item.Popoverbody}
          </PopoverBody>
        </Popover>
      </>
    );
  };

  const PopoverOffsetItem = props => {
    const {item} = props;
    const [popover, setPopover] = useState(false)
    const OffsetToggle = () => setPopover(!popover);
    return (
      <>
       
        <Button color={item.btncolor} className="example-popover" id={"Popover-" + item.id}>{item.btntext}</Button>
        <Popover
          placement={item.placement}
          isOpen={popover}
          target={"Popover-" + item.id}
          toggle={OffsetToggle}
          offset={item.offset}
          trigger={item.trigger}>
              
          <PopoverHeader>{item.Popoverheader}</PopoverHeader>
          <PopoverBody>
            {item.Popoverbody}
          </PopoverBody>
        </Popover>
      </>
    );
  };
  

export  const MultiPopoverBasic = props => {
  return (
    <>
      {[
        {
          id:1,
          placement: "right",
          Popoverheader:"Popover title",
          Popoverbody:'And heres some amazing content. Its very engaging. Right?',
          btncolor:'primary',
          btntext:'Click to toggle popover',
        },
        {
          id:2,
          Popoverheader:"Popover title",
          Popoverbody:'And heres some amazing content. Its very engaging. Right?',
          btncolor:'primary',
          btntext:'Dismissible popover'
        },
        {
          id:3,
          placement: "bottom",
          Popoverheader:"Popover title",
          Popoverbody:'And heres some amazing content. Its very engaging. Right?',
          btncolor:'primary',
          btntext:'On Hover Tooltip',
          trigger:"hover"
        },
      ].map((popover, i) => {
        return <PopoverBasicItem key={i} item={popover} />;
      })}
    </>
  );
};

export  const MultiPopoverDirection = props => {
    return (
      <>
        {[
          {
            id:4,
            placement: "top",
            Popoverheader:"Popover title",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:'Popover on top'
          },
          {
            id:5,
            placement: "right",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:'Popover on right'
          },
          {
            id:6,
            placement: "bottom",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:'Popover on bottom'
          },
          {
            id:7,
            placement: "left",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:'Popover on left'
          },
        ].map((popover, i) => {
          return <PopoverDirectionItem key={i} item={popover} />;
        })}
      </>
    );
  };
  
  const Popoverbody = <>{"Just add"} <code>{"data-html='true'"}</code>{"attribute and you can purse"}<span style={{marginLeft:'3px',marginRight:'3px'}}><b>{"html"}</b></span>{"code"}</>
  export  const MultiPopoverHtmlContent = props => {
    return (
      <>
        {[
          {
            id:8,
            placement: "top",
            Popoverheader:"Popover title",
            Popoverbody:Popoverbody,
            btncolor:'primary',
            btntext:'Popover on top'
          },
          {
            id:9,
            placement: "right",
            Popoverbody:Popoverbody,
            btncolor:'primary',
            btntext:'Popover on right'
          },
          {
            id:10,
            placement: "bottom",
            Popoverbody:Popoverbody,
            btncolor:'primary',
            btntext:'Popover on bottom'
          },
          {
            id:11,
            placement: "left",
            Popoverbody:Popoverbody,
            btncolor:'primary',
            btntext:'Popover on left'
          },
        ].map((popover, i) => {
          return <PopoverHtmlContentItem key={i} item={popover} />;
        })}
      </>
    );
  };

  export  const MultiPopoverOffset = props => {
    return (
      <>
        {[
          {
            id:12,
            placement: "top",
            Popoverheader:"Popover title",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:"20px 20px",
            offset:"20px,20px"
          },
          {
            id:13,
            placement: "top",
            Popoverheader:"Popover title",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:"0px",
            offset:"0px"
          },
          {
            id:14,
            placement: "top",
            Popoverheader:"Popover title",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:"20px 20px On Hover",
            offset:"20px,20px",
            trigger:"hover"
           
          },
          {
            id:15,
            placement: "top",
            Popoverheader:"Popover title",
            Popoverbody:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
            btncolor:'primary',
            btntext:"0px On Hover",
            offset:"0px",
            trigger:"hover"
           
          },
        ].map((popover, i) => {
          return <PopoverOffsetItem key={i} item={popover} />;
        })}
      </>
    );
  };

