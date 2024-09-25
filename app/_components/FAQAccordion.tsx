import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'

interface FAQAccordionProps {
  summary: string
  details: string
}

const FAQAccordion = ({ summary, details }: FAQAccordionProps) => {
  return (
    <Box paddingBottom={1}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography textAlign={'left'} color={'text.secondary'}>
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign={'left'} variant='body2'>
            {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQAccordion
