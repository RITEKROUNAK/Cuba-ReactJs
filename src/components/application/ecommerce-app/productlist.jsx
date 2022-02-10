import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import DataTable from 'react-data-table-component';
import {productData,productColumns} from '../../../data/product-list'
import { ProductListTitle, ProductListDesc } from '../../../constant';


const Productlist = () => {

    return (
          <Fragment>
          <Breadcrumb parent="ECommerce" title="Product List"/>
          <Container fluid={true}>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>{ProductListTitle} </h5><span>{ProductListDesc}</span>
                        </CardHeader>
                        <CardBody>
                            <div className="table-responsive product-table">
                                <DataTable
                                    noHeader
                                    columns={productColumns}
                                    data={productData}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
           </Container>
           </Fragment>
    )

  }

export default Productlist


