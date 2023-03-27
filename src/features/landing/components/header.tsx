import { Container, Row, Col, Text, Spacer } from '@nextui-org/react'
import React from 'react'

function Header() {
  return (
    <header className='fixed top-0 left-0 w-screen p-10'>
      <Container lg>
        <Row gap={1} align={'center'} justify={'space-between'}>
          <Col span={3}>
            <h1 className='font-rocko tracking-wide' style={{ fontSize: '41px' }}>Sushiii<span className='text-orange'>.</span></h1>
          </Col>
          <Col className='flex items-center justify-between'>
              <Col className="flex items-centers justify-start gap-14 m-0" as='ul'>
                <NavMenu name={'Menu'} />
                <NavMenu name={'Service'} />
                <NavMenu name={'Testimonials'} />
                <NavMenu name={'Contact'} />
              </Col>
              <Col span={2}>
                c
              </Col>
            </Col>
          </Row>
      </Container>
    </header>
  )
}


function NavMenu({ name }: { name: string }) {
  return (
    <li className='mb-0'><a className='text-black font-poppins' href="/404">{name}</a></li>)
}

export default Header