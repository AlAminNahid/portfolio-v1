"use client";

import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { contactSchema } from "@/app/validation/contactSchema";
import rightArrow from "@/public/assets/right-arrow-white.png";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const result = contactSchema.safeParse({
      name,
      email,
      message,
    });

    if (!result.success) {
      const firstError = result.error.issues[0].message;
      setError(firstError);
      return;
    }

    try {
      await axios.post("/api/contact", {
        name,
        email,
        message,
      });

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setSuccess(false);
      const errorMessage =
        error.message || "Something went wrong. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <>
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-[radial-gradient(circle_at_center,rgba(55,65,81,0.35),transparent_65%)]"
      >
        <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I'd love to here from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {success && (
            <div className="flex justify-center mb-4">
              <div className="bg-green-200 text-green-900 px-6 py-3 rounded-lg">
                Message sent successfully!
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-center mb-4">
              <div className="bg-red-200 text-red-900 px-6 py-3 rounded-lg">
                {error}
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-gray-900 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-gray-900 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-gray-900 placeholder:text-gray-400 mb-6 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          ></textarea>

          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            Submit now{" "}
            <Image
              src={rightArrow}
              alt="rightArrow"
              className="w-4 dark:invert"
            />
          </button>
        </form>
      </div>
    </>
  );
}
