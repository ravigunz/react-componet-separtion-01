import React from 'react'
import OverviewList from './homeContent/OverviewList'
import PrimaryNavbar from './homeContent/PrimaryNavbar'
import SecondaryNavbar from './homeContent/SecondaryNavbar'
import SocialStats from './homeContent/SocialStats'
import TrafficGraph from './homeContent/TrafficGraph'

export default function HomeContent() {
  return (
    <div>
        <PrimaryNavbar />
        <SecondaryNavbar />
        <OverviewList />
        <TrafficGraph />
        <SocialStats />
        </div>
  )
}
