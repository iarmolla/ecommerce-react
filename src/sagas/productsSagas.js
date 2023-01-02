import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/products";
import productsSync  from "../syncs/products";

function* getJewelery() {
  try {
    const response = yield productsSync.getAllJewelery()
    yield put(actions.getJewelerySuccess(response.data));
  } catch (error) {}
}

function* getAllProducts() {
  try {
    const response = yield productsSync.getProducts()
    yield put(actions.getProductsSuccess(response.data));
  } catch (error) {}
}

function* getMen() {
  try {
    const response = yield productsSync.getMen()
    yield put(actions.getMenSuccess(response.data));
  } catch (error) {}
}

function* getWomen() {
  try {
    const response = yield productsSync.getWomen()
    yield put(actions.getWomenSuccess(response.data));
  } catch (error) {}
}

function* getTechnology() {
  try {
    const response = yield productsSync.getTechnology()
    yield put(actions.getTechnologySuccess(response.data));
  } catch (error) {}
}

function* products() {
    yield takeLatest("GET_JEWELERY", getJewelery)
    yield takeLatest("GET_PRODUCTS", getAllProducts);
    yield takeLatest("GET_MEN", getMen);
    yield takeLatest("GET_WOMEN", getWomen);
    yield takeLatest("GET_TECHNOLOGY", getTechnology);

}

export default products;
