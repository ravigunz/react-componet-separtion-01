import React from 'react'
import BrandLogo from '../../components/BrandLogo'
import Dashboard from '../../components/DashboardTitle'
import ComponentList from './leftMenu/ComponentList'
import ExtrasList from './leftMenu/ExtrasList'
import ThemeList from './leftMenu/ThemeList'

export default function LeftMenu() {
  return (
    <div>
        <BrandLogo />
        <Dashboard Title />
        <ThemeList />
        <ComponentList />
        <ExtrasList />
    </div>
  )
}
