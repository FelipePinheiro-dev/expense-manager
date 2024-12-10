export enum TypeCategories {
    STUDIES = 'Studies', 
    LEISURE = 'Leisure', 
    BUSINESS = 'Business', 
    CLOTHINGS = 'Clothings', 
    FOOD = 'Food', 
    SPORTS = 'Sports', 
    UTILITIES = 'Utilities'
} 

export type TypeCategory = 'Studies' | 'Leisure' | 'Business' | 'Clothings' | 'Food' | 'Sports' | 'Utilities'

export interface PropsCategories {
    value: TypeCategory,
    name: TypeCategory
}

export const CATEGORIES: PropsCategories[] = [
    {value: 'Studies', name: 'Studies'},
    {value: 'Leisure', name: 'Leisure'},
    {value: 'Business', name: 'Business'},
    {value: 'Clothings', name: 'Clothings'},
    {value: 'Food', name: 'Food'},
    {value: 'Sports', name: 'Sports'},
    {value: 'Utilities', name: 'Utilities'}
]