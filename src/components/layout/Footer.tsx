import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { business, footer, hero, nap } from "../../data/landingPageData.ts";
import { iconChipSx, whatsAppContainedSx } from "../../theme/surfaces.ts";
import { trackFacebookClick } from "../../utils/tracking.ts";
import { PhoneButton } from "../conversion/PhoneButton.tsx";
import { WhatsAppButton } from "../conversion/WhatsAppButton.tsx";

const FOOTER_LOCATION = "footer";

function isConfiguredFacebookUrl(url: string): boolean {
  const trimmed = url.trim();

  if (!trimmed) {
    return false;
  }

  return !trimmed.includes("placeholder");
}

export function Footer() {
  const showFacebook = isConfiguredFacebookUrl(business.facebookUrl);

  const handleFacebookClick = () => {
    trackFacebookClick(FOOTER_LOCATION);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        pt: { xs: 4, md: 4.5 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr" },
            gap: { xs: 3, md: 4 },
            mb: { xs: 3, md: 3.5 },
            width: "100%",
            textAlign: { xs: "center", md: "start" },
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <Stack
            spacing={1.5}
            sx={{
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={hero.logo}
              alt={nap.name}
              width={hero.logoWidth}
              height={hero.logoHeight}
              sx={{
                width: { xs: 90, md: 100 },
                height: "auto",
                display: "block",
                mb: 0.5,
              }}
            />
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: 800, mb: 0.5, letterSpacing: "-0.01em" }}
            >
              {nap.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.75)",
                mb: 1,
                lineHeight: 1.7,
              }}
            >
              {business.tagline}
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            ></Stack>
          </Stack>

          <Box>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 700, mb: 1.5, letterSpacing: "-0.01em" }}
            >
              אזורי שירות
            </Typography>
            <Stack
              spacing={1.25}
              sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            >
              {nap.areas.map((area) => (
                <Stack
                  key={area}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Box aria-hidden="true" sx={iconChipSx}>
                    <LocationOnOutlinedIcon fontSize="small" />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.88)", lineHeight: 1.6 }}
                  >
                    {area}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 700, mb: 1.5, letterSpacing: "-0.01em" }}
            >
              קישורים מהירים
            </Typography>
            <Stack
              component="nav"
              aria-label="קישורי ניווט בתחתית הדף"
              spacing={1}
              sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            >
              {footer.anchorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  underline="hover"
                  sx={{
                    color: "rgba(255, 255, 255, 0.88)",
                    width: "fit-content",
                    fontSize: "0.9375rem",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)", mb: 3 }} />

        <Stack spacing={2} sx={{ alignItems: "center", mb: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            מוכנים להתחיל? צרו קשר עכשיו
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ width: "100%", maxWidth: 480 }}
          >
            <PhoneButton location={FOOTER_LOCATION} fullWidth />
            <WhatsAppButton
              location={FOOTER_LOCATION}
              fullWidth
              variant="contained"
              sx={whatsAppContainedSx}
            />
          </Stack>
        </Stack>

        {showFacebook ? (
          <Link
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFacebookClick}
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "rgba(255, 255, 255, 0.88)",
              mb: 2,
              mx: { xs: "auto", md: 0 },
            }}
          >
            <FacebookIcon fontSize="small" aria-hidden="true" />
            עקבו אחרינו בפייסבוק
          </Link>
        ) : (
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.55)",
              mb: 2,
              textAlign: { xs: "center", md: "start" },
            }}
          >
            עמוד פייסבוק — יעודכן בקרוב
          </Typography>
        )}

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)", mb: 2 }} />

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 0.5, sm: 2 },
            textAlign: "center",
          }}
        >
          <span>{footer.copyright}</span>
          <Link
            href="https://goldring-tech.dev"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "inherit", fontWeight: 500 }}
          >
            {footer.siteBuilder}
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
