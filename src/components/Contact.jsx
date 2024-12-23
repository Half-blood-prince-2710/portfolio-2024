
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  toast,
  ToastContainer,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";

const Contact = () => {
  const [sending, setSending] =
    useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } =
      event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(
      event.target
    );

    formData.append(
      "access_key",
      "c09e9f5a-1013-41bd-88be-cb3aa6791f50"
    );

    const object =
      Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (
      !data.name ||
      !data.email ||
      !data.message ||
      !data.phone
    ) {
      toast.error(
        "Please fill all fields!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setSending(false);
      return;
    }

    const res = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
          Accept: "application/json",
        },
        body: json,
      }
    ).then((res) => res.json());

    if (res.success) {
      toast.success(
        "Message sent successfully!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });

    } else {
      toast.error(
        "Error sending message!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }

    setSending(false);
  };
  return (
    <div
      className='w-full lg:w-11/12 xl:w-3/4 mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-11 text-white/70 px-4 pt-16 pb-16 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8'
      id='contact'>
      {/* Contact Info */}
      <div className='flex justify-center items-center flex-shrink-0'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <motion.img
              src='/phone.png'
              alt='phone'
              initial={{
                scale: 1,
                borderRadius: "10%",
              }}
              whileHover={{
                scale: 0.7,
                rotate: [
                  30, -10, 30, -10, 30,
                  -10,
                ],
                borderRadius: "50%",
                boxShadow:
                  "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className='h-24 xl:h-52 mr-6'
            />
            <p className='text-xl'>
              +91 7983733089
            </p>
          </li>
          <li className='flex items-center'>
            <motion.img
              src='/mail.png'
              alt='mail'
              initial={{ rotate: 0 }}
              whileHover={{
                rotate: 360,
              }}
              transition={{
                duration: 0.5,
              }}
              className='h-24 xl:h-52 mr-6'
            />

            <p className='text-xl'>
              GuptaDmanish2710@gmail.com
            </p>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className='bg-white/10 rounded-xl p-8 max-w-md'>
        <h2 className='text-2xl font-bold text-orange-500 mb-4'>
          Let's Connect
        </h2>
        <p className='text-white/70 mb-6'>
          Send me a message and let's
          schedule a call
        </p>

        <form
          className='space-y-4'
          onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={data.name}
              onChange={
                handleInputChange
              }
              className='w-full col-span-2 rounded-xl bg-black/70 p-3 focus:outline-none focus:ring-orange-500'
            />

            <input
              type='email'
              placeholder='Email'
              name='email'
              value={data.email}
              onChange={
                handleInputChange
              }
              className='w-full rounded-xl bg-black/70 p-3 focus:outline-none focus:ring-orange-500'
            />

            <input
              type='tel'
              placeholder='Phone'
              name='phone'
              value={data.phone}
              onChange={
                handleInputChange
              }
              className='w-full rounded-xl bg-black/70 p-3 focus:outline-none focus:ring-orange-500'
            />
            <input
              type='hidden'
              name='_gotcha'
              className='invisible'
            />
          </div>
          <textarea
            placeholder='Message'
            name='message'
            value={data.message}
            onChange={handleInputChange}
            className='w-full rounded-xl bg-black/70 p-3 focus:outline-none focus:ring-orange-500'
          />
          <div className='flex justify-end'>
            <motion.button
              type='submit'
              className={`bg-orange-800 hover:bg-orange-600 text-white px-6 py-2 w-full font-semibold rounded-lg ${
                sending
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={sending}
              animate={{
                scale: sending
                  ? 1
                  : [1, 1.1],
              }}
              transition={{
                duration: 2,
                repeat: sending
                  ? 0
                  : Infinity,
              }}>
              {sending ? (
                <div className='flex items-center justify-center'>
                  <PulseLoader
                    size={10}
                    color={"#FFFFFF"}
                    loading={sending}
                  />
                  <span className='ml-2'>
                    Sending...
                  </span>
                </div>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </div>
        </form>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
        theme='dark'
        className='fixed top-0 right-0 m-4 toast-container'
        toastClassName='bg-gray-800 text-white rounded-lg py-2 px-4 shadow-lg'
      />
    </div>
  );
};

export default Contact;