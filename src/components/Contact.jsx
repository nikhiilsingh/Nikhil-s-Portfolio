import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          // Optional: Reset isSent after 5 seconds
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-800 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            disabled={isSent}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-60"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            disabled={isSent}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-60"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            disabled={isSent}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-60"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            disabled={isSent}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={isSent}
            className={`w-full py-3 text-white font-semibold rounded-md transition 
              ${
                isSent
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
              }`}
          >
            {isSent ? "Sent! ✅" : "Send"}
          </button>
        </form>

        {/* Show confirmation message below the form */}
        {isSent && (
          <p className="text-green-400 text-center mt-4 font-medium">
            Your message has been successfully sent! 💌
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;