import React from 'react'
import Carousel from './carousel/Carousel'
import TabCategories from '../../components/TabCategories'
import { useLoaderData } from 'react-router'

const Home = () => {
  const jobs = useLoaderData()
  return (
    <div>
      <Carousel />
      <TabCategories jobs={jobs}/>
    </div>
  )
}

export default Home