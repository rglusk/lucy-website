import React from 'react';
import { allCollections } from '../collection-data';
import Slideshow from './Slideshow';

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Overview = () => {
  const interval = randomIntInRange(600, 850);
  const randomIndex = randomIntInRange(0, allCollections.length - 1);
  return (
    <Slideshow collectionInformation={allCollections[randomIndex]} interval={interval} numberInRotation={4} />
  );
};

export default Overview;
