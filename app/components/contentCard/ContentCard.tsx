import React, { FC } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { ContentCardProps } from './PropTypes';

const ContentCard: FC<ContentCardProps> = ({ item, onClick }) => {
  const { fullname, imageurl, summarytext } = item;

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        borderRadius: 2,
        ':hover': { boxShadow: 6 },
      }}
      role="article"
      aria-label={`Content card for ${fullname}`}
    >
      {imageurl ? (
        <CardMedia
          component="img"
          height="180"
          image={imageurl}
          loading="lazy"
          alt={`Thumbnail image for ${fullname}`}
          sx={{ objectFit: 'cover' }}
        />
      ) : (
        <Box
          sx={{
            height: 180,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontStyle: 'italic',
            px: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontStyle: 'inherit' }}>
            No image available
          </Typography>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{ fontWeight: '600' }}
          title={fullname} // Tooltip on hover
          noWrap
        >
          {fullname}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '3.6em',
          }}
          title={summarytext} // Tooltip on hover for full text
        >
          {' '}
          {summarytext || 'No summary available.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          type="button"
          onClick={() => onClick(item)}
          aria-label={`View details about ${fullname}`}
          sx={{ cursor: 'pointer' }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
