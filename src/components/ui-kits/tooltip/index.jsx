import React,{useState, Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Row,Col,Card,CardBody,CardHeader,Button,Tooltip } from 'reactstrap';
import {MultiTooltipDirection,MultiTooltipHtmlElement,MultiTooltipOffset} from './tooltipComponent'
import {BasicTooltip,HoverMe,PopoverTitle,Direction,HTMLElements,Offsets} from '../../../constant'

const Tooltips = (props) => {
    const [basictooltip, setbasictooltip] = useState(false);
    const toggle = () => setbasictooltip(!basictooltip);
    return (
            <Fragment>
            <Breadcrumb parent="Ui Kits" title="Tooltip" />
            <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{BasicTooltip}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <Button color="primary" id="TooltipExample">{HoverMe}</Button>
                    <Tooltip 
                        placement="top" 
                        isOpen={basictooltip} 
                        target="TooltipExample" 
                        toggle={toggle}>
                        {PopoverTitle}
                    </Tooltip>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{Direction}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiTooltipDirection/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{HTMLElements}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiTooltipHtmlElement/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{Offsets}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiTooltipOffset/>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </Container>
          </Fragment>
    );
}

export default Tooltips;