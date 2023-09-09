// 'use client'

// import { FullMessageType } from "@/app/types"
// import { useRef, useState } from "react";


// interface BodyProps{
//     initialMessages:FullMessageType[];
// }
// const Body:React.FC<BodyProps> =({
//     initialMessages=[]
// })=>{
//     const [messages,setMessages]=useState(initialMessages);
//     const bottomref = useRef<HTMLDivElement>(null);
//     return(
//         <div className="flex-1 overflow-y-auto">
//             Body!
//         </div>
//     )
// }
// export default Body

'use client';

import axios from "axios";
import { useEffect, useRef, useState } from "react";

import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import MessageBox from "./MessageBox";


interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);
  
  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView();

    const messageHandler = (message: FullMessageType) => {
      axios.post(`/api/conversations/${conversationId}/seen`);

      
      
      bottomRef?.current?.scrollIntoView();
    };

    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((current) => current.map((currentMessage) => {
        if (currentMessage.id === newMessage.id) {
          return newMessage;
        }
  
        return currentMessage;
      }))
    };
  

    return () => {
    }
  }, [conversationId]);

  return ( 
    <div className="flex-1 overflow-y-auto">
        {messages.map((message,i)=>(
           <MessageBox
           isLast={i==messages.length-1}
           key={message.id}
           data={message}/> 
        ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
}
 
export default Body;