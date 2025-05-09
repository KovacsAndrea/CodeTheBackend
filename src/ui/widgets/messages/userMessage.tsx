import { Box, Typography } from "@mui/material"

export const UserMessage:React.FC<{message: string}> = ({message}) => {
    return (
        <>
        <Box sx={{ 
            alignSelf: 'flex-end', 
            bgcolor: 'rgba(255,255,255,0.2)', 
            px: 2, 
            py: 1, 
            borderRadius: '5px',
            maxWidth: '80%',
            wordWrap: 'break-word',       
            overflowWrap: 'break-word',     
            whiteSpace: 'pre-wrap', 
            fontSize: {phones: '0.75rem', desktops: '1rem', fullHD: '1.1rem'},
            }}>
                    {message}
        </Box>
        </>
    )
}