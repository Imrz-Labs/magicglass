"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { idProps } from "../config/interface";

export const Form = (props: idProps) => {
  const { id } = props;
  const [inputValue] = useState("");
  const router = useRouter();

  const [query, setQuery] = useState({
    forename: "",
    surname: "",
    email: "",
    company: "",
    message: "",
  });

  // Update inputs value
  const handleParam = () => (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = async (e: { preventDefault: () => void }) => {
    try {
      router.push(`/thanks${inputValue}`);
      e.preventDefault();
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
      await fetch("https://getform.io/f/fff5dcb9-386d-4296-8b90-143becb470a8", {
        method: "POST",
        body: formData,
      }).then(() =>
        setQuery({
          forename: "",
          surname: "",
          email: "",
          company: "",
          message: "",
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <div id={id} className="bg-black w-full py-20">
        <h2 className="pb-10 text-center capitalize text-base font-bold text-white md:text-sm">
          Get In Touch
        </h2>

        <form
          className="m-auto w-6/12 xl:w-8/12 lg:w-9/12 md:w-11/12"
          onSubmit={formSubmit}
        >
          {/********************************Name Input********************************/}
          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**First Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white font-normal">First Name</p>
              <input
                type="text"
                name="forename"
                className="form-input"
                required
                value={query.forename}
                onChange={handleParam()}
              />
            </div>

            {/**Last Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white font-normal">Last Name</p>
              <input
                type="text"
                name="surname"
                className="form-input"
                required
                value={query.surname}
                onChange={handleParam()}
              />
            </div>
          </div>

          {/********************************Email & Company Name Input********************************/}

          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**Email**/}
            <div className="mb-3 pt-0">
              <p className="text-white font-normal">Email</p>
              <input
                type="email"
                name="email"
                className="form-input"
                required
                value={query.email}
                onChange={handleParam()}
              />
            </div>

            {/**Company Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white font-normal">Company Name</p>
              <input
                type="text"
                name="company"
                className="form-input"
                required
                value={query.company}
                onChange={handleParam()}
              />
            </div>
          </div>

          {/********************************Message Description********************************/}

          <div className="mb-3 pt-0">
            <p className="text-white font-normal">Description (Optional)</p>
            <textarea
              name="message"
              className="form-input"
              value={query.message}
              onChange={handleParam()}
            />
          </div>

          <div className="py-10 flex justify-center">
            <button
              type="submit"
              className="button"
            >
              Book A Consultation
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
