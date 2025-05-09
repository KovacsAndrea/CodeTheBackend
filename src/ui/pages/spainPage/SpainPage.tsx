import { Accordion, AccordionDetails, AccordionSummary, Box, Fade, Typography } from "@mui/material"
import { useGlobalState } from "../../../globalStateProvider"
import { SpainPageData } from "../../constants/dataSets"
import { PredtictionTable } from "../../widgets/predTable"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export const SpainPage: React.FC<{}> = ({}) => {
    const{currentPage} = useGlobalState()
    const [expanded, setExpanded] = useState<string | false>(false);
        
    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        };
    return (<>
    <Fade in = {currentPage === "/spain"} timeout = {300}>
    <Box sx ={{display: 'flex',
                        flexDirection: 'row',
                        backgroundImage: 'linear-gradient(to bottom, black 0%, transparent 50%, black 100%), url(/images/SpainCircuit.jpg)',
                        backgroundSize: 'cover',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0',
                        
                        textAlign: 'left',
                        color: 'white',
                        width: '100%',
                        height: '100dvh',
                         backgroundPosition: 'center bottom'
                    }}>
                         <Box
                        sx={{
                            width: '90%',
                            height: '80%',
                            mt: '5rem',
                            p: 2,
                            color: 'white',
                            bgcolor: 'rgba(3, 3, 3, 0.64)',
                            borderRadius: 2,
                            overflow: 'scroll',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                        }}
            >
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            SPAIN
                        </Typography>
        
                        <Typography sx={{ mb: 2 }}>
                            {SpainPageData.pageinfo}
                        </Typography>
        
                        <PredtictionTable />
                        <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                            sx={{
                            bgcolor: 'rgba(0, 0, 0, 0)',
                            color: 'white',
                            '&::before': { display: 'none' },
                            }}
              >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                        <Typography>HISTORY</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {SpainPageData.pageHistory}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
        
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                        sx={{
                        bgcolor: 'rgba(0, 0, 0, 0)',
                        color: 'white',
                        mt: 1,
                        '&::before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                        <Typography>DATA</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        {SpainPageData.pageData}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </Box>
                </Box>

    </Fade>
    </>)
}