import {firebase_app} from '../data/config';

export const creatTodoList = (value) => {
    firebase_app.firestore().collection('todo').add({
        task: value,
        completed: false,
    })
}

export const deleteList = (taskId) => {
    return firebase_app.firestore().collection('todo').doc(taskId).delete();
}

export const updateTask = (value) => {
    firebase_app.firestore().collection('todo').doc(value.id).set({
        task: value.task,
        completed: value.completed
    })
}

export const markAllTask = (action) => {
    const db = firebase_app.firestore();
    db.collection('todo')
        .get()
        .then(snapshot => {
            snapshot
                .docs
                .forEach(doc => {
                    db.collection('todo').doc(doc.id).set({ task: doc.data().task, completed: action });
                });
        });
}
