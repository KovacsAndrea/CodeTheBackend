import { Box } from "@mui/material"
import ResponsiveAppBar from "../widgets/navBar/navBar"

export const Theme: React.FC<{}> = ({}) => {
    return(
        <Box sx = {{
            backgroundColor: 'transparent',
            height: '10%',
            width: '100%'
        }}>
            <ResponsiveAppBar/>
        </Box>
    )
} 