import React,{Fragment, useState} from 'react';
import {Card,CardHeader,CardBody} from 'reactstrap'
import {Accordion} from 'react-bootstrap';
import {CollapsibleGroupItem} from '../../../constant'

export const AllCloseAccordian = (props) => {
    return (
      <Fragment>
        <Card>
          <CardHeader>
          <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="0">
                {CollapsibleGroupItem}<span className="digits">1</span>
              </Accordion.Toggle>
          </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="0">
              <CardBody>
              {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
              </CardBody>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CardHeader>
          <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="1">
                {CollapsibleGroupItem}<span className="digits">2</span>
              </Accordion.Toggle>
          </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="1">
              <CardBody>
              {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
              </CardBody>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CardHeader>
          <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="2">
                {CollapsibleGroupItem}<span className="digits">3</span>
              </Accordion.Toggle>
          </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="2">
              <CardBody>
              {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
              </CardBody>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CardHeader>
          <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="3">
                {CollapsibleGroupItem}<span className="digits">4</span>
              </Accordion.Toggle>
          </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="3">
              <CardBody>
              {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
              </CardBody>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CardHeader>
          <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="4">
                {CollapsibleGroupItem}<span className="digits">5</span>
              </Accordion.Toggle>
          </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="4">
              <CardBody>
              {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
              </CardBody>
          </Accordion.Collapse>
        </Card>
      </Fragment>
      
    );
}

export const PrimaryColorAccordian = (props) => {
 
    return (
        <Fragment>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" eventKey="0">
                    {CollapsibleGroupItem}<span className="digits">1</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="0">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" eventKey="1">
                    {CollapsibleGroupItem}<span className="digits">2</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="1">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" eventKey="2">
                    {CollapsibleGroupItem}<span className="digits">3</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="2">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
        </Fragment>
      
    );
}

export const SecondaryColorAccordian = (props) => {
 
  return (
        <Fragment>
          <Card>
            <CardHeader className="bg-secondary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="secondary" eventKey="0">
                    {CollapsibleGroupItem}<span className="digits">1</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="0">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-secondary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="secondary" eventKey="1">
                    {CollapsibleGroupItem}<span className="digits">2</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="1">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-secondary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="secondary" eventKey="2">
                    {CollapsibleGroupItem}<span className="digits">3</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="2">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
        </Fragment>
    
  );
}

export const AccordionWithIcon = (props) => {
  return (
        <Fragment>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" eventKey="0">
                  <i className="icofont icofont-briefcase-alt-2"></i>{CollapsibleGroupItem}<span className="digits">1</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="0">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" eventKey="1">
                <i className="icofont icofont-support"></i>{CollapsibleGroupItem}<span className="digits">2</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="1">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" eventKey="2">
                <i className="icofont icofont-tasks-alt"></i>{CollapsibleGroupItem}<span className="digits">3</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="2">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
        </Fragment>
  );
}

export const AccordionWithOpenandCloseIcon = (props) => {
  const [expanded1,setexpanded1] = useState(true)
  const [expanded2,setexpanded2] = useState(false) 
  const [expanded3,setexpanded3] = useState(false)  
  const Accordion1 = () => {
    setexpanded1(!expanded1)
    setexpanded2(false)
    setexpanded3(false)
  }
  const Accordion2 = () => {
    setexpanded2(!expanded2)
    setexpanded1(false)
    setexpanded3(false)
  }
  const Accordion3 = () => {
    setexpanded3(!expanded3)
    setexpanded2(false)
    setexpanded1(false)
  }
  return (
        <Fragment>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" onClick={Accordion1} eventKey="0" aria-expanded={expanded1}>
                  <i className="icofont icofont-briefcase-alt-2"></i>{CollapsibleGroupItem}<span className="digits">1</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="0">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CardHeader className="bg-primary">
              <h5 className="mb-0">
                <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" onClick={Accordion2} eventKey="1" aria-expanded={expanded2}>
                <i className="icofont icofont-support"></i>{CollapsibleGroupItem}<span className="digits">2</span>
                  </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="1">
                  <CardBody>
                  {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                  </CardBody>
            </Accordion.Collapse>
          </Card>
          <Card>
          <CardHeader className="bg-primary">
            <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link txt-white " color="primary" onClick={Accordion3} eventKey="2" aria-expanded={expanded3}>
              <i className="icofont icofont-tasks-alt"></i>{CollapsibleGroupItem}<span className="digits">3</span>
                </Accordion.Toggle>
            </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="2">
                <CardBody>
                {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}
                </CardBody>
          </Accordion.Collapse>
        </Card>
        </Fragment>
  );
}

 

 