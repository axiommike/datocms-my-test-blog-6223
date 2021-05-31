import React, { Component } from 'react'
import { Card, CardBody, CardFooter } from 'tailwind-react-ui'
import Container from '../components/container'
import Layout from '../components/layout'

export default class about extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Container>
                        <Card shadow maxW='full'  align='center'>
                    <CardBody className='bg-blue-100' theme='primary'>Content</CardBody>
                    
                </Card>
                </Container>
                </Layout>
            </div>
        )
    }
}
