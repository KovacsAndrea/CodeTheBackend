import { Box, Fade } from '@mui/material'
import { cardsList } from '../../constants/dataSets'
import { InfoCard } from '../../widgets/infoCard/infoCard'
import { useGlobalState } from '../../../globalStateProvider';

export const HomePage: React.FC<{}> = ({}) =>{
    const {currentPage} = useGlobalState();
    return (
        <>
            <Fade in = {currentPage === "/home"} timeout={300}>
            <Box
            sx = {{
                display: 'flex',
                backgroundImage: 'linear-gradient(to bottom, black 0%, transparent 50%, black 100%), url(/images/WilliamsAboveF.jpg)',
                flexDirection: 'column',
                backgroundSize: 'cover',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                height: '100dvh',
                width: '100%',
                backgroundColor: 'white',
                overflow: 'hidden'
            }}>
                <Box sx = {{
                    display: 'flex', 
                    flexDirection: 'column',
                    m: '1rem',
                    mt: '4rem',
                    overflow: 'scroll',
                    scrollbarWidth: 'none'
                }}> 
                    
                    <Box sx = {{}}>
                        {cardsList.map((card, index) => 
                                <InfoCard 
                                key = {index} 
                                title={card.title} 
                                info={card.info} 
                                imagePath={card.imagePath} 
                                routePath={card.routePath} />)}
                    </Box>
                </Box>
            </Box>
            </Fade>
        </>
    )
}