# Logo Manipulation for the Indoor Navigation Prototype

This repository containes the logos for the image recognition API for the indoor navigation prototype. It is developed in line with the requirements of the course Technical Concepts of Media for the MMT masters program at LMU.
Frontend can be found [here](https://github.com/r-wittmann/indoor-frontend)
Backend can be found [here](https://github.com/r-wittmann/indoor-backend)

# Getting Starded

This is a nodeJS backend server. To run the image manipulation run:

    $> git clone https://github.com/r-wittmann/logo-manipulation.git
    $> cd logo-manipulation
    $> npm install
    $> node logo-manipulation.js

## Folder Structure
```original_logos``` contains all the logos we want to use for our prototype. Have a look at [Jira Task IND-76](https://dev.nmm.de/ji/browse/IND-76) for more information about what area of the floor plan we use for our training data. Logo names should correspond to the company names in the coordinates file and be in png file format.

```manipulated_logos``` contains a folder for each company in the area of interest. These folders contain the manipulated logos for training the image recognition API

&copy; 2017 by [dianadybok](https://github.com/dianadybok), [lottemacchiato](https://github.com/lottemacchiato), [r-wittmann](https://github.com/r-wittmann) and [yusef7](https://github.com/yusef7). All rights reserved.
