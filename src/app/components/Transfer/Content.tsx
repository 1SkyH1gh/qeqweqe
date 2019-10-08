import * as React from 'react'
import {ChangeEvent, FunctionComponent, useState} from "react";

import "./ContentStyles.module.scss"
import {FormContainer} from "app/components/Transfer/FormContainer";
import {Island} from "app/components/Island/Island";
import {TitleIsland} from "app/components/Transfer/TitleIsland";
import {IslandContent} from "app/components/Transfer/IslandContent";
import {Header} from "app/components/Transfer/Header";
export interface ContentProps{

}

export const Content:FunctionComponent<ContentProps>=()=>{




    return(
        <div className={"containerContent"}>

           <FormContainer/>
            <Island>
               <TitleIsland title={"Go to new Zelandia"}/>
               <IslandContent  />
            </Island>
        </div>
    )
}
