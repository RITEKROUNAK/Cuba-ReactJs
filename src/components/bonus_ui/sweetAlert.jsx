import React, { useState,Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import SweetAlert from 'sweetalert2'
import {BasicExamples,AdvancedState,AlertState,Success,Danger,Information,Warning,WithTitleAlert,SuccessAlert,InfoAlert,WarningAlert,Basic} from '../../constant'


const SweetAlerts = (props) =>  {

   // eslint-disable-next-line 
    const[alert,setalert] = useState(false)
    

    const Displayalert = (name) => {
        setalert(true)
        if(name === "basic"){
            SweetAlert.fire({title:"Hello world!"});
        }
        if(name === "basictitlealert"){
            SweetAlert.fire({title:"Heres the title!", text:"...and heres the text!"});
        }
        if(name === "basicsuccessalert"){
            SweetAlert.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "info",

              });
        }
        if(name === "basicinfoalert"){
            SweetAlert.fire({
                title:"Click on either the button or outside the modal.",
             })
            .then((result) =>  {
                if (result.value) {
                    SweetAlert.fire(`The returned value is: ${result.value}`
                  )
                }
                else {
                    SweetAlert.fire("The returned value is: null");
                  }

        })
        }
        if(name === "basicwarningalert"){
            SweetAlert.fire({
                title: 'Are you sure?',
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'cancel',
                reverseButtons: true
              })
              .then((result) => {
                if (result.value) {
                    SweetAlert.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
                else{
                    SweetAlert.fire(
                       'Your imaginary file is safe!'
                      )
                }
        })
    }
        if(name === "advanceSuccess"){
            SweetAlert.mixin({
              input: 'text',
              confirmButtonText: 'Next &rarr;',
              showCancelButton: true,
              progressSteps: ['1', '2', '3']
            }).queue([
              {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
              },
              'Question 2',
              'Question 3'
            ]).then((result) => {
              if (result.value) {
                const answers = JSON.stringify(result.value)
                SweetAlert.fire({
                  title: 'All done!',
                  html: `
                    Your answers:
                    <pre><code>${answers}</code></pre>
                  `,
                  confirmButtonText: 'Lovely!'
                })
              }
            })
        }
        if(name === "advanceDanger"){
            SweetAlert.fire({
                title:"Are you sure you want to do this?", 
                cancelButtonText:"Oh noez!",
                confirmButtonText:"Aww yiss!",
                reverseButtons: true,
                showCancelButton: true,
              });
        }
        if(name === "advanceInfo"){
            SweetAlert.fire({
                title:"Write something here:",
                input: "text",
              })
              .then((result) => {
                if(result.value){
                SweetAlert.fire(`You typed: ${result.value}`);
                }
                else{
                    SweetAlert.fire("You typed: null");
                }
              });
        }
        if(name === "advanceWarning"){
            SweetAlert.fire({
                title:"Are you sure you want to do this?", 
                cancelButtonText:"Oh noez!",
                confirmButtonText:"Aww yiss!",
                reverseButtons: true,
                showCancelButton: true,
              });
        }
        if(name === "alertSuccess"){
            SweetAlert.fire({title:"Good job!", text:"You clicked the button!", icon:"success"});
        }
        if(name === "alertDanger"){
            SweetAlert.fire({title:"Good job!", text:"You clicked the button!", icon:"error"});
        }
        if(name === "alertInfo"){
            SweetAlert.fire({title:"Good job!", text:"You clicked the button!", icon:"info"});
        }
        if(name === "alertWarning"){
            SweetAlert.fire({title:"Good job!", text:"You clicked the button!", icon:"warning"});
        }
        
    }

    return (
        <Fragment>
        <Breadcrumb parent="Bouns Ui" title="Sweet Alert"/>
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{BasicExamples}</h5>
                  </CardHeader>
                  <CardBody  className="btn-showcase">
                    <Button color="primary" className="sweet-1"  name="basic"   onClick={(e) => Displayalert(e.target.name)}>{Basic}</Button>
                    <Button color="primary" className="sweet-2"  name="basictitlealert" onClick={(e) => Displayalert(e.target.name)}>{WithTitleAlert}</Button>
                    <Button color="success" className="sweet-3"  name="basicsuccessalert" onClick={(e) => Displayalert(e.target.name)}>{SuccessAlert}</Button>
                    <Button color="info" className="sweet-4"     name="basicinfoalert" onClick={(e) => Displayalert(e.target.name)}>{InfoAlert}</Button>
                    <Button color="warning" className="sweet-5"  name="basicwarningalert" onClick={(e) => Displayalert(e.target.name)}>{WarningAlert}</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{AdvancedState}</h5>
                  </CardHeader>
                  <CardBody  className="btn-showcase">
                    <Button color="success" className="sweet-12" name="advanceSuccess" onClick={(e) => Displayalert(e.target.name)}>{Success}</Button>
                    <Button color="danger" className="sweet-11" name="advanceDanger" onClick={(e) => Displayalert(e.target.name)}>{Danger}</Button>
                    <Button color="info" className="sweet-13" name="advanceInfo" onClick={(e) => Displayalert(e.target.name)}>{Information}</Button>
                    <Button color="warning" className="sweet-10" name="advanceWarning" onClick={(e) => Displayalert(e.target.name)}>{Warning}</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{AlertState}</h5>
                  </CardHeader>
                  <CardBody  className="btn-showcase">
                    <Button color="success" className="sweet-8" name="alertSuccess" onClick={(e) => Displayalert(e.target.name)} >{Success}</Button>
                    <Button color="danger" className="sweet-7" name="alertDanger" onClick={(e) => Displayalert(e.target.name)} >{Danger}</Button>
                    <Button color="info" className="sweet-9" name="alertInfo" onClick={(e) => Displayalert(e.target.name)} >{Information}</Button>
                    <Button color="warning" className="sweet-6" name="alertWarning" onClick={(e) => Displayalert(e.target.name)}>{Warning}</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default SweetAlerts;