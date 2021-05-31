import React from "react";
import { Card, CardBody, Container } from "tailwind-react-ui";
import Layout from "../components/layout";

function Contact() {
  return (
    <div>
      <Layout>
        <div className="mt-1">
          <Card>
            <CardBody>
              <form class="w-full max-w-lg mt-10">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                    <p class="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                    />
                    <p class="text-gray-600 text-xs italic">
                      Some tips - as long as needed
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                    ></textarea>
                    <p class="text-gray-600 text-xs italic">
                      Re-size can be disabled by set by resize-none / resize-y /
                      resize-x / resize
                    </p>
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3">
                    <button
                      class="shadow bg-red-400 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                  <div class="md:w-2/3"></div>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
