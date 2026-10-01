import { ArrowRight } from "lucide-react";

function ContactUs() {
  return (
    <div className="max-w-md mx-3 lg:ml-5 px-4 py-5 mb-2  border border-blue-200 rounded-md">
      <h2 className="text-blue-900  font-semibold  py-2">
        Let's Build Success Together
      </h2>
      <p className="text-sm max-w-xs text-gray-400 py-2">
        Have a project in mind? Get in touch whit our team today
      </p>
      <a
        href="/Contact"
        className="inline-flex flex-row text-white hover:bg-blue-900 bg-blue-800 px-2 py-2 rounded-md"
      >
        Contact Us <ArrowRight />
      </a>
    </div>
  );
}

export default ContactUs;
