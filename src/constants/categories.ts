export enum TypeCategoriesENUM {
    STUDIES = 'studies', 
    LEISURE = 'leisure', 
    BUSINESS = 'business', 
    CLOTHINGS = 'clothings', 
    FOOD = 'food', 
    SPORTS = 'sports', 
    UTILITIES = 'utilities'
} 

export type TypeCategoriesValues = 'studies' | 'leisure' | 'business' | 'clothings' | 'food' | 'sports' | 'utilities'

export type TypeCategoriesNames = 'Studies' | 'Leisure' | 'Business' | 'Clothings' | 'Food' | 'Sports' | 'Utilities'
export interface PropsCategories {
    value: TypeCategoriesValues,
    name: TypeCategoriesNames
}

export const CATEGORIES: PropsCategories[] = [
    {value: 'studies', name: 'Studies'},
    {value: 'leisure', name: 'Leisure'},
    {value: 'business', name: 'Business'},
    {value: 'clothings', name: 'Clothings'},
    {value: 'food', name: 'Food'},
    {value: 'sports', name: 'Sports'},
    {value: 'utilities', name: 'Utilities'}
]