import { Send } from "lucide-react";
import useNavLinks from "@/app/hooks/useNavLinks";

function RequestQouteButton() {

  return (
    <a
      href="/Contact"
      className="bg-primary text-center text-primary-foreground px-4 py-2 rounded-md hover:bg-brand-800 transition-colors  flex flex-row justify-center items-center gap-4 duration-300"
    >
     <Send size={16}/> Request a Quote
    </a>
  );
}

export default RequestQouteButton;
