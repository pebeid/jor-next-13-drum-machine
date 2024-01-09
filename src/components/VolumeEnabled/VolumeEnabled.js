"use client"

import React, { useState } from "react";
import VolumeContext from "./VolumeContext";


function VolumeEnabled({children}) {
    const [volumeState] = useState({volumeEnabled: true});
    console.log(VolumeContext);
    
    return <VolumeContext.Provider value={{volumeState}}>{children}</VolumeContext.Provider>;
}
export default VolumeEnabled;