import { createSelector } from '@reduxjs/toolkit'

const getUsers = state => state
const getProductsSelector = createSelector([getUsers], (users) => {
  return users
})

export default getProductsSelector