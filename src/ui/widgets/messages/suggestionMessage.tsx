import { Box } from "@mui/material"
import { QandA } from "../../constants/models"

export const SuggestionMessage:React.FC<{qanda: QandA, onClickAction: any}> = ({qanda, onClickAction}) => {
    return (
        <>
        <Box 
            onClick={onClickAction}
            sx={{ 
            alignSelf: 'left', 
            bgcolor: 'rgba(255,255,255,0.2)', 
            px: 2, 
            py: 1, 
            borderRadius: '5px',
            maxWidth: '100%',
            wordWrap: 'break-word',       
            overflowWrap: 'break-word',     
            whiteSpace: 'pre-wrap', 
            fontSize: {phones: '0.75rem', desktops: '1rem', fullHD: '1.1rem', qHD: '2rem'},
            '&:hover': {
                bgcolor: 'rgba(255,255,255,0.3)', 
                cursor: 'pointer'
            }
            }}>
                    {qanda.question}
        </Box>
        </>
    )
}