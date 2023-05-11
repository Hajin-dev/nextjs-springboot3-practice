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
        <h1>Login</h1>
        <div className={styles.loginBox}>
          <div className='login'>
            <form>
              <div className={styles.inputDiv}>
                <label>id</label>
                <input type="text"></input>
              </div>
              <div className={styles.inputDiv}>
                <label>password</label>
                <input type='password'></input>
              </div>
            </form>
            <button className={styles.submit}>submit</button>
          </div>
        </div>
      </div>
    </main>
  )
}

