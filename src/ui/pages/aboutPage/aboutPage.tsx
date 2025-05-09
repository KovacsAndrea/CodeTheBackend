import { Box, Fade, Typography } from "@mui/material"
import { Background } from "../../widgets/background/background"
import { useGlobalState } from "../../../globalStateProvider"

export const AboutPage: React.FC<{}> = ({}) => {
    const {currentPage} = useGlobalState()

    return (<>
    <Fade in = {currentPage === "/about"} timeout = {300}>
        
    <Box sx ={{display: 'flex',
                flexDirection: 'row',
                backgroundImage: 'linear-gradient(to bottom, black 0%, transparent 50%, black 100%), url(/images/MiamiRainFotor.jpg)',
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

            </Box>
        
    
            </Fade>
    </>)
}