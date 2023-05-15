export async function remove(id:number){
    await fetch(`http://localhost:8080/info/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}