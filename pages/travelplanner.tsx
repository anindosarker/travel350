import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POST } from '../graphql/queries'

function travelplanner() {
  const {data, error} =useQuery(GET_ALL_POST)
  console.log(data);
  
  return (
    <div>travelplanner</div>
  )
}

export default travelplanner