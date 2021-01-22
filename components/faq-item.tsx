import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';

import { Faq } from 'types';

interface Props {
  faq: Faq;
  index: number;
}

export default function FaqItem({ faq, index }: Props) {
  return (
    <Accordion key={faq.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}a-content`}
        id={`panel${index + 1}a-header`}
      >
        <Typography>
          {faq.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {faq.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
