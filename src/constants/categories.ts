export type TypeCategory = 'Studies' | 'Leisure' | 'Work' | 'Clothings' | 'Food' | 'Sports' | 'Utilities'

export interface PropsCategories {
    value: TypeCategory,
    name: TypeCategory
}

export const CATEGORIES: PropsCategories[] = [
    {value: 'Studies', name: 'Studies'},
    {value: 'Leisure', name: 'Leisure'},
    {value: 'Work', name: 'Work'},
    {value: 'Clothings', name: 'Clothings'},
    {value: 'Food', name: 'Food'},
    {value: 'Sports', name: 'Sports'},
    {value: 'Utilities', name: 'Utilities'}
]