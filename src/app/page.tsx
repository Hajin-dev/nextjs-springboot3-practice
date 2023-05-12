import styles from './page.module.scss'
/* export async function getStaticProps(){
  const res = await fetch ('http://localhost:8080/hello');
  const helloJson = await res.json()

  return helloJson
} */
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Test</h1>
        
      </div>
    </main>
  )
}

