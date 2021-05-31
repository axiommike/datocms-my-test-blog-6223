import React, { Component } from "react";
import { Card, CardBody, CardFooter } from "tailwind-react-ui";
import Container from "../components/container";
import Layout from "../components/layout";

export default class about extends Component {
  render() {
    return (
      <div>
        <Layout>
          <section className="transform rotate-20 relative m-auto flex flex-wrap mt-2 bg-gray-100 w-3/4 content-center">
            <div className="m-auto w-1/4 bg-red-100 content-center text-right">
              This is a section
            </div>
            <div className="transform rotate-4">test</div>
          </section>
        </Layout>
      </div>
    );
  }
}
