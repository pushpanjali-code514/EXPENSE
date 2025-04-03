"use client";

import { useState, useRef, useEffect } from "react";
import { BotIcon, Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAwh1eeKcsAcZ1sfajaAPhlaWrFCQiibZI"; // Replace with your Gemini API Key
const genAI = new GoogleGenerativeAI(API_KEY);

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(
        "Your name is FinBot, you are a bot that only answers finance-related queries. Answer every question without any formatting, markdown, or special characters like asterisks (*), dashes (-), or bullet points, and in a maximum of 220 words only. " +
          input
      );
      const botResponse = { sender: "bot", text: result.response.text() };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="flex items-center gap-3 mb-6">
        <BotIcon size={30} className="text-blue-500" />
        <h1 className="text-3xl font-bold">Chatbot</h1>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-auto flex flex-col gap-2">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">Start a conversation...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[75%] p-3 rounded-lg ${
                msg.sender === "user"
                  ? "bg-green-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
        {loading && <p className="text-gray-500 text-center">Thinking...</p>}
        {/* Invisible div to track the end of messages for auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center mt-4 border rounded-lg p-2">
        <input
          type="text"
          className="flex-1 p-2 outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 text-green-500"
          disabled={loading}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
