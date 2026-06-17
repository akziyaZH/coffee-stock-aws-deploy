import type { SearchTypeCard} from "../types/inventory";
import { DrinkCategory } from "../types/inventory";

export const CATEGORY_FILTER: SearchTypeCard[] = [
    {
        name: "Coffee Beans",
        category: DrinkCategory.COFFEE_BEANS,
        image:'/icons/coffee-bag.png',
    },
    {
        name: "Dairy",
        category: DrinkCategory.DAIRY,
        image: '/icons/dairy.png',
    },
    {
        name: "Alternative Milk",
        category: DrinkCategory.ALTERNATIVE_MILK,
        image: '/icons/dairy.png',
    },
    {
        name: "Syrups",
        category: DrinkCategory.SYRUP,
        image: '/icons/syrup.png',
    },
    {
        name: "Tea and Matcha",
        category: DrinkCategory.TEA_MATCHA,
        image: '/icons/tea-matcha.png',
    }
]