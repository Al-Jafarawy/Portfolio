import React, { Fragment, useContext, useState } from "react";
import emailjs from "emailjs-com";

import { PortfolioContext } from "@/contextApi/PortfolioContext";

const Feedback = () => {
  const { showModal, setShowModal } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(false);

  const collectData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try {
      await emailjs.send(
        "service_hkl6uik",
        "template_ylfy49i",
        formData,
        "DQv_RH-_nZ3Jm99eS"
      );

      setFormData({});
      setSubmit(false);
      setShowModal(false);
      alert("Feedback sent successfully to prog.al.jafarawy@gmail.com!");
    } catch (error) {
      setSubmit(false);
      alert("Error sending feedback: " + error.message);
    }
  };

  return (
    <Fragment>
      <div
        className={`fixed z-30 top-0 left-0 h-screen w-screen bg-[#80808082] flex justify-center md:items-center ${
          showModal ? "" : "hidden"
        }`}
      >
        <form
          className="dark:bg-black bg-[#ccf2f6] z-40 p-4 rounded sm:w-full sm:h-screen md:h-fit md:w-[500px] flex flex-col gap-4"
          onSubmit={submitFeedback}
        >
          <h3 className="text-center text-2xl font-bold dark:text-[#07d0e5] text-[#c72c6c]">
            Feedback
          </h3>
          <p>As a developer, you understand the importance of feedback.</p>

          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded text-[#07d0e5]"
            name="name"
            onChange={collectData}
            placeholder="*Your Name"
            required
            value={formData.name || ""}
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded text-[#07d0e5]"
            name="email"
            onChange={collectData}
            placeholder="Your Email Address"
            type="email"
            value={formData.email || ""}
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded text-[#07d0e5]"
            max="5"
            min="1"
            name="rating"
            onChange={collectData}
            placeholder="*Rating out of 5"
            required
            type="number"
            value={formData.rating || ""}
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded text-[#07d0e5]"
            name="good"
            onChange={collectData}
            placeholder="What is good about this Project ?"
            value={formData.good || ""}
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded text-[#07d0e5]"
            name="bad"
            onChange={collectData}
            placeholder="What is bad about this Project ?"
            value={formData.bad || ""}
          />
          <textarea
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded text-[#07d0e5]"
            name="suggetion"
            onChange={collectData}
            placeholder="What is Your Suggetion ?"
            rows="3"
            value={formData.suggetion || ""}
          />

          <div className="flex justify-between">
            <button
              className="font-bold px-4 p-2 rounded text-white dark:bg-[#0ab0c2] disabled:cursor-default dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              onClick={() => {
                setShowModal(false);
                setFormData({});
              }}
              type="button"
            >
              Cancel
            </button>
            <button
              className="font-bold px-4 p-2 rounded text-white dark:bg-[#0ab0c2] disabled:cursor-default dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              disabled={submit}
              type="submit"
            >
              {submit ? "Submitting.." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Feedback;
