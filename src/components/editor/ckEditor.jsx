import React, { Fragment , useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import { CKEditorExample } from "../../constant";

const CkEditor =  () =>  {
    
    const [content,setContent] = useState('content') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    return (
            <Fragment>
                <Breadcrumb parent="Editors" title="Ck Editor"/>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{CKEditorExample}</h5>
                                </CardHeader>
                                <CardBody>
                                    <CKEditors
                                        activeclassName="p10"
                                        content={content}
                                        events={{
                                            "change": onChange
                                        }}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

export default CkEditor;