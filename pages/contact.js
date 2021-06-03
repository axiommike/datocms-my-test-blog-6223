import React, { Component, useState } from "react";
import { Card, CardBody, Container } from "tailwind-react-ui";
import Layout from "../components/layout";
import { useForm, SubmitHandler, setValue } from "react-hook-form";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import PacmanLoader from "react-spinners/PacmanLoader";
import Modal from "../components/modal";

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // "onChange"
  });
  
  
  const onSubmit = (data) => {
    setFormSending(true);
    axios.post("/api/sendMail", data).then(
      (response) => {
        setFormSuccess(true);
        setValue('fullName', '')
        setValue('email', '')
        setValue('message', '')
        setFormSending(false);
      },
      (error) => {
        setFormError(true);
        setErrorMessage(error.message);
        setFormSending(false);
      }
    );
  };

  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMsg, setClientMsg] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSending, setFormSending] = useState(false);

  return (
    <div>
      <Layout>
        <section className="block py-24 lg:pt-5 pt-0 mt-5 sm:mt-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:mt-0 mt-5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    {/* Add form Success and Error Alerts */}

                    <Modal
                      show={formSuccess}
                      style="success"
                      message="Thank you!"
                      title="Your message has been sent!"
                      onClose={() => {
                        setFormSuccess(false);
                      }}
                    />
                    <Modal
                      show={formError}
                      style="error"
                      message={errorMessage}
                      title="Sorry! It seems there was an error"
                      onClose={() => {
                        setFormError(false);
                      }}
                    />

                    {/* End form Success Alert */}
                    
                      <LoadingOverlay
                        active={formSending}
                        spinner={<PacmanLoader />}
                      >
                        <div>
                          <h4 className="text-2xl font-semibold">
                            Want to contact me?
                          </h4>
                          <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Someday this contact form will actually work and you
                            can.
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
                                onChange={(e) => setFullName(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Full Name"
                                {...register("fullName", {
                                  required: true,
                                  maxLength: 20,
                                })}
                                style={{ transition: "all .15s ease" }}
                              />
                              {errors.fullName?.type === "required" && (
                                <div className="text-white px-1 py-1 border-0 rounded relative mb-2 bg-red-500">
                                  <span className="text-xl inline-block mr-2 align-middle">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  </span>
                                  <span className="inline-block align-middle mr-8">
                                    <b className="capitalize">Oops!</b> Name is
                                    required!
                                  </span>
                                </div>
                              )}
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
                                onChange={(e) => setClientEmail(e.target.value)}
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email address"
                                  }
                                })}
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{ transition: "all .15s ease" }}
                              />
                              {errors.email && (
                                  <div className="text-white px-1 py-1 border-0 rounded relative mb-3 bg-red-500">
                                    <span className="text-xl inline-block mr-2 align-middle">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                    </span>
                                    <span className="inline-block align-middle mr-8">
                                      <b className="Capitalize">Oops!</b> {errors.email.message}
                                    </span>
                                  </div>
                                )}
                               
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
                                onChange={(e) => setClientMsg(e.target.value)}
                                rows="4"
                                cols="80"
                                {...register("message", {
                                  required: true,
                                  maxLength: 500,
                                })}
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Type a message..."
                              />
                              {errors.message?.type === "required" && (
                                <div className="text-white px-1 py-1 border-0 rounded relative mb-3 bg-red-500">
                                  <span className="text-xl inline-block mr-2 align-middle">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  </span>
                                  <span className="inline-block align-middle mr-8">
                                    <b className="capitalize">Oops!</b> Message
                                    is required!
                                  </span>
                                </div>
                              )}
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
                        </div>{" "}
                      </LoadingOverlay>
                    
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
