
import { useState } from "react"
import Switch from "react-switch"
function MaterialDesignSwitch() {
   const [checked,setChecked]=useState(false)
    return (
     
        
          <Switch
            checked={checked}
            onChange={()=>setChecked(!checked)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        
    )
  }

  export default MaterialDesignSwitch