import {call,put, takeLatest} from "redux-saga/effects";
import { fetchProductApi } from "../../api";
import { WATCH_PRODUCT_LIST,WATCH_SINGLE_ITEM } from "../../redux/actionTypes";
import { fetchProducts,getSingleItem } from "../../redux/ecommerce/product/action";

function* fetchProductsAsyn() {
    const productData = yield call(fetchProductApi);
    yield put(fetchProducts(productData.data));
    yield put(getSingleItem());
}

export function* WatcherEcommerceApp() {
    yield takeLatest(WATCH_PRODUCT_LIST,fetchProductsAsyn)
    yield takeLatest(WATCH_SINGLE_ITEM,fetchProductsAsyn)
}