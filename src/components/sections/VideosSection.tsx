import { useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { videos, type VideoItem } from '../../data/landingPageData.ts';
import { sectionHeadingSx, whiteSectionSx } from '../../theme/surfaces.ts';
import { trackVideoPlay } from '../../utils/tracking.ts';

const SECTION_HEADING = 'סרטונים מהשטח';
const TRACKING_LOCATION = 'videos_section';
const VIDEO_FALLBACK_TEXT = 'לא ניתן להציג את הסרטון. ודאו שהקובץ קיים ב־public/videos/.';

interface LocalVideoPlayerProps {
  video: VideoItem;
}

function LocalVideoPlayer({ video }: LocalVideoPlayerProps) {
  const hasTrackedPlay = useRef(false);

  const handlePlay = () => {
    if (hasTrackedPlay.current) {
      return;
    }

    hasTrackedPlay.current = true;
    trackVideoPlay(video.id, TRACKING_LOCATION);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '16 / 9',
        bgcolor: 'grey.900',
        lineHeight: 0,
      }}
    >
      <Box
        component="video"
        controls
        playsInline
        preload="metadata"
        title={video.title}
        aria-label={video.title}
        onPlay={handlePlay}
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          bgcolor: 'grey.900',
        }}
      >
        <source src={video.src} type={video.type} />
        {VIDEO_FALLBACK_TEXT}
      </Box>
    </Box>
  );
}

export function VideosSection() {
  return (
    <Box
      component="section"
      id="videos"
      aria-labelledby="videos-heading"
      sx={whiteSectionSx}
    >
      <Container maxWidth="lg">
        <Typography
          id="videos-heading"
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {SECTION_HEADING}
        </Typography>

        <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ justifyContent: 'center' }}>
          {videos.map((video) => (
            <Grid key={video.id} size={{ xs: 12, md: videos.length > 1 ? 6 : 8 }}>
              <Card sx={{ overflow: 'hidden' }}>
                <LocalVideoPlayer video={video} />
                <CardContent sx={{ py: 1.75, px: { xs: 2, md: 2.5 } }}>
                  <Typography
                    variant="body2"
                    component="h3"
                    color="text.secondary"
                    sx={{ fontWeight: 500, fontSize: '0.9375rem' }}
                  >
                    {video.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
