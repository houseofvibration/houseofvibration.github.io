import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import './App.css';

// Import images
import image1 from './static/image1.jpeg';
import image2 from './static/image2.jpeg';
import image4 from './static/image4.jpeg';
import image5 from './static/image5.jpeg';
import image6 from './static/image6.jpeg';

// Import artists
import noe from './static/noe.png';
import vinny from './static/vinny.png';
import oli from './static/oli.png';

// Import background image
import background from './static/image.jpeg';

function App() {
  const images = [image1, image2, image4, image5, image6];
  const cardData = [
    { image: image1, description: "Sound Healing Events" },
    { image: image2, description: "Dance and Movement Events" },
    { image: image4, description: "Permaculture Events" },
  ];

  const artists = [
    { name: 'Noe Sita', image: noe, url: 'https://www.instagram.com/medicinaforthesoul/' },
    { name: 'Oli Stormz', image: oli, url: 'https://www.olistormz.com/' },
    { name: 'Vincent Damien', image: vinny, url: 'https://soundcloud.com/damianalove' },
    { name: 'Wassim Younes', image: image4, url: 'https://example.com/artist3' },
    { name: 'Nella', image: image4, url: 'https://example.com/artist3' },
  ];

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
    {/* Instagram Icon in Top-Left */}
      <Box className="instagram-icon-container">
        <IconButton
          href="https://www.instagram.com/houseofvibemallorca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ color: 'white', fontSize: 40 }} />
        </IconButton>
      </Box>
      {/* Centered Header */}
      <Box className="text-container">
        <p className="header-text">House of Vibration</p>
        <p className="subheading-text">A shared creative home in Mallorca</p>
      </Box>

      {/* First Row of Images */}
      <div className="image-cards">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image} alt={`Top Card ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Accordion Section */}
      <Box className="accordion-section">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography style={{ fontFamily: '"Lexend Zetta", sans-serif' }}>
              Who We Are
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We are a community dedicated to creating harmony and healing through
              the power of love, music, and vibration.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography style={{ fontFamily: '"Lexend Zetta", sans-serif' }}>
              Our Vision
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We strive to inspire others to live in alignment with their highest vibrational state.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography style={{ fontFamily: '"Lexend Zetta", sans-serif' }}>
              Our Journey
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our journey began with a shared passion for music and its ability to
              heal and connect.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Artists Section */}
      <Box className="artists-section art-background">
        <p className="header-text">Our Artists</p>
        <Box className="avatars-row">
          {artists.map((artist, index) => (
            <Box key={index} className="artist-container">
              <a
                href={artist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="avatar-link"
              >
                <Avatar
                  alt={artist.name}
                  src={artist.image}
                  sx={{ width: 150, height: 150 }}
                />
              </a>
              <p className="artist-name">{artist.name}</p> {/* Artist name below avatar */}
            </Box>
          ))}
        </Box>
      </Box>

      {/* events Row of Cards */}
      <Box className="artists-section">
        <p className="header-text">Our Events</p>
      </Box>
      <Box className="card-row">
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={`Card Image ${index + 1}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default App;
