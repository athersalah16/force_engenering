"use client";
import { useRef, useState } from "react";
import { getTheData } from "../../../utils/getFormData";
import { validateForm } from "../../../utils/validateData";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function RequestQuoteForm() {
  const [error, setError] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!formRef.current) return;
      const data = getTheData(formRef);

      const validateError = validateForm(data);
      if (validateError) {
        setError(true);
        toast.error(validateError);
        return;
      }
      setLoading(true);

      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      if (response.status === 200) {
        setError(false);
        formRef.current?.reset();
        toast.success("Request Sent Successfully!");
        return;
      }
    } catch {
      setLoading(false);
      toast.error("Failed to send the email");
    } finally {
      setLoading(false);
    }
  };

  const textStyle = `outline-none border text-black border-gray-300 rounded-md py-2 px-4 focus:ring-2  focus:ring-blue-500 
  ${error && "focus:ring-red-500 border-red-500 focus:ring-2 "}`;
  return (
    <div className="w-full lg:w-[45%] bg-gray-100 p-1 lg:p-8  rounded-lg shadow-md">
      <h1 className="text-blue-950 py-2 lg:pb-2 text-xl lg:text-3xl font-bold text-center">
        Request a Quote
      </h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="w-full  flex-1 flex flex-col lg:flex-row lg:justify-between px-4 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full name: "
            className={textStyle}
          />
          <input
            type="text"
            name="company_name"
            placeholder="Company Name: "
            className={textStyle}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between px-4 gap-3">
          <input
            type="text"
            name="email"
            placeholder="Email: "
            className={textStyle}
          />
          <input
            type="text"
            name="phone"
            placeholder=" Phone Number: "
            className={textStyle}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder=" What are you looking for? "
          className={`ml-5 ${textStyle}`}
        />

        <textarea
          name="project_requirements"
          placeholder=" Describe your project requirements: "
          className={`ml-5 ${textStyle}`}
          rows={4}
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 flex flex-row gap-3 justify-center items-center text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none cursor-pointer  ${loading && " cursor-not-allowed"}`}
        >
          {loading && (
            <div className="animate-spin  w-5 h-5  border-2  border-gray-200 border-t-blue-400  rounded-full " />
          )}
          {loading ? "Sending" : "Send message"}
        </button>
      </form>
    </div>
  );
}

export default RequestQuoteForm;
