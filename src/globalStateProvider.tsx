import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { MessageData, Prediction } from "./ui/constants/models";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


interface GlobalState{
    conversation: MessageData[];
    setConversation: React.Dispatch<React.SetStateAction<MessageData[]>>
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
    prediction: Prediction;
    setPrediction: React.Dispatch<React.SetStateAction<Prediction>>
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined)

export const GlobalStateProvider: React.FC<{children: ReactNode}> = ({children}) =>{

    const firstMessage: MessageData = {
        messageContent: "Hi! My name is No. 283! I'm glad yo meet you!",
        messageSender: "inkerman"
    }

    const emptyPrediction: Prediction = {
        AlexAlbon: "...",
        CarlosSainz: "...",
        Constructor: "..."
    }
    
    const [conversation, setConversation] = useState<MessageData[]>([firstMessage])
    const [prediction, setPrediction] = useState<Prediction>(emptyPrediction)
    const serverPath = "http://localhost:3001"

    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>(location.pathname)
    const [navigating, setNavigating] = useState(false);

    const refreshPredictions = () => {
        console.log("Refreshing predicitons...")
        axios.get<{prediction: Prediction}>(serverPath + "/predictions").then(response => {
            setPrediction(response.data.prediction)
        }).catch(error => {
            console.error('Error refreshing predictions...', error);
        });
        
    }

    useEffect(() => {
        refreshPredictions();
      
        const interval = setInterval(() => {
          refreshPredictions();
        }, 5000); 
      
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        if(!navigating && location.pathname !== currentPage){
            setCurrentPage(location.pathname)
        }
        setNavigating(false)
    }, [location]);

    useEffect(() => {
        setNavigating(true)
        setTimeout(() => {
            navigate(currentPage);
          }, 300); 
    }, [currentPage])

    const state: GlobalState = {
        conversation, 
        setConversation,
        currentPage,
        setCurrentPage,
        prediction, 
        setPrediction
    }

    return <GlobalStateContext.Provider value = {state}>
        {children}
    </GlobalStateContext.Provider>
}

export const useGlobalState = (): GlobalState => {
    const context = useContext(GlobalStateContext)
    if(!context){
        throw new Error("useGlobalStaet must be within a GlobalStateProvider :)")
    }
    return context
}