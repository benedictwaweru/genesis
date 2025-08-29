/** Define types here */

export type PropertyType =
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Vacational'
  | 'Land';

  export type ResidentialPropertyType =
  | 'Apartment'
  | 'Condominium'
  | 'Co-op'
  | 'Duplex'
  | 'Triplex'
  | 'Townhouse'
  | 'Bungalow'
  | 'Maisonette'
  | 'Villa'
  | 'Mansion'
  | 'Cottage'
  | 'Farmhouse'
  | 'Cabin'
  | 'Studio'
  | 'Penthouse'
  | 'Loft'
  | 'Tiny House';

export type CommercialPropertyType =
  | 'Office Building'
  | 'Retail Store'
  | 'Shopping Mall'
  | 'Hotel'
  | 'Restaurant/Bar'
  | 'Mixed-Use Building'
  | 'Warehouse (Commercial use)';

export type IndustrialPropertyType =
  | 'Factory'
  | 'Warehouse'
  | 'Manufacturing Plant'
  | 'Distribution Center'
  | 'Research Facility'
  | 'Data Center';

export type VacationalPropertyType =
  | 'Resort'
  | 'Holiday Home'
  | 'Timeshare'
  | 'Vacation Cabin'
  | 'Beach House'
  | 'Safari Lodge';

export type LandPropertyType =
  | 'Residential Land'
  | 'Commercial Land'
  | 'Agricultural Land'
  | 'Industrial Land'
  | 'Recreational Land'
  | 'Undeveloped Land';

export type AllPropertySubTypes =
  | ResidentialPropertyType
  | CommercialPropertyType
  | IndustrialPropertyType
  | VacationalPropertyType
  | LandPropertyType;

export type PropertyStatus = 'recommended' | 'trending' | 'recentlyViewed';

export interface PropertyCategories {
  Residential: ResidentialPropertyType;
  Commercial: CommercialPropertyType;
  Industrial: IndustrialPropertyType;
  Vacational: VacationalPropertyType;
  Land: LandPropertyType;
}

export type PropertyCategory<K extends PropertyType = PropertyType> = {
  category: K;
  subType: PropertyCategories[K];
};

export type PropertyLocation = {
  townName: string;
  countyName: string;
};
