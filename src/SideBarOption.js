import React from 'react'
import './SideBarOption.css'
function SideBarOption({icon,title,num,selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            {icon}
            <h3>{title}</h3>
            <p>{num}</p>
            
        </div>
    )
}

export default SideBarOption
