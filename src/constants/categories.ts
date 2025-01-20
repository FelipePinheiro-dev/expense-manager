export enum TypeCategoriesENUM {
    STUDIES = 'Studies', 
    LEISURE = 'Leisure', 
    BUSINESS = 'Business', 
    CLOTHINGS = 'Clothings', 
    FOOD = 'Food', 
    SPORTS = 'Sports', 
    UTILITIES = 'Utilities'
} 

export type TypeCategoriesTYPE = 'Studies' | 'Leisure' | 'Business' | 'Clothings' | 'Food' | 'Sports' | 'Utilities'

export interface PropsCategories {
    value: TypeCategoriesTYPE,
    name: TypeCategoriesTYPE
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