"use client";
import { useRef, useState } from "react";
import { getTheData } from "../../../utils/getFormData";
import { validateForm } from "../../../utils/validateData";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function RequestQuoteForm() {
  const [error, setError] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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
        serviceId,
        templateId,
        formRef.current,
        publicKey,
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

  const textStyle = `outline-none border text-foreground border-input rounded-md py-2 px-4 focus:ring-2 focus:ring-ring 
  ${error && "focus:ring-destructive border-destructive focus:ring-2 "}`;
  return (
    <div className="w-full lg:w-[45%] bg-muted p-1 lg:p-8 rounded-lg shadow-md">
      <h1 className="text-brand-950 py-2 lg:pb-2 text-xl lg:text-3xl font-bold text-center">
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

        <Button
          type="submit"
          variant={'default'}
          disabled={loading}
          className={`justify-center ml-4 px-3 py-2 `}
        >
          {loading && (
            <div className="animate-spin  w-5 h-5  border-2  border-border border-t-brand-600  rounded-full " />
          )}
          {loading ? "Sending" : "Send message"}
        </Button>
      </form>
    </div>
  );
}

export default RequestQuoteForm;
