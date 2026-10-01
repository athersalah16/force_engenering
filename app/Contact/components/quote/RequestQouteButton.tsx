import { Send } from "lucide-react";
import useNavLinks from "@/app/hooks/useNavLinks";

function RequestQouteButton() {

  return (
    <a
      href="/Contact"
      className="bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors  flex flex-row justify-center items-center gap-4 duration-300"
    >
     <Send size={16}/> Request a Quote
    </a>
  );
}

export default RequestQouteButton;
