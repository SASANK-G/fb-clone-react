import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow( src ) {
  // console.log("SRC",src);

  return (
    
    <div>
      <div className = "sidebarRow">
            {/* { src && <Avatar className = "sidebarRow__avatar" src = {src.url} />} */}
            { src && <img 
                className = "sidebarRow__image"
                src = {src.url}
                alt = "pic"
            />}
            <h4>{src.title}</h4>
        </div>
    </div>
  )
}

export default SidebarRow
