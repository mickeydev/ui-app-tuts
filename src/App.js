import React from "react";
import {
   Typography,
   AppBar,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   CssBaseline,
   Grid,
   Toolbar,
   Container,
   Button,
   ButtonGroup,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App = (props) => {
   return (
      <>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar>
               <PhotoCamera />
               <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
         </AppBar>
         <main>
            <div>
               <Container maxWidth="sm">
                  <Typography
                     variant="h2"
                     align="center"
                     color="textPrimary"
                     gutterBottom
                  >
                     Photo Album
                  </Typography>
                  <Typography variant="h5" align="center" paragraph>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
               </Container>
            </div>
            <ButtonGroup
               variant="contained"
               aria-label="outlined primary button group"
               color="primary"
            >
               <Button>One</Button>
               <Button>Two</Button>
               <Button>Three</Button>
            </ButtonGroup>
         </main>
      </>
   );
};

export default App;
