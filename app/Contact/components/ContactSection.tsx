import BaseSection from "@/app/common/base/BaseSection";
import HowCanWeHelp from "./get_in_touch/HowCanWeHelp";
import RequestQuoteForm from "./quote/RequestQuoteForm";
import GetInTouch from "./get_in_touch/GetInTouch";
import ChatOnWhatsappButton from "./get_in_touch/ChatOnWhatsappButton";

function ContactSection() {
  return (
    <BaseSection title="contact" sectionID="contact">
      <div className="flex flex-col py-6 gap-6 ">
        <div>
          {" "}
          <h1 className="text-2xl lg:text-3xl   text-center font-bold text-blue-900 ">
            Let’s Build Better Solutions Together
          </h1>
        </div>{" "}
        <div className="w-full flex mx-auto flex-col lg:flex-row gap-12 px-2 lg:px-12  lg:justify-between ">
          <div className="flex flex-col gap-6">
            <HowCanWeHelp />
           <div className="w-full border-b border-blue-950 text-2xl"/>
            <GetInTouch className="text-gray-400 hover:text-blue-950 hover:font-semibold" />
             <ChatOnWhatsappButton />
          </div>
          <RequestQuoteForm />
        </div>
      </div>
    </BaseSection>
  );
}

export default ContactSection;
