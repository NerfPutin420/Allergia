import { Category } from "../models/category.model";

export const CATEGORIES: Category[] = [
    {
        title: 'Allergiák',
        icon: 'healing',
        value: 'allergy',
        color: 'purple',
        url: 'allergies'
    },
    {
        title: 'Veszélyes',
        icon: 'warning',
        value: 'dangerous',
        color: 'red',
        url : 'dangerous'
    },
];