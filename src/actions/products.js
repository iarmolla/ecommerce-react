function getProducts() {
  return {
    type: "GET_PRODUCTS",
  };
}

function getProductsSuccess(values) {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    values,
  };
}

function getMen() {
  return {
    type: "GET_MEN",
  };
}

function getMenSuccess(values) {
  return {
    type: "GET_MEN_SUCCESS",
    values,
  };
}

function orderMenPriceAscending() {
  return {
    type: "ORDER_MEN_PRICE_ASCENDING",
  };
}

function orderMenPriceDescending() {
  return {
    type: "ORDER_MEN_PRICE_DESCENDING",
  };
}

function orderMenName() {
  return {
    type: "ORDER_MEN_NAME",
  };
}

function orderWomenPriceAscending() {
  return {
    type: "ORDER_WOMEN_PRICE_ASCENDING",
  };
}

function orderWomenPriceDescending() {
  return {
    type: "ORDER_WOMEN_PRICE_DESCENDING",
  };
}

function orderWomenName() {
  return {
    type: "ORDER_WOMEN_NAME",
  };
}

function getJewelery() {
  return {
    type: "GET_JEWELERY",
  };
}

function getWomen() {
  return {
    type: "GET_WOMEN",
  };
}


function getWomenSuccess(values) {
  return {
    type: "GET_WOMEN_SUCCESS",
    values,
  };
}

function orderTechnologyPriceAscending() {
  return {
    type: "ORDER_TECHNOLOGY_PRICE_ASCENDING",
  };
}

function orderTechnologyPriceDescending() {
  return {
    type: "ORDER_TECHNOLOGY_PRICE_DESCENDING",
  };
}

function orderTechnologyName() {
  return {
    type: "ORDER_TECHNOLOGY_NAME",
  };
}

function getTechnology() {
  return {
    type: "GET_TECHNOLOGY",
  };
}

function getTechnologySuccess(values) {
  return {
    type: "GET_TECHNOLOGY_SUCCESS",
    values,
  };
}

function getJewelerySuccess(values) {
  return {
    type: "GET_JEWELERY_SUCCESS",
    values,
  };
}

function orderJeweleryPriceAscending() {
  return {
    type: "ORDER_JEWELERY_PRICE_ASCENDING",
  };
}

function orderJeweleryPriceDescending() {
  return {
    type: "ORDER_JEWELERY_PRICE_DESCENDING",
  };
}

function orderJeweleryName() {
  return {
    type: "ORDER_JEWELERY_NAME",
  };
}

function addProduct(product, count) {
  return {
    type: "ADD_PRODUCT",
    product,
    count,
  };
}

function modifyProducts(product, count) {
  return {
    type: "MODIFY_PRODUCTS",
    product,
    count,
  };
}


function modifyProduct(product) {
  return {
    type:"MODIFY_PRODUCT",
    product
  }
}

function purchasedProducts() {
  return {
    type: "PURCHASED_PRODUCTS",
  };
}
function deleteProduct(id) {
  return {
    type: "DELETE_PRODUCT",
    id,
  };
}

function modifyStock(id,stock) {
  return {
    type:"MODIFY_STOCK",
    id,
    stock
  }
}

function deleteSuccess(modify) {
  return {
    type:"DELETE_SUCCESS",
    modify
  }
}

export default {
  getJewelery,
  getJewelerySuccess,
  getProducts,
  getProductsSuccess,
  getMen,
  getMenSuccess,
  getWomen,
  getWomenSuccess,
  getTechnology,
  getTechnologySuccess,
  addProduct,
  purchasedProducts,
  modifyProduct,
  deleteProduct,
  orderMenPriceAscending,
  orderMenPriceDescending,
  orderMenName,
  orderWomenName,
  orderWomenPriceAscending,
  orderWomenPriceDescending,
  orderTechnologyName,
  orderTechnologyPriceAscending,
  orderTechnologyPriceDescending,
  orderJeweleryName,
  orderJeweleryPriceAscending,
  orderJeweleryPriceDescending,
  modifyProducts,
  modifyStock,
  deleteSuccess
};
