import { Button, ButtonGroup, Container, Table } from 'reactstrap';
async function remove(id:number) {
    await fetch(`/info/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
async function getData(){
    const res = await fetch('http://localhost:8080/info',{ cache: 'no-store' });
    if(!res.ok){
      throw new Error('Failed to fetch Data')
    }
    return res.json()
  }
  
  type infoType={
    id: number,
    email: string,
    name: string
  }
export default async function ListHome() {
    const data = await getData();
    const infoDB = data.map((info:infoType)=>{
        return(
            <tr key={info.id}>
                <td style={{whiteSpace:'nowrap'}}>{info.name}</td>
                <td>{info.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary">Edit</Button>
                        <Button size="sm" color="danger">Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    })
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
                {infoDB}
            </tbody>
        </Table>
    )
}