import { Box } from "@mui/material"

export const No283Message:React.FC<{message: string}> = ({message}) =>{
    return (
        <>
        <Box sx={{ 
            alignSelf: 'flex-start', 
            bgcolor: 'rgba(0,0,0,0.6)', 
            px: 2, 
            py: 1, 
            borderRadius: '5px',
            maxWidth: '80%',
            wordWrap: 'break-word',       
            overflowWrap: 'break-word',
            fontSize: {phones: '0.75rem', desktops: '1rem', fullHD: '1.1rem'},
            whiteSpace: 'pre-wrap', }}>
                    {message}
        </Box>
        </>
    )
}