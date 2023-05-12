'use client'

import styles from './page.module.scss'
import NavbarUI from './NavbarUI';
import {Button,Container} from 'reactstrap';
import Link from 'next/link';
import ListHome from './List/ListHome';
export default  function Home() {
  return (
    <main className={styles.main}>
    <Container fluid>
      <Button color="warning"><Link href="/clients">Info</Link></Button>
      {/* @ts-expect-error Async Server Component */}
      <ListHome></ListHome>
    </Container>
    </main>
  )
}

