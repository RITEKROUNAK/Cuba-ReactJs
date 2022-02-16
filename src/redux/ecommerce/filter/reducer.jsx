import {FILTER_BRAND,FILTER_COLOR,FILTER_PRICE,SEARCH_BY,SORT_BY} from '../../actionTypes'
const filtersReducerDefaultState = {
    brand: ["Diesel", "Hudson", "Lee"],
    value: { min: 100, max: 950 },
    sortBy: "",
    searchBy:""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            };
        case FILTER_COLOR:
            return {
                ...state,
                color: action.color
            };
        case FILTER_PRICE:
            return {
                ...state,
                value: { min: action.value.value.min, max: action.value.value.max }
            };
        case SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        case SEARCH_BY:
            return {
                ...state,
                searchBy: action.search
        };
        default:
            return state;
    }
}

export default filtersReducer;