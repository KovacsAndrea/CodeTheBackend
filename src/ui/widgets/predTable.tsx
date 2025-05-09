import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { PredictionTableCell } from "./tablecell"
import { useGlobalState } from "../../globalStateProvider"

export const PredtictionTable: React.FC<{}> = ({}) => {
    const {prediction} = useGlobalState();
    return (
        <Paper
            elevation={0}
            sx={{
                bgcolor: 'rgba(255, 255, 255, 0)',
                mb: 3,
                overflow: 'hidden',
            }}
            >
            <Table size="small" sx={{ color: 'white' }}>
                <TableHead>
                <TableRow>
                    <PredictionTableCell children={"SUBJECT"}/>
                    <PredictionTableCell children={"PREDICTION"}/>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <PredictionTableCell children={"Alex Albon"}/>
                    <PredictionTableCell children={prediction.AlexAlbon}/>
                </TableRow>
                <TableRow>
                    <PredictionTableCell children={"Carlos Sainz"}/>
                    <PredictionTableCell children={prediction.CarlosSainz}/>
                </TableRow>
                <TableRow>
                    <PredictionTableCell children={"Constructor Points"}/>
                    <PredictionTableCell children={prediction.Constructor}/>
                </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}