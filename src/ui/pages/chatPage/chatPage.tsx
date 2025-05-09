import { Box, Button, Fade, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react";
import { MessageData, QandA } from "../../constants/models";
import { No283Message } from "../../widgets/messages/No283Message";
import { UserMessage } from "../../widgets/messages/userMessage";
import { useGlobalState } from "../../../globalStateProvider";
import { SuggestionMessage } from "../../widgets/messages/suggestionMessage";
import { QandAs } from "../../constants/dataSets";
import { AssistWalker } from "@mui/icons-material";

export const ChatPage: React.FC<{}> = ({}) => {
    const [message, setMessage] = useState<string>("");
    
    const {conversation, setConversation, currentPage} = useGlobalState();
    
    const qandas = QandAs;

    const updateInputValue = (value: string) => {
        setMessage(value)
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "1.5rem"; // Reset height
            textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 144)}px`; // 144px ≈ 6 lines
        }
    }

    const no283replies = (no283reply: MessageData) => {
        
        setConversation(prev => [...prev, no283reply]);
    }

    const sendMessage = () => {
        if(message.length !== 0){
            const userMessage: MessageData = {
                messageContent: message,
                messageSender: "user"
            }
            setConversation(prev => [...prev, userMessage]);
            setMessage("");
            if (textAreaRef.current) {
                textAreaRef.current.style.height = "1.5rem";
              }
            setTimeout(() => {
                const newMessage: MessageData = {
                    messageContent: "Haha! That's so funny!",
                    messageSender: "inkerman"
                }
                no283replies(newMessage);
              }, 500);
        }
    }

    const askQuestion = (qanda: QandA) => {
        const userMessage: MessageData = {
            messageContent: qanda.question,
            messageSender: "user"
        }
        setConversation(prev => [...prev, userMessage]);
        setTimeout(() => {
            const newMessage: MessageData = {
                messageContent: qanda.answer,
                messageSender: "inkerman"
            }
            no283replies(newMessage);
          }, 500);
          console.log(conversation)
    }

    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);


    useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    }, [conversation, message]);

    
    return(
        <>
        <Fade in = {currentPage === "/no283"} timeout = {300}>
                <Box sx ={{display: 'flex',
                flexDirection: 'row',
                backgroundImage: 'linear-gradient(to bottom, black 0%, transparent 50%, black 100%), url(/images/AtlassianWilliamsTeamFotor.jpg)',
                backgroundSize: 'cover',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
                overflow: 'hidden',
                textAlign: 'left',
                color: 'white',
                width: '100%',
                height: '100dvh'
            }}>
                {/* SUGGESTION BOX */}
                <Box 
                id = "no283-suggestion-box"
                sx={{
                    display: {phones: 'none', desktops: 'flex'},
                    backdropFilter: 'blur(10px)',
                    bgcolor: 'rgba(255, 255, 255, 0.18)',
                    alignItems: 'top',
                    margin: '2rem 1rem 0 0',
                    height: '80%',
                    width: '20%',
                    borderRadius: '5px'
                    
                }}> 
                
                        <Box sx ={{
                            width: '100%',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: 'monospace',
                            justifyContent: 'top',
                            overflow: 'scroll',
                            scrollbarWidth: 'none',
                            gap: '1rem',
                        }}>
                            {
                                qandas.map((qandai, index ) =>
                                    <SuggestionMessage key={index} qanda={qandai} onClickAction = {() => askQuestion(qandai)}/>)
                            }

                        </Box>

                    
                </Box>
                
                {/* CHAT BOX */}
                <Box 
                id = "no283-entire-chat-box"
                sx={{
                    backdropFilter: 'blur(10px)',
                    bgcolor: 'rgba(255, 255, 255, 0.18)',
                    mt: '2rem',
                    ml: {
                        phones: '0',
                        desktops: '1rem'
                    },
                    height: '80%',
                    width: {phones: '85%', desktops: '60%'},
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'monospace',
                    justifyContent: 'space-between',
                    borderRadius: '5px',
                    overflow: 'hidden',

                }}> 
                
                {/* MESSAGES AREA */}
                <Box
                id = "no283-mesages-display-area"
                ref={chatContainerRef}
                    sx={{
                    flexGrow: 1,
                    padding: '1rem',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {
                        conversation.map((message, index) => 
                            message.messageSender === "inkerman" ? <No283Message key = {index} message = {message.messageContent}/> : 
                            <UserMessage key = {index} message = {message.messageContent}/>)
                    }
                    
                </Box>

                {/* INPUT AREA */}
                <Box
                    id = "no283-input-box"
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    
                    }}
                >
                    <textarea
                    ref = {textAreaRef}
                    placeholder="Ask No. 283..."
                    value={message}
                    onChange={e => updateInputValue(e.target.value)}
                    style={{
                        flexGrow: 1,
                        fontSize: '0.9rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        outline: 'none',
                        fontFamily: 'monospace',
                        resize: 'none',
                        minHeight: '1.5rem',
                        height: '1.5rem',
                        maxHeight: '9rem', 
                        overflowY: 'auto',
                        lineHeight: '1.5rem',
                    }}
                    />
                    <IconButton sx={{ color: 'white', ml: 1 }} onClick={() => sendMessage()}>
                    <SendIcon />
                    </IconButton>
                </Box>
                </Box>
            </Box>
            </Fade>
            </>
    )
}