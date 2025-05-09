import { Box, Card, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../../../globalStateProvider"

export const InfoCard: React.FC<{title: string, info:string, imagePath:string, routePath:string}> = ({title, info, imagePath, routePath}) => {
    const {setCurrentPage} = useGlobalState();
    return (
        <>
                <Card sx={{
                    display: 'flex',
                    margin: '1rem',
                    alignSelf: 'flex-start',
                    maxWidth: {
                    phones:'20rem',
                    desktops: '37rem',
                    fullHD: '50rem',
                    qHD: '40rem',
                    uHD: '70rem',
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                    },
                    boxShadow: 0,
                    '&:hover': {
                        cursor: 'pointer',
                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                    }
                    }}
                    onClick = {() => {setCurrentPage(routePath)}}>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        p: 1 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'white',
                                fontFamily: 'Cal Sans',
                                fontWeight: 'thin' ,
                                fontSize: {
                                    phones:'1.5rem',
                                    desktops: '1.5rem',
                                    fullHD:'3rem',
                                    qHD: '4rem',
                                    uHD: '5rem'
                                },
                                }}>
                                    
                        {title}
                        </Typography>
                        <Typography

                            variant="body2"
                            sx={{
                                fontFamily: 'Raleway',
                                color: 'white',
                                fontWeight: '300',
                                fontSize: {
                                    phones:'1rem',
                                    desktops: '1rem',
                                    fullHD:'1.3rem',
                                    qHD: '1.75rem',
                                    uHD: '2rem'
                                },
                                mt: 2 }}>
                        {info}
                        </Typography>
                    </Box>
                </Card>
        </>
    )
}