
import { test } from 'node:test';
import { Table } from 'reactstrap';
import InfoDataCell from '@/components/InfoDataCell';
async function getTest(){
    const res = await fetch('http://localhost:3000/api/info/work')
    return res.text()
}
async function getInfo(){
    const res =  await fetch('http://localhost:8080/info',{
        method:"GET",
        headers:{
            'Accept':"application/json"
        }
    })
    return res.json()
}
type infoProps = { id: number; email: string; name: string; }
export default async function ListHome() {
    const testTxt = await getTest()
    const result =  testTxt.toString()

    const infoList = await getInfo().then(data=>{console.log(data); return data})
    return(
        <Table className="mt-4">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>{result}</td>
                </tr>
                {infoList.length==0?
                <tr><td colSpan={3}>No Data Available...</td></tr>:
                infoList.map((info: infoProps)=>{<tr>
                    <td>het</td>
                    <td colSpan={2}>{info.email}{
                }</td></tr>})
                }
            </tbody>
        </Table>
    )
}