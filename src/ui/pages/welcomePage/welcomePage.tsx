import { Box, Button, Fade, Typography } from "@mui/material"
import '@fontsource/roboto/100.css';
import { useGlobalState } from "../../../globalStateProvider";

export const WelcomePage: React.FC<{}> = ({}) => {

    const {currentPage, setCurrentPage} = useGlobalState();

    const handleClick = () => {
        setCurrentPage('/home')
    };
    return(
        <>
        <Fade in = {currentPage === "/welcome"} timeout = {300}>


            <Box
                sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundImage: 'linear-gradient(to bottom, black 0%, transparent 50%, black 100%), url(/images/WilliamsFotorWelcome.png)',
                    backgroundSize: 'cover',
                    margin: '0',
                    overflow: 'hidden',
                    textAlign: 'left',
                    color: 'white',
                    width: '100%',
                    height: '100dvh'

                }}>
                
                            <Box sx ={{ 
                                mt: '4rem',
                                ml: {
                                    phones: '2rem',
                                    desktops: '3rem'
                                }
                            }}>
                            <Typography variant = 'h1'
                            sx = {{
                                fontSize: {
                                    phones:'4rem',
                                    desktops: '8rem',
                                    fullHD:'10rem',
                                    qHD: '15rem',
                                    uHD: '17rem'
                                },
                                fontFamily: "Cal Sans",
                                fontWeight: 'bold'
                                
                            }}>code the</Typography>
                        
                        
                            <Typography variant = 'h1'
                            sx = {{
                                fontSize: {phones:'4rem',
                                    desktops: '8rem',
                                    fullHD:'10rem',
                                    qHD: '15rem',
                                    uHD: '17rem'
                                },
                                fontFamily: "Cal Sans",
                                fontWeight: 'bold',
                            }}>grid.</Typography>
                            <Typography variant = 'body2'
                            sx = {{
                                fontSize: {
                                    phones:'1rem',
                                    desktops: '1rem',
                                    fullHD:'1.25rem',
                                    qHD: '1.5rem',
                                    uHD: '2rem'
                                },
                                
                                padding: '1rem 0 2rem 0',
                                fontWeight: '300',
                                fontFamily: "Raleway",
                                maxWidth: {
                                    phones: '70%',
                                    desktops:"30%"
                                },
                            }}>From pit lane to production, precision defines every move. As Formula 1 merges with machine learning, the race isn’t just on the track—it’s in the code. Dive into a world where milliseconds matter, models make the difference, and every prediction could mean a place on the podium. This is where speed meets data, and strategy is written in algorithms.</Typography>
                    
                            <Button
                                variant="outlined"
                                onClick={handleClick}
                                sx={{
                                    color: 'white',
                                    fontFamily: "Raleway",
                                    border: '0.15rem solid white',
                                    padding: '0.2rem 2rem',
                                    fontWeight: '300',
                                    textTransform: 'none',
                                    '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: 'white',
                                    },
                                    fontSize: {phones:'1rem',
                                        desktops: '1rem',
                                        fullHD:'1.25rem',
                                        qHD: '1.5rem',
                                        uHD: '2rem'
                                    },
                                }}
                                >
                                START THE ENGINES
                                </Button>
                                </Box>
                    </Box>
        </Fade>
        </>
    )
}