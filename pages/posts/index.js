import React from "react";
import { Card, CardBody, CardFooter, Col, Grid } from "tailwind-react-ui";
import Container from "../../components/container";
import Layout from "../../components/layout";



function index({ subscription}) {
  console.log(subscription)
  

  return (
    <>
    <Layout>
        <Container>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
        
        <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
          <CardBody>
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>

            <h2 className="mt-2 mb-2  font-bold">test</h2>
            <div className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        

        <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
          <CardBody>Inside a card</CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
          <CardBody>
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>

            <h2 className="mt-2 mb-2  font-bold">Blog Post Title</h2>
            <div className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>

        <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
          <CardBody>Inside a card</CardBody>
          <CardFooter></CardFooter>
        </Card>

        <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
          <CardBody>
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>

            <h2 class="mt-2 mb-2  font-bold">Blog Post Title</h2>
            <div className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
          <CardBody>Inside a card</CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
      </Container>
    </Layout></>
  );
}

export default index;
