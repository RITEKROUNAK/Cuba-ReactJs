import React, { Fragment, useState, useEffect } from 'react';
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import Breadcrumb from '../../../layout/breadcrumb';
import {firebase_app} from '../../../data/config';
import { deleteList, creatTodoList, updateTask, markAllTask } from '../../../services/todo-firebase.service';
import { toast } from 'react-toastify';
import {ToDo, AddNewTask,AddTask,Close} from '../../../constant'

const TodoFirebase = () => {
    
    const [todoList, setTodoList] = useState([]);
    const [addTask, setAddTask] = useState('');
    // eslint-disable-next-line
    const [border_danger, setBorder_danger] = useState('');
    const [task, setTask] = useState('');
    const [markAll, setMarkAll] = useState(false);

    useEffect(() => {
        const unsubscribe = firebase_app.firestore().collection('todo').onSnapshot((snapshot) => {
            const newItem = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTodoList(newItem)
        })
        return () => unsubscribe();
    }, []);

    const addNewTask = () => {
        if (task === '') {
            document.querySelector('.ng-valid').classList.remove('border-danger')
            document.querySelector('.ng-valid').classList.add('border-danger')
        } else {
            creatTodoList(task);
            setAddTask('')
            setTask('')
            document.getElementById('newtask').value = '';
            document.querySelector('.ng-valid').classList.add('taskmag-hide')
            document.querySelector('.ng-valid').classList.remove('taskmag-show')
            document.querySelector('.add-task-btn').classList.remove('hide')
        }
    }

    const handleRemoveTodo = (todoId) => {
        deleteList(todoId)
        toast.success("Deleted Task !");
    }

    const handleMarkedTodo = (index, todo) => {
        if (todo.completed ===  false) {
            toast.success("Task Completed !");
        }
        if(todo.completed ===  true){
        toast.error("Task In-completed !");
        }
        todo.completed = !todo.completed;
        updateTask(todo);
    }

    const markAllStatus = (checked) => {
        if(checked === true){
            toast.success("All Task Completed !");
        }else{
            toast.error("All Task In-Completed !");
        }
        setMarkAll(checked);
        markAllTask(checked)
    }

    const openTaskWrapper = () => {
        setAddTask(' visible')
        document.querySelector('.add-task-btn').classList.add('hide')
    }

    const closeTaskWrapper = () => {
        setAddTask('')
        document.querySelector('.add-task-btn').classList.remove('hide')
    }

    const onTaskChanged = (e) => {
        setTask(e.currentTarget.value);
    }

    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="To-Do Firebase" />
            <Container fluid={true}>
                <Row>
                    <Col xl="12">
                        <Card>
                            <CardHeader>
                                <h5>{ToDo}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="todo">
                                    <div className="todo-list-wrapper">
                                        <div className="todo-list-container">
                                            <div className="mark-all-tasks">
                                                <div className="mark-all-tasks-container">
                                                    <span className="mark-all-btn" id="mark-all-finished" role="button">
                                                        <span className="btn-label">{"Mark all as finished"}</span>
                                                        <span className="action-box completed" onClick={() => markAllStatus(!markAll)}>
                                                            {markAll &&
                                                                <i className="icon"><i className="icon-check"></i></i>}
                                                        </span>
                                                    </span>
                                                    <span className="mark-all-btn move-down" id="mark-all-incomplete" role="button">
                                                        <span className="btn-label">{"Mark all as Incomplete"}</span>
                                                        <span className="action-box">
                                                            <i className="icon"><i className="icon-check"></i></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="todo-list-body">
                                                <ul id="todo-list">
                                                    {todoList.length > 0 ?
                                                        todoList.map((todoData, index) =>
                                                            <li className={"task " + (todoData.completed ? 'completed' : '')} key={index} >
                                                                <div className="task-container">
                                                                    <h4 className="task-label">{todoData.task}</h4>
                                                                    <span className="task-action-btn">
                                                                        <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleRemoveTodo(todoData.id)} >
                                                                            <i className="icon"><i className="icon-trash"></i></i></span>
                                                                        <span className="action-box large complete-btn" title="Mark Complete" onClick={() => handleMarkedTodo(index, todoData)} >
                                                                            <i className="icon"><i className="icon-check"></i></i>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ) : ''}
                                                </ul>
                                            </div>
                                            <div className="todo-list-footer">
                                                <div className="add-task-btn-wrapper"><span className="add-task-btn">
                                                    <Button color="primary" onClick={openTaskWrapper} >
                                                        <i className="icon-plus"></i> {AddNewTask}</Button></span></div>
                                                <div className={"new-task-wrapper" + addTask}>
                                                    <textarea
                                                        className={"ng-untouched ng-pristine ng-valid" + border_danger}
                                                        id="newtask"
                                                        placeholder="Enter new task here. . ."
                                                        defaultValue={task}
                                                        onChange={onTaskChanged}
                                                    >
                                                    </textarea>
                                                    <Button color="danger" className="cancel-btn" id="close-task-panel" onClick={closeTaskWrapper}>{Close}</Button>
                                                    <Button color="success" className="ml-3 add-new-task-btn" id="add-task" onClick={addNewTask}>{AddTask}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-popup hide">
                                        <p><span className="task"></span><span className="notification-text"></span></p>
                                    </div>
                                </div>
                                <script id="task-template" type="tect/template">
                                    <li className="task">
                                        <div className="task-container">
                                            <span className="task-action-btn">
                                                <span className="action-box large delete-btn" title="Delete Task">
                                                    <i className="icon"><i className="icon-trash"></i></i>
                                                </span>
                                                <span className="action-box large complete-btn" title="Mark Complete">
                                                    <i className="icon"><i className="icon-check"></i></i>
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                </script>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default TodoFirebase;