export type OrderOption = {
    label: string;
    key: string;
}

export const priceAscending: OrderOption = {
    label: 'Najtańsze',
    key: 'price-asc'
};

export const priceDescending: OrderOption = {
    label: 'Najdroższe',
    key: 'price-desc'
}