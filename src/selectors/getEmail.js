import { createSelector } from '@reduxjs/toolkit'

const getEmail = state => state?.email
const getEmailSelector = createSelector([getEmail], (email) => {
  return email
})

export default getEmailSelector