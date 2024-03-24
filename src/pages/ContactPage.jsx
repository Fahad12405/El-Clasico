import React from "react";
import { Footer, Navbar } from "../components";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Message" className="form-label">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
