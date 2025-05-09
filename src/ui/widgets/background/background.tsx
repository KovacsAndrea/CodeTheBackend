import { Box } from "@mui/material"

export const Background: React.FC<{backgroundImage:string, children: any}> = ({backgroundImage, children}) => {
    const editedbg = "linear-gradient(to bottom, black 0%, transparent 50%, black 100%), " + backgroundImage;
    return(
        <Box sx ={{display: 'flex',
            flexDirection: 'row',
            backgroundImage: {editedbg},
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
            {children}
        </Box>
    )
}