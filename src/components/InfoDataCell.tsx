import {ButtonGroup,Button} from 'reactstrap'
import { remove } from '../app/lib/infoMethod'
import React from 'react'
type infoType={
    id: number,
    email: string,
    name: string
  }
export default function InfoDataCell ({id,email,name}:infoType){
    return(
        <tr key={id}>
                <td style={{whiteSpace:'nowrap'}}>{name}</td>
                <td>{email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary">Edit</Button>
                        <Button size="sm" color="danger" onClick={()=>remove(id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
    )
}