export enum DrinkCategory {
    COFFEE_BEANS = 'Beans',
    DAIRY = 'Dairy',
    ALTERNATIVE_MILK = 'Plant-Based',
    SYRUP = 'Syrups & Sauces',
    TEA_MATCHA = 'Tea/Alternative'
}

export interface DrinkProduct {
    id: string;
    name: string;
    category: DrinkCategory;
    currentStock: number;
    minThreshold: number;       // Alert when stock dips below this, e.g., 5
    unitType: 'kg' | 'L' | 'bottles' | 'grams'; // Standardized measurement units
    costPerUnit: number;
}

export interface SearchTypeCard {
    name: string;
    category: DrinkCategory;
    image: string;
}