import React from 'react'
import SidebarItems from './SidebarItems'
import items from './SidebarData.json'

function SidebarMenu() {
  return (
    <>
        <div className='sidebar'>
            {items.map((item, index) => <SidebarItems key={index} item={item}/>)}
        </div>
    </>
  )
}

export default SidebarMenu