

// import React, { useState, useEffect, useRef } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import ReactMarkdown from 'react-markdown';
// import { BsXCircleFill } from 'react-icons/bs';
// import { FaRobot } from 'react-icons/fa';

// // Use Vite env variable
// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// // Optionally: Handle case where API_KEY is missing
// if (!API_KEY) {
//   console.warn("VITE_GEMINI_API_KEY is not set. Gemini API won't work.");
// }

// const genAI = new GoogleGenerativeAI({
//   apiKey: API_KEY
// });

// const ChatBot = () => {
//   const [question, setQuestion] = useState('');
//   const [messages, setMessages] = useState([]); // Each message: { text, sender }
//   const [loading, setLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const messagesEndRef = useRef(null);

//   const toggleChat = () => setIsOpen(prev => !prev);

//   const generateAnswer = async () => {
//     const trimmed = question.trim();
//     if (!trimmed) return;

//     setMessages(prev => [...prev, { text: trimmed, sender: 'user' }]);
//     setQuestion('');
//     setLoading(true);

//     try {
//       // Choose the Gemini model name you are allowed to use
//       // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       // const result = await model.generateContent(trimmed);
//       // const response = await result.response;
//       // const text = await response.text();


//       const response = await fetch('http://localhost:5000/api/chat', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ question: trimmed }),
// });
// const data = await response.json();
// const text = data.answer || 'No response';
      
//       const botMessage = { text: text.trim(), sender: 'bot' };
//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       console.error("Gemini API error:", error);
//       setMessages(prev => [
//         ...prev, 
//         { text: 'Something went wrong 😢', sender: 'bot' }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages, loading]);

//   return (
//     <>
//       {/* Floating Chat Icon */}
//       <button
//         onClick={toggleChat}
//         aria-label={isOpen ? 'Close chat' : 'Open chat'}
//         className={`fixed bottom-4 left-4 z-50 p-3 rounded-full text-white shadow-lg transition-all
//           ${isOpen ? 'bg-purple-900' : 'bg-purple-700'} animate-lift`}
//         style={{
//           filter: 'drop-shadow(0 0 6px rgba(128, 0, 128, 0.7))',
//           boxShadow: '0 0 8px 2px rgba(160, 32, 240, 0.7)',
//           cursor: 'pointer',
//         }}
//       >
//         {isOpen ? <BsXCircleFill size={22} /> : <FaRobot size={22} />}
//       </button>

//       {isOpen && (
//         <div className="fixed bottom-16 left-4 z-50 w-80 max-w-[90vw] h-[500px] flex flex-col bg-white border border-gray-300 rounded-xl shadow-lg">
//           <div className="bg-purple-800 text-white text-center py-3 rounded-t-xl font-bold tracking-wide text-lg">
//             🤖 Samvaad AI
//           </div>

//           <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
//                   msg.sender === 'user'
//                     ? 'bg-amber-400 text-gray-900 self-end ml-auto text-right shadow-md'
//                     : 'bg-purple-200 text-purple-900 self-start mr-auto text-left shadow-inner'
//                 }`}
//               >
//                 <ReactMarkdown skipHtml>{msg.text}</ReactMarkdown>
//               </div>
//             ))}
//             {loading && (
//               <div className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg w-fit text-sm">
//                 Typing...
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="p-3 border-t flex gap-2">
//             <input
//               type="text"
//               className="flex-1 p-2 border rounded text-sm"
//               placeholder="Type your message..."
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               onKeyDown={(e) => { if (e.key === 'Enter') generateAnswer(); }}
//               disabled={loading}
//             />
//             <button
//               onClick={generateAnswer}
//               disabled={loading}
//               className="bg-purple-700 text-white px-3 py-3 rounded hover:bg-purple-800 disabled:opacity-50 text-sm"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes lift {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-3px); }
//         }
//         .animate-lift {
//           animation: lift 2.5s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default ChatBot;



import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { BsXCircleFill } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]); // { text, sender }
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(prev => !prev);

  const generateAnswer = async () => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { text: trimmed, sender: 'user' }]);
    setQuestion('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await response.json();
      const text = data.answer || 'No response';

      setMessages(prev => [...prev, { text: text.trim(), sender: 'bot' }]);
    } catch (error) {
      console.error("Chat API error:", error);
      setMessages(prev => [...prev, { text: 'Something went wrong 😢', sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  return (
    <>
      <button
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className={`fixed bottom-4 left-4 z-50 p-3 rounded-full text-white shadow-lg transition-all
          ${isOpen ? 'bg-purple-900' : 'bg-purple-700'} animate-lift`}
        style={{
          filter: 'drop-shadow(0 0 6px rgba(128, 0, 128, 0.7))',
          boxShadow: '0 0 8px 2px rgba(160, 32, 240, 0.7)',
          cursor: 'pointer',
        }}
      >
        {isOpen ? <BsXCircleFill size={22} /> : <FaRobot size={22} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 left-4 z-50 w-80 max-w-[90vw] h-[500px] flex flex-col bg-white border border-gray-300 rounded-xl shadow-lg">
          <div className="bg-purple-800 text-white text-center py-3 rounded-t-xl font-bold tracking-wide text-lg">
            🤖 Samvaad AI
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === 'user'
                    ? 'bg-amber-400 text-gray-900 self-end ml-auto text-right shadow-md'
                    : 'bg-purple-200 text-purple-900 self-start mr-auto text-left shadow-inner'
                }`}
              >
                <ReactMarkdown skipHtml>{msg.text}</ReactMarkdown>
              </div>
            ))}
            {loading && (
              <div className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg w-fit text-sm">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded text-sm"
              placeholder="Type your message..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') generateAnswer(); }}
              disabled={loading}
            />
            <button
              onClick={generateAnswer}
              disabled={loading}
              className="bg-purple-700 text-white px-3 py-3 rounded hover:bg-purple-800 disabled:opacity-50 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes lift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-lift {
          animation: lift 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
