import { TableCell } from "@mui/material"

export const PredictionTableCell: React.FC <{children: string}> = ({children}) => {
    return( 
        <TableCell
            key={children}
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              px: 3,
              py: 2,
              borderBottom: 'none',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.25)'
              }
            }}
          >
            {children}
          </TableCell>
    )
}