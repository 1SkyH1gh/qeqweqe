import * as React from 'react'
import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, ButtonType} from "app/components/form/Button";
import {ItemAndIcon} from "app/components/Transfer/ItemAndIcon";
import Icon from '@mdi/react'
import './IslandContentStyles.module.scss'
import {mdiCalendarAlert} from '@mdi/js'
import {BaseInput, BaseInputSize, BaseInputType} from "app/components/form/BaseInput";
import {Match} from "app/components/Transfer/Match";


export interface IslandContentProps{


}
export interface CarsProps {
    id:number,
    model:string,
    size?:number,
    placeAmount?:number,
    invalidPlace?:number,
    color?:string,
    number?:number
}

export const Cars:CarsProps[]=[
    {model:"Rehaut",id:0},
    {model:"Tesla",id:1},
    {model:"Peugeot",id:2},
    {model:"BMW",id:3},
]



export const IslandContent:FunctionComponent<IslandContentProps>=(props)=>{
    const [input,setInput]=useState("")
    const [select,SetSelect]=useState("")
    const [showMore,openShowmore]=useState()
    console.log(input)
    console.log(select)
    return(
        <div className={"islandContent"}>
            <table className={"table"}>
                <tr className={"tr"}>
                    <td>
                        request info
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1} color={"#97E3E5"} />} text={"18.02.1999"}/>
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1} color={"#97E3E5"}/> } text={"18.02.1999"}/>
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1} color={"#97E3E5"}/>} text={3}/>
                    </td>

                </tr>
                <tr className={"tr"}>
                    <td>
                       return transfer
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1} color={"#97E3E5"}/>} text={"18.02.1999"}/>
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1} color={"#97E3E5"}/>} text={"18.02.1999"}/>
                    </td>

                </tr>

            </table>
            {
                input.length<2||!select?
                    <div>
                        <BaseInput type={BaseInputType.TEXT}
                                   size={BaseInputSize.XS}
                                   placeholder={"1200$"}
                                   onChange={(e : ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}

                        />
                        <select className={"select"}
                                onChange={(e:ChangeEvent<HTMLSelectElement>)=>SetSelect(e.target.value)}
                                value={select}
                        >

                            {Cars.map(car=>

                                <option value={car.model} key={car.id}>{car.model}</option>

                            )}
                        </select>

                        <div> set salary and choice car </div>
                    <Button type={ButtonType.__VK} children={"set salary"}  />
                    <div>choose a car and set the salary</div>
                </div>
                    :
                    <div>
                        <div onClick={()=>openShowmore(true)}>
                            Show more
                        </div>

                        <div className={showMore?"showMore":"showMoreBlock"}>
                           <Match title={"Users"} >
                               -3 children,
                               -1 undefined
                           </Match>
                            <Match title={"Users"} >
                                -3 children,
                                -1 undefined
                            </Match>
                            <Match title={"Users"} >
                                -3 children,
                                -1 undefined
                            </Match>
                            <Match title={"Users"} >
                                -3 children,
                                -1 undefined
                            </Match>
                            <Match title={"Users"} >
                                -3 children,
                                -1 undefined
                            </Match>
                            <Match title={"Users"} >
                                -3 children,
                                -1 undefined
                            </Match>
                        </div>
                    <div>Salary: {input + "$"}</div>
                    <Button type={ButtonType.MAIN} children={"take the order"}/>
                    </div>

            }



        </div>
    )
}

