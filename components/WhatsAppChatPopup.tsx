"use client";
import { useState } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

const WhatsAppChatPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("Hi, I am interested in your products and services.");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const phoneNumber = "2348136851352";

  const startChat = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    setIsPopupOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {isPopupOpen && (
        <div className="w-72 rounded-[30px] overflow-hidden shadow-lg bg-white">
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <FaWhatsapp size={20} className="mr-2" />
              <span>WhatsApp Chat</span>
            </div>
            <button
              onClick={togglePopup}
              className="text-white focus:outline-none"
              aria-label="Close chat popup"
            >
              <FaTimes size={18} />
            </button>
          </div>
          <div className="bg-gray-100 p-4">
            <p className="text-gray-600 text-md mb-4">
              Send us a message today and we will contact you as soon as possible.
            </p>
            <textarea
              value={message}
              onChange={handleMessageChange}
              className="w-full p-3 border bg-white text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 resize-none"
              rows={4}
            />
            <button
              onClick={startChat}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center justify-center w-full transition-colors duration-300"
            >
              <FaPaperPlane size={16} className="mr-2" />
              Start Chat
            </button>
          </div>
        </div>
      )}

      <button
        onClick={togglePopup}
        aria-label="Toggle WhatsApp chat"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppChatPopup;
