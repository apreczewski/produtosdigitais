"use client";

import Image from "next/image";
import React from "react";

export default function Forgot() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex items-center justify-center flex-1 p-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-md border border-gray-200 flex">
          <div className="w-1/2">
            <Image
              className="h-full w-full object-cover rounded-l-xl"
              alt={""}
              src="https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col w-1/2 pr-5 p-10">
            <div>
              <Image
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                width={100}
                height={100}
                loading="lazy"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot password to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already part of the crew?{" "}
                <a
                  href="/signin"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  SignIn
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">


                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send e-mail
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
