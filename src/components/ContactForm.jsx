import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8289539-9de5-4c43-8be5-0530c4a4bd91");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className=" bg-indigo-300 bg-opacity-10  rounded-xl p-2   w-[100%] ">
      <form
        className="w-full flex justify-center flex-column items-center gap-4"
        onSubmit={onSubmit}
      >
        <label className="mt-2 font-bold w-[80%] text-start" htmlFor="name">
          Name:
        </label>
        <input
          className="w-[98%] xs:w-[80%] rounded p-2"
          type="text"
          name="name"
          placeholder="Enter your Name"
          required
        />

        <label className="mt-2 font-bold w-[80%] text-start" htmlFor="email">
          Email
        </label>
        <input
          className="w-[98%] xs:w-[80%] rounded p-2"
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <label className="mt-2 font-bold w-[80%] text-start" htmlFor="message">
          Message:
        </label>
        <textarea
          className=" xs:w-[80%] w-[98%] rounded p-2 pt-1"
          name="message"
          placeholder="Enter you thoughts..."
          required
        ></textarea>
        <input
          type="hidden"
          name="access_key"
          value="e8289539-9de5-4c43-8be5-0530c4a4bd91"
        />

        <button className="mt-3 btn btn-primary" type="submit">
          Submit Form
        </button>
      </form>
     


      <span>{result}</span>
    </div>
  );
}

// bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500
