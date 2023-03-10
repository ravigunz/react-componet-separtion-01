import React from 'react'
import BrandLogo from '../../components/leftMenu/BrandLogo'
import DashboardTitle from '../../components/leftMenu/DashboardTitle'
import ComponentList from './leftMenu/ComponentList'
import ExtrasList from './leftMenu/ExtrasList'
import ThemeList from './leftMenu/ThemeList'

export default function LeftMenu() {
  return (
    <div>
        <BrandLogo />
        <DashboardTitle />
        <ThemeList />
        <ComponentList />
        <ExtrasList />
    </div>
  )
}
