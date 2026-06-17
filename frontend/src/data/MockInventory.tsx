import { DrinkCategory, type DrinkProduct } from '../types/inventory'

export const MOCK_DRINKS: DrinkProduct[] = [
    {
        id: 'prod-1',
        name: 'House Espresso Blend',
        category: DrinkCategory.COFFEE_BEANS,
        currentStock: 12,
        minThreshold: 6,
        unitType: 'kg',
        costPerUnit: 18.50
    },
    {
        id: 'prod-2',
        name: 'Barista Oat Milk',
        category: DrinkCategory.ALTERNATIVE_MILK,
        currentStock: 4, // Trigger low stock!
        minThreshold: 10,
        unitType: 'L',
        costPerUnit: 2.10
    },
    {
        id: 'prod-3',
        name: 'Carian Blend',
        category: DrinkCategory.COFFEE_BEANS,
        currentStock: 10, // Trigger medium stock!
        minThreshold: 6,
        unitType: 'kg',
        costPerUnit: 21.34
    },
    {
        id: 'prod-4',
        name: 'Vanilla Blend',
        category: DrinkCategory.SYRUP,
        currentStock: 5,
        minThreshold: 2,
        unitType: 'bottles',
        costPerUnit: 12.14
    },
    {
        id: 'prod-5',
        name: 'Salt Caramel',
        category: DrinkCategory.SYRUP,
        currentStock: 2, // Trigger medium stock!
        minThreshold: 0,
        unitType: 'bottles',
        costPerUnit: 12.34
    }
]