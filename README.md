# Logo Manipulation for the Indoor Navigation Prototype

This repository containes the logos for the image recognition API for the indoor navigation prototype. It is developed in line with the requirements of the course Technical Concepts of Media for the MMT masters program at LMU.
Frontend can be found [here](https://github.com/r-wittmann/indoor-frontend)
Backend can be found [here](https://github.com/r-wittmann/indoor-backend)

# Getting Starded

Just clone the repository.  
At of yet it only contains the logos needed for the training of our image recognition api, the original logos and the test images. At some point this repository will also contain a nodeJS server for automated image manipulation.

## Folder Structure
```original_logos``` contains all the logos we want to use for our prototype. Have a look at [Jira Task IND-76](https://dev.nmm.de/ji/browse/IND-76) for more information about what area of the floor plan we use for our training data.

```manipulated_logos``` contains a folder for each company in the area of interest. These folders contain the manipulated logos for training the image recognition API

```test_logos``` contains test images to varify the image recognition APIs model
