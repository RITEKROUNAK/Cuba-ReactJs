import React from 'react'
import {ADD_NEW_PROJECT} from '../actionTypes'
const {All,Doing,Done} = require('../../data/project')

const initial_state = {

    all_Project:All,
    doing_Project:Doing,
    done_Project:Done,
}


export default (state = initial_state, action) => {
 
    switch (action.type) {

        
        case ADD_NEW_PROJECT:
            state.all_Project.push({
                id: state.all_Project.length + 1,
                title:action.payload.data.title,
                badge:action.payload.data.status,
                img: "user/3.jpg",
                sites:"Themeforest, australia",
                issue:<div  className="text-success col-6">40</div>,
                resolved:<div  className="text-success col-6">40</div>,
                comment:<div  className="text-success col-6">20</div>,
                desc: action.payload.data.description,
                like: action.payload.data.rate,
                progress:action.payload.data.progress_level,
                customers_img1:"user/3.jpg",
                customers_img2:"user/5.jpg",
                customers_img3:"user/1.jpg"
            })
        return {...state,all_Project:state.all_Project};

        default:
            return state;
    }
    
}

