import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material';

const ContentCard = ({ item, onClick }) => {
  const { fullname, imageurl, summarytext } = item;

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {imageurl ? (
        <CardMedia
          component="img"
          height="180"
          image={imageurl}
          alt={`Thumbnail image for ${fullname}`}
        />
      ) : (
        <Box
          sx={{
            height: 180,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontStyle: 'italic',
          }}
        >
          <Typography variant="body2" sx={{ fontStyle: 'inherit' }}>
            No image available
          </Typography>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {fullname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summarytext.slice(0, 150)}
          {summarytext.length > 150 && '...'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick(item)}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
