import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Subscribtion from '../../components/Subscribtion/Subscribtion'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
          <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
            <h1 className="homeTitle">Stay at our top unique properties</h1>
            <FeaturedProperties />
            <h1 className="homeTitle">Homes guests love</h1>
            <Subscribtion />
            <Footer />
      </div>
    </>
  )
}
