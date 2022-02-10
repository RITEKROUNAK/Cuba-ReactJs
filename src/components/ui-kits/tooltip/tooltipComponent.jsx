import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";
const TooltipDirectionItem = props => {
  const {item} = props;
  const [tooltip, setTooltip] = useState(false)
  const DirectionToggle = () => setTooltip(!tooltip);
  return (
    <>
       <Button color="primary" id={"Tooltip-" + item.id}>
        {item.tooltip}
      </Button>
      <Tooltip
        placement={item.placement}
        isOpen={tooltip}
        target={"Tooltip-" + item.id}
        toggle={DirectionToggle}
      >
        {item.tooltip}
      </Tooltip>
    </>
  );
};

const TooltipHtmlElementItem = props => {
  const {item} = props;
  const [tooltip, setTooltip] = useState(false)
  const HtmlelElementToggle = () => setTooltip(!tooltip);
  return (
    <>
       <Button color="primary" id={"Tooltip-" + item.id} onClick={HtmlelElementToggle}>
        {item.btntext}
      </Button>
      <Tooltip
        placement={item.placement}
        isOpen={tooltip}
        target={"Tooltip-" + item.id}
      >
        {item.tooltip}
      </Tooltip>
    </>
  );
};

const TooltipOffsetItem = props => {
  const {item} = props;
  const [tooltip, setTooltip] = useState(false)
  const OffsetToggle = () => setTooltip(!tooltip);
  return (
    <>
      <Button color="primary" id={"Tooltip-" + item.id} onClick={OffsetToggle} >
        {item.btntext}
      </Button>
      <Tooltip
        placement={item.placement}
        isOpen={tooltip}
        target={"Tooltip-" + item.id}
        toggle={OffsetToggle}
        offset={item.offset}
      >
        {item.tooltip}
      </Tooltip>
    </>
  );
};



export const MultiTooltipDirection = props => {
  return (
    <>
      {[
        {
          id:1,
          placement: "top",
          tooltip:"Tooltip on top"
        },
        {
          id:2,
          placement: "right",
          tooltip:"Tooltip on right"
        },
        {
          id:3,
          placement: "bottom",
          tooltip:"Tooltip on bottom"
        },
        {
          id:4,
          placement: "left",
          tooltip:"Tooltip on left"
        }
      ].map((tooltip, i) => {
        return <TooltipDirectionItem key={i} item={tooltip} />;
      })}
    </>
  );
};


const tooltip = <>{"Tooltip"} <b>with</b> <code>HTML</code></>
export const MultiTooltipHtmlElement = props => {
  return (
    <>
      {[
        {
            id:5,
            placement: "top",
            btntext:"Click me",
            tooltip:tooltip
        },
        {
            id:6,
            placement: "right",
            btntext:"Click me",
            tooltip:tooltip
        },
        {
            id:7,
            placement: "bottom",
            btntext:"Click me",
            tooltip:tooltip
        },
        {
            id:8,
            placement: "left",
            btntext:"Click me",
            tooltip:tooltip
        }
      ].map((tooltip, i) => {
        return <TooltipHtmlElementItem key={i} item={tooltip}/>;
      })}
    </>
  );
};

export  const MultiTooltipOffset = props => {
  return (
    <>
      {[
        {
          id:9,
          placement: "top",
          tooltip:"Tooltip title",
          btntext:"20px 20px",
          offset:"20px,20px"
        },
        {
          id:10,
          placement: "top",
          tooltip:"Tooltip title",
          btntext:"0px -20px",
          offset:"0px,20px"
        },
        {
          id:11,
          placement: "top",
          tooltip:"Tooltip title",
          btntext:"20px 0px",
          offset:"20px,0px"
        },
        {
          id:12,
          placement: "top",
          tooltip:"Tooltip title",
          btntext:"-30px -30px",
          offset:"-30px,-0px"
        }
      ].map((tooltip, i) => {
        return <TooltipOffsetItem key={i} item={tooltip} />;
      })}
    </>
  );
};

