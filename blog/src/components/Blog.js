import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'LeaderShip', url: '#' },
  { title: 'Communication', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Responsibility', url: '#' },
  { title: 'Sports', url: '#' },
];

const mainFeaturedPost = {
  title: 'BOYS & GIRLS CLUB OF DELAWARE',
  description:
    "A Boys & Girls Club gives parents peace of mind after school and during the summer. Kids know the Club is a safe place where they can be themselves, learn something new and have fun.",
  image: 'https://th.bing.com/th/id/R.3a65196dd3006006e4d8702e18e73d2a?rik=opmf%2f%2fL0bGSx8g&riu=http%3a%2f%2fwww.abcworldwidestone.com%2fwp-content%2fuploads%2f2018%2f03%2fBlack-Absolute-Honed-3cm-ot-I299-Close-up.jpg&ehk=OGbY%2fhh%2fTF1hCBHtOkWbWFxK8TGzI%2fRlGNwKNyZTqfQ%3d&risl=&pid=ImgRaw&r=0',
  imageText: 'main image description',

};

const featuredPosts = [
  {
    title: 'Sports',
    date: 'The Boys & Girls club has many differnt sports to offer for example Basketball, Swimming etc.',
    
    image: 'https://th.bing.com/th/id/OIP.A8kMmKETm3wYSoF5WRvJ1AHaLx?pid=ImgDet&rs=1',
    imageLabel: 'Image Text',
  },
  {
    title: 'Main Focus',
    date: 'The boys and girls club has very important goals that they want to acheieve which is teaching the kids Leadership and responsiblity while also having fun. ',
    description:
      '',
    image: 'https://th.bing.com/th/id/R.90679da435e556e8b8bb362012787239?rik=xuHJLdYKVxR5rQ&pid=ImgRaw&r=0',
    imageLabel: '',
  },
  {
    date: 'Click Here to read more about the boys and girls club.',
    image: 'https://th.bing.com/th/id/OIP.cHAiMFxpj1mWdjFZ-K7-XgHaD4?pid=ImgDet&rs=1',

  }
];
 


const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>

            
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}