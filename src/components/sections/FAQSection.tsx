import { useId } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq } from "../../data/landingPageData.ts";
import { sectionHeadingSx, softSectionSx } from "../../theme/surfaces.ts";

const SECTION_HEADING = "שאלות נפוצות";

export function FAQSection() {
  const sectionId = useId();
  const headingId = `${sectionId}-heading`;

  return (
    <Box
      component="section"
      id="faq"
      aria-labelledby={headingId}
      sx={softSectionSx}
    >
      <Container maxWidth="md">
        <Typography
          id={headingId}
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {SECTION_HEADING}
        </Typography>

        <Box role="region" aria-label="שאלות ותשובות נפוצות">
          {faq.map((item, index) => {
            const panelId = `${sectionId}-panel-${index}`;
            const headerId = `${sectionId}-header-${index}`;

            return (
              <Accordion
                key={item.question}
                disableGutters
                elevation={0}
                square={false}
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
                  borderRadius: "16px !important",
                  overflow: "hidden",
                  "&:not(:last-of-type)": { mb: 1.5 },
                  "&::before": { display: "none" },

                  // Override MUI default first/last accordion radius behavior
                  "&:first-of-type": {
                    borderTopLeftRadius: "16px !important",
                    borderTopRightRadius: "16px !important",
                  },
                  "&:last-of-type": {
                    borderBottomLeftRadius: "16px !important",
                    borderBottomRightRadius: "16px !important",
                  },

                  // Prevent expanded state from changing spacing/radius
                  "&.Mui-expanded": {
                    margin: 0,
                    borderRadius: "16px !important",
                  },
                  "&.Mui-expanded:not(:last-of-type)": {
                    marginBottom: 1.5,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon aria-hidden="true" />}
                  aria-controls={panelId}
                  id={headerId}
                  sx={{ minHeight: 56, px: 2.5 }}
                >
                  <Typography
                    component="h3"
                    variant="subtitle1"
                    sx={{ fontWeight: 600 }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  sx={{ px: 2.5, pb: 2.5 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
