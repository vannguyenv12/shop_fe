import CategoryIcon from '@mui/icons-material/Category';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ComputerIcon from '@mui/icons-material/Computer';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React from 'react';

interface ICategoryIcon {
  [key: string]: React.ReactElement;
}

const categoryIcons: ICategoryIcon = {
  CategoryIcon: <CategoryIcon />,
  HomeRepairServiceIcon: <HomeRepairServiceIcon />,
  RestaurantIcon: <RestaurantIcon />,
  FitnessCenterIcon: <FitnessCenterIcon />,
  LocalFloristIcon: <LocalFloristIcon />,
  ComputerIcon: <ComputerIcon />,
  BrushIcon: <BrushIcon />,
  BuildIcon: <BuildIcon />,
  LocalGroceryStoreIcon: <LocalGroceryStoreIcon />,
  FlightIcon: <FlightIcon />,
  DirectionsCarIcon: <DirectionsCarIcon />,
  SportsEsportsIcon: <SportsEsportsIcon />,
  MusicNoteIcon: <MusicNoteIcon />,
  HealthAndSafetyIcon: <HealthAndSafetyIcon />,
  PetsIcon: <PetsIcon />,
  ShoppingBagIcon: <ShoppingBagIcon />,
};

export default categoryIcons;
