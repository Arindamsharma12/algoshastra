import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";
import Button from "./Button";

const AskGenie = () => {
  const [doubt, setDoubt] = useState("");
    const [response, setResponse] = useState("");
    const [displayedText, setDisplayedText] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse("Thinking... 🤔");
        setDisplayedText("");

        try {
            const res = await axios.post("http://localhost:8000/api/v1/users/ask-doubt", { doubt });
            setResponse(res.data.reply);

        } catch (error) {
            console.error("Error:", error);
            setResponse("Failed to get a response. ❌");
        }
    };

   
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:overflow-visible lg:px-0 w-screen space-y-10 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold text-gray-800">Ask Your Doubt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          className="p-3 w-200" 
          placeholder="Enter your doubt..."
        />
        <Button type="submit">Ask</Button>
      </form>
      {
        response && (
          <div class="w-[80%] h-80 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md overflow-y-auto ">
        <h2 class="text-xl font-semibold mb-2">AI Reply:</h2>
        <ReactMarkdown>{response}</ReactMarkdown>
      </div>
      ) 
      }
    </div>
  );
};

export default AskGenie;
