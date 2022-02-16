import React, { Fragment,useEffect,useState } from 'react';
import Board from '@lourenci/react-kanban'
import { Card, CardHeader, CardBody } from 'reactstrap'
import {DefaultDemo} from '../../../constant'
import axios from 'axios'


const DefaultBoard = (props) => {

    const [board, setBoard] = useState([]);
    const {defaultboard} = board
    
    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/defaultboard.json`).then(res => setBoard(res.data))
    },[])

    return (
        <Fragment>
            {defaultboard ?
            <Card>
                <CardHeader>
                    <h5>{DefaultDemo}</h5>
                </CardHeader>
                <CardBody>
                    <div id="demo1">
                        <div className="kanban-container">

                            <div className="kanban-board">
                                <main className="kanban-drag">
                                <Board
                                    allowAddCard={{ on: 'top' }}
                                        renderCard={({ title, date, priority, img, company, rate, customer_img1, customer_img2, customer_img3 }) => (
                                            <div className="kanban-item">
                                                <a className="kanban-box" href="#javascript">
                                                    <span className="date">{date}</span>
                                                    <span className={`badge ${priority === "Argent" ? "badge-danger" : "badge-primary"} f-right`}>{priority}</span>
                                                    <h6>{title}</h6>
                                                    <div className="media">
                                                        <img className="img-20 mr-1 rounded-circle" src={require(`../../../assets/images/${img}`)} alt="" />
                                                        <div className="media-body">
                                                            <p>{company}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mt-3">
                                                        <ul className="list">
                                                            <li><i className="fa fa-comments-o"></i>2</li>
                                                            <li><i className="fa fa-paperclip"></i>2</li>
                                                            <li><i className="fa fa-eye"></i></li>
                                                        </ul>
                                                        <div className="customers">
                                                            <ul>
                                                                <li className="d-inline-block mr-3">
                                                                    <p className="f-12">{rate}</p>
                                                                </li>
                                                                <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img1}`)} alt="" /></li>
                                                                <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img2}`)} alt="" /></li>
                                                                <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img3}`)} alt="" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )}
                                    >
                                    {defaultboard}
                                    </Board>
                                </main>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            :""}
        </Fragment>
    );
}

export default DefaultBoard;