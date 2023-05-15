async function getData(){
    const res = await fetch('http://localhost:8080/info');
    if(!res.ok){
      throw new Error('Failed to fetch Data')
    }
    return res
  }
export async function GET(request:Request):Promise<Response>{
    const test = await getData()
    return test.json();
}
export const dynamic = 'force-dynamic';

export const revalidate = 60;