import React, { useState } from "react";

import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`${BASE_URL}/user/contact/message`, {
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      if (response) {
        toast.success("Thank you! Our technical team will review your query. ");
        setData({
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center ">Contact Us</h2>
        <p className="mb-8 mt- lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want ot send a feedback about our beta updates?
          We are happy to hear!
        </p>
        <form onSubmit={handleMessage} className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            ></input>
          </div>

          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you!"
              className="form_input mt-1"
              value={data.subject}
              onChange={(e) => setData({ ...data, subject: e.target.value })}
            ></input>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
              Your Message
            </label>

            <textarea
              type="text"
              id="message"
              placeholder="Leave us a message.."
              className="form_input mt-1"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
