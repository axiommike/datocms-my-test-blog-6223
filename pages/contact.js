import React, { Component } from "react";
import { Card, CardBody, Container } from "tailwind-react-ui";
import Layout from "../components/layout";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // "onChange"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Layout>
        <section className="block py-24 lg:pt-10 mt-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:mt-0 mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to contact me?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Someday this contact form will actually work and you can.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          name="fullName"
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          {...register("fullName", {
                            required: true,
                            maxLength: 20,
                          })}
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.fullName?.type === "required" &&
                          <div className="text-white px-6 py-1 border-0 rounded relative mb-2 bg-red-500">
                          <span className="text-xl inline-block mr-2 align-middle">
                            X
                          </span>
                          <span className="inline-block align-middle mr-8">
                            <b className="capitalize">Oops!</b> Name is required!
                          </span>
                          
                        </div>
                          }
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          {...register("email", {
                            required: true,
                            maxLength: 20,
                          })}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          cols="80"
                          {...register("message", {
                            required: true,
                            maxLength: 20,
                          })}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                        />
                        {errors.message?.type === "required" &&
                          <div className="text-white px-6 py-1 border-0 rounded relative mb-2 bg-red-500">
                          <span className="text-xl inline-block mr-2 align-middle">
                            X
                          </span>
                          <span className="inline-block align-middle mr-8">
                            <b className="capitalize">Oops!</b> Message is required!
                          </span>
                          
                        </div>}
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
