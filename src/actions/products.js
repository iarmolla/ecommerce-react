
function getProducts() {
  return {
    type: "GET_PRODUCTS",
  };
}

function getProductsSuccess(values) {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    values,
  }
}

function getMen() {
  return {
    type: "GET_MEN",
  }
}

function getMenSuccess(values) {
  return {
    type: "GET_MEN_SUCCESS",
    values,
  }
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

function getTechnology() {
  return {
    type: "GET_TECHNOLOGY",
  };
}

function getTechnologySuccess(values) {
  return {
    type: "GET_TECHNOLOGY_SUCCESS",
    values
  };
}

function getJewelerySuccess(values) {
  return {
    type: "GET_JEWELERY_SUCCESS",
    values,
  };
}

function addProduct(product,count = 0) {
  return {
    type: "ADD_PRODUCT",
    product,
    count
  }
}

function deleteProduct(id) {
  return {
    type: "DELETE_PRODUCT",
    id
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
  deleteProduct
};
