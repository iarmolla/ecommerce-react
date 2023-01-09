import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/products";
import productsSync from "../syncs/products";

function* getJewelery() {
  try {
    const response = yield productsSync.getAllJewelery();
    yield put(actions.getJewelerySuccess(response.data));
  } catch (error) {}
}

function* getAllProducts() {
  const categories = {
    men: "men's clothing",
    women: "women's clothing",
    technology: "electronics",
    jewelery: "jewelery",
  };
  try {
    let response = yield productsSync.getProducts();
    const men = response.data.filter(
      (product) => product.category == categories.men
    );
    const women = response.data.filter(
      (product) => product.category == categories.women
    );
    const jewelery = response.data.filter(
      (product) => product.category == categories.jewelery
    );
    const technology = response.data.filter(
      (product) => product.category == categories.technology
    );
    yield put(actions.getProductsSuccess(response.data));
    yield put(actions.getMenSuccess(men));
    yield put(actions.getWomenSuccess(women));
    yield put(actions.getJewelerySuccess(jewelery));
    yield put(actions.getTechnologySuccess(technology));

  } catch (error) {}
}

function* getMen() {
  try {
    const response = yield productsSync.getMen();
    yield put(actions.getMenSuccess(response.data));
  } catch (error) {}
}

function* getWomen() {
  try {
    const response = yield productsSync.getWomen();
    yield put(actions.getWomenSuccess(response.data));
  } catch (error) {}
}

function* getTechnology() {
  try {
    const response = yield productsSync.getTechnology();
    yield put(actions.getTechnologySuccess(response.data));
  } catch (error) {}
}


function* products() {
  yield takeLatest("GET_JEWELERY", getJewelery);
  yield takeLatest("GET_PRODUCTS", getAllProducts);
  yield takeLatest("GET_MEN", getMen);
  yield takeLatest("GET_WOMEN", getWomen);
  yield takeLatest("GET_TECHNOLOGY", getTechnology);
}

export default products;
