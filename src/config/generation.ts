export const MIN_LAND_HEIGHT = 20;

export const MAX_HEIGHT = 100;

export enum DISTANCE_FIELD {
  UNMARKED = 0,
  WATER_COAST = -1,
  LAND_COAST = 1,
  DEEPER_WATER = -2,
  LANDLOCKED = 2
}

export enum ELEVATION {
  MOUNTAINS = 70,
  FOOTHILLS = 60,
  HILLS = 50,
  LOWLANDS = 30
}

enum BIOME {
  MARINE = 0,
  HOT_DESERT = 1,
  COLD_DESERT = 2,
  SAVANNA = 3,
  GRASSLAND = 4,
  TROPICAL_SEASONAL_FOREST = 5,
  TEMPERATE_DECIDUOUS_FOREST = 6,
  TROPICAL_RAINFOREST = 7,
  TEMPERATE_RAINFOREST = 8,
  TAIGA = 9,
  TUNDRA = 10,
  GLACIER = 11,
  WETLAND = 12
}

const {
  HOT_DESERT,
  COLD_DESERT,
  SAVANNA,
  GRASSLAND,
  TROPICAL_SEASONAL_FOREST,
  TEMPERATE_DECIDUOUS_FOREST,
  TROPICAL_RAINFOREST,
  TEMPERATE_RAINFOREST,
  TAIGA,
  TUNDRA,
  WETLAND
} = BIOME;

export const NOMADIC_BIOMES = [HOT_DESERT, COLD_DESERT, SAVANNA, GRASSLAND];

export const HUNTING_BIOMES = [SAVANNA, TROPICAL_RAINFOREST, TEMPERATE_RAINFOREST, TAIGA, TUNDRA, WETLAND];

export const FOREST_BIOMES = [
  TROPICAL_SEASONAL_FOREST,
  TEMPERATE_DECIDUOUS_FOREST,
  TROPICAL_RAINFOREST,
  TEMPERATE_RAINFOREST,
  TAIGA
];

export const ROUTES = {
  MAIN_ROAD: 1,
  SMALL_ROAD: 2,
  SEA_ROUTE: 3
};
