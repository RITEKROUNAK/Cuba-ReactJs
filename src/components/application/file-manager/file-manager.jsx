import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { Home, Folder, Clock, Star, AlertCircle, Trash2, Database, Grid, Upload, PlusSquare } from 'react-feather';
import { toast } from 'react-toastify'
import errorImg from '../../../assets/images/search-not-found.png';
import {Hometxt,All,Recent,Starred,Recovery,Deleteds,PricingPlan,TrialVersion,FREE,Selected,Premium,ContactUs,AllFiles,RecentlyOpenedFiles,Folders,EndlessAdmin,Files,Storage,AddNew} from '../../../constant'
import axios from "axios";

const Filemanager = (props) => {

  const [selectedFile, setSelectedFile] = useState(null)   // Initially, no file is selected  
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([])

  useEffect(() => {
     axios.get(`${process.env.PUBLIC_URL}/api/files.json`).then((response) => {
      setMyFile(response.data);
     })
  },[])

  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value)
  };

  // eslint-disable-next-line
  const filelist = myfile.filter((data) => {
    if(searchTerm == null)
        return data
    else if(data.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return data
    }
    }).map((data,i)=>{
      return(
        <li className="file-box" key={i}>
          <div className="file-top"><i className={data.icon} ></i><i className="fa fa-ellipsis-v f-14 ellips"></i></div>
          <div className="file-bottom">
            <h6>{data.name} </h6>
            <p className="mb-1">{data.size}</p>
            <p> <b>{"last open"} : </b>{data.modify}</p>
          </div>
        </li>
      )
    })

  const getFile = () => {
    document.getElementById("upfile").click();
  }

  const onFileChange = event => {
    // Update the state 
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
      let myfiles = [...myfile];

      if (selectedFile !== null) {
        myfiles.push({
          id: myfile.length + 1,
          name: selectedFile.name,
          size: `${selectedFile.size}`,
          modify: `${selectedFile.lastModifiedDate}`,
          icon:"fa fa-file-text-o txt-info"
        })
        setMyFile(myfiles)
        toast.success("File Upload Successfully !")
      }else {
        toast.error("Plese Select at least one file !")
      }
  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="File Manager" />
      <Container fluid={true}>
        <Row>
          <Col xl="3" className="box-col-6 pr-0 file-spacing">
            <div className="file-sidebar">
              <Card>
                <CardBody>
                  <ul>
                    <li>
                      <div className="btn btn-primary"><Home />{Hometxt} </div>
                    </li>
                    <li>
                      <div className="btn btn-light"><Folder />{All}</div>
                    </li>
                    <li>
                      <div className="btn btn-light"><Clock />{Recent}</div>
                    </li>
                    <li>
                      <div className="btn btn-light"><Star />{Starred}</div>
                    </li>
                    <li>
                      <div className="btn btn-light"><AlertCircle />{Recovery}</div>
                    </li>
                    <li>
                      <div className="btn btn-light"><Trash2 />{Deleteds}</div>
                    </li>
                  </ul>
                  <hr />
                  <ul>
                    <li>
                      <div className="btn btn-outline-primary"><Database />{Storage}</div>
                      <div className="m-t-15">
                        <div className="progress sm-progress-bar mb-1">
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>{"25 GB of 100 GB used"}</p>
                      </div>
                    </li>
                  </ul>
                  <hr />
                  <ul>
                    <li>
                      <div className="btn btn-outline-primary"><Grid />{PricingPlan}</div>
                    </li>
                    <li>
                      <div className="pricing-plan">
                        <h6>{TrialVersion} </h6>
                        <h5>{FREE}</h5>
                        <p>{"100 GB Space"}</p>
                        <div className="btn btn-outline-primary btn-xs">{Selected}</div>
                        <img className="bg-img" src={require("../../../assets/images/dashboard/folder.png")} alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="pricing-plan">
                        <h6>{Premium}</h6>
                        <h5>{"$5/month"}</h5>
                        <p> {"200 GB Space"}</p>
                        <div className="btn btn-outline-primary btn-xs">{ContactUs}</div>
                        <img className="bg-img" src={require("../../../assets/images/dashboard/folder1.png")} alt="" />
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col xl="9" md="12" className="box-col-12">

            <div className="file-content">
              <Card>
                <CardHeader>
                  <div className="media">
                    <Form className="form-inline">
                      <FormGroup>
                        <i className="fa fa-search"></i>
                        <Input
                          className="form-control-plaintext"
                          type="text"
                          value={searchTerm}
                          onChange={(e) => handleChange(e)}
                          placeholder="Search..." />
                      </FormGroup>
                    </Form>
                    <div className="media-body text-right">
                      <Form className="d-inline-flex">
                        <div className="btn btn-primary" onClick={getFile}> <PlusSquare />{AddNew}</div>
                        <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                          <input id="upfile" multiple type="file" onChange={(e) => onFileChange(e)} />
                        </div>

                      </Form>
                      <div className="btn btn-outline-primary ml-1" onClick={onFileUpload}><Upload />{"Upload"}</div>
                    </div>
                  </div>
                </CardHeader>
                {filelist.length > 0 ?

                  <CardBody className="file-manager">
                    <h4 className="mb-3">{AllFiles}</h4>
                    <h6>{RecentlyOpenedFiles}</h6>
                    <ul className="files">
                      {filelist}
                    </ul>
                    <h6 className="mt-4">{Folders}</h6>
                      <ul className="folder">
                        <li className="folder-box">
                          <div className="media"><i className="fa fa-file-archive-o f-36 txt-warning"></i>
                            <div className="media-body ml-3">
                              <h6 className="mb-0">{EndlessAdmin}</h6>
                              <p>{"204 files, 50mb"}</p>
                            </div>
                          </div>
                        </li>
                        <li className="folder-box">
                          <div className="media"><i className="fa fa-folder f-36 txt-warning"></i>
                            <div className="media-body ml-3">
                              <h6 className="mb-0">{EndlessAdmin}</h6>
                              <p>{"101 files, 10mb"}</p>
                            </div>
                          </div>
                        </li>
                        <li className="folder-box">
                          <div className="media"><i className="fa fa-file-archive-o f-36 txt-warning"></i>
                            <div className="media-body ml-3">
                              <h6 className="mb-0">{EndlessAdmin}</h6>
                              <p>{"25 files, 2mb"}</p>
                            </div>
                          </div>
                        </li>
                        <li className="folder-box">
                          <div className="media"><i className="fa fa-folder f-36 txt-warning"></i>
                            <div className="media-body ml-3">
                              <h6 className="mb-0">{EndlessAdmin}</h6>
                              <p>{"108 files, 5mb"}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    <h6 className="mt-4">{Files}</h6>
                    <ul className="files">
                      {filelist}
                    </ul>
                  </CardBody>
                  :
                  <img className="img-fluid m-auto" src={errorImg} alt="" />
                }
              </Card>
            </div>

          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

export default Filemanager;