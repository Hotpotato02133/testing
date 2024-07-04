import React, { useEffect, useState, useRef } from 'react';
import './FloatingAIButton.css';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import Fuse from 'fuse.js';

const FloatingAIButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! I am Roro. How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatboxRef = useRef(null);

  const apiKey = 'AIzaSyCEbuha847Vh_99QHbjuyF0G4BLiUfRspE';
  const MODEL_NAME = 'gemini-1.5-pro-latest';

  // Knowledge base
  const knowledgeBase = [
    { question: "What is the purpose of this application?", answer: "This application helps users track sales, cash discrepancy, stocks, inventory and reports from ORO."},
    { question: "How do I sign up?", answer: "To sign up, click on the 'Sign up' button at the top right corner and fill out the registration form."},
    { question: "How did ORO begin its journey and what was its original industry?", answer: "ORO began its journey in the pharmaceutical industry in Zamboanga City, Philippines."},
    { question: "Into which industries has ORO expanded over the years?", answer: 'ORO has expanded into the jewelry , pawnshop, grocery, telecom, restaurant, and automotive industries.'},
    { question: "How many years has ORO been in operation?", answer: 'ORO has been operating for 43 years.'},
    { question: "What makes ORO a dynamic company", answer: "ORO's ability to diversify and expand its various industries while maintaining strong operations make it a dynamic company."},
    { question: "Where is ORO located?" , answer: "ORO is located in Zamboanga City, Philippines."},
    { question: "How does ORO manage its diverse portfolio of businesses?", answer: "ORO manages its diverse portfolio through strategic planning effective management practices, and continuous innovation."},
    { question: "What role does community engagement play in ORO's operations?", answer: 'ORO actively engages with the community through various initiatives, contributing to solid and economic development in Zamboanga City.'},
    { question: "Who are the IT of ORO?", answer: "1. Sir Gerard Montojo the Senior Backend Developer, 2. Sir Christopher Singson the Senior Frontend Developer, 3. Efraim James Talucod the Junior UI Designer"},
    { question: "Branches of ORO", answer: "ORO 1, ORO 2, ORO 4, ORO 6, ORO 7, ORO 8, ORO 9, ORO 10, ORO 11, ORO 12, ORO 14, ORO 15"},
    { question: "Where is ORO 1 located?", answer: "J.S. Alano Street, Z.C., in front of Public Market"},
    { question: "Where is ORO 2 located?", answer: "P. Brillantes Street, Z.C., in front of Puericulture"},
    { question: "Where is ORO 4 located?", answer: "Climaco Street, Z.C., corner of Brillantes Street"},
    { question: "Where is ORO 6 located?", answer: "Nuñez Extension, Z.C., beside Ciudad Medical Hospital"},
    { question: "Where is ORO 7 located?", answer: "Veterans Avenue, Z.C., in front of General Hospital"},
    { question: "Where is ORO 8 located?", answer: "Gov. Lim Avenue, near OK Bazaar"},
    { question: "Where is ORO 9 located?", answer: "Tetuan Street, beside WMCC Hospital"},
    { question: "Where is ORO 10 located?", answer: "1/F Shopper's Center (The Gateway)"},
    { question: "Where is ORO 11 located?", answer: "Veterans Avenue, beside Doctor's Hospital"},
    { question: "Where is ORO 12 located?", answer: "3/F Southway Square Mall"},
    { question: "Where is ORO 14 located?", answer: "1/F Shopper's Center (The Gateway)"},
    { question: "Where is ORO 15 located?", answer: "P. Brillantes Street, in front of Chowking"},
    { question: "Who is ORO Wonder Drug?", answer: "ORO is a dynamic company in Zamboanga City, that has started its root in the pharmaceutical industry and has since expanded into the jewelry, pawnshop, grocery, telecom, and automotive industries. ORO has been operating for 43 years now, and is stronger than ever."},
    { question: "What is ORO Vision?", answer: " We shall be the leading pharmacy, jewelry, pawnshop, telecom, grocery chains in the Philippines, the ultimate resource of health and nutrition needs, the connoisseur of luxury products, the provider of communication needs, and a reliable partner in enhancing the health and enriching the lives of our customers."},
    { question: "What is ORO Mission?", answer: "To achieve our vision, we will be the lowest-cost provider, prioritizing value of customers money over profit to appeal to every socio-economic class; we will branch out even to the remotest areas in order to be accessible to our customers; we will be responsive to their total health care needs by being the most comprehensive provider of quality health-care products; we will offer them the most exceptional customer service in the region by listening to and advocating their interests; we will be technologically adaptive in providing efficient and cost-effective business solutions; and we will nurture a positive relationship with our employee partners to ensure a shared vision."},
    { question: "What is ORO Philosophy", answer: "We believe in perfection; it is the driving principle of our organization. We believe in constant innovation; it is our passion to be better. We believe in solutions; all barriers can be overcome. We believe in setting priorities; there are only a few things that truly matter. We believe in teamwork; it is the engine of our success."},
    { question: "What is ORO Values", answer: "ORO has 5 core values that should be culturally adapted by all employee partners. 1.) Find ways - Never say 'no'. Be resourceful. Every problem has a solution. 2.) Don't be over-sensitive(balat sibuyas). Accept all feedback constructively and with an open mind. They are for your improvements. 3.) Don't stay idle. Always keep yourself busy. Look for work to do every time. Your every contribution helps ORO grow. 4.) Practice 'CLAYGO' (Clean As You Go). Observe cleanliness in all your work. 5.) Apply the principles of humility & transparency. Do not be arrogant. Be honest, Don't hide anything. Report all suspicious activities."},
    { question: "What are businesses does ORO have?", answer: "ORO Megaworld Jewelry, ORO Wonderdrug, ORO Pawnshop, ORO Convenience Store, Foton Motors & ORO Telecom "},
  ];

  // Initialize Fuse.js
  const fuse = new Fuse(knowledgeBase, {
    keys: ['question'],
    threshold: 0.9, // Adjust the threshold for more or less fuzzy matching
  });

  const handleSend = async () => {
    if (inputValue.trim()) {
      const newMessage = { from: 'user', text: inputValue.trim() };
      setMessages([...messages, newMessage]);
      setInputValue('');
      await getAIResponse(inputValue.trim());
    }
  };

  const getAIResponse = async (prompt) => {
    setIsLoading(true);

    // Check the knowledge base first using Fuse.js
    const result = fuse.search(prompt);

    if (result.length > 0) {
      const bestMatch = result[0].item;
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: 'ai', text: bestMatch.answer }
      ]);
      setIsLoading(false);
    } else {
      // If no match is found, use the Gemini API
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const generationConfig = {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 8192,
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      try {
        const chat = model.startChat({
          generationConfig,
          safetySettings,
          history: [],
        });

        const result = await chat.sendMessage(prompt);
        const response = result.response;
        const aiResponse = response.text();

        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'ai', text: aiResponse }
        ]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'ai', text: 'Sorry, there was an error processing your request.' }
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <button className="floating-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">Chat with Roro</div>
          <div className="chatbox-messages" ref={chatboxRef}>
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.from === 'ai' ? 'left' : 'right', margin: '10px 0' }}>
                <strong>{msg.from === 'ai' ? 'Roro: ' : 'You: '}</strong>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className='skeleton'>
                <div className='skeleton-paragraph'></div>
                <div className='skeleton-paragraph'></div>
                <div className='skeleton-paragraph'></div>
              </div>
            )}
          </div>
          <div className="input-container">
            <input
              className="input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-button" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIButton;
