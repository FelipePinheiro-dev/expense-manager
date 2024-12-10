/**
 * @return number converter for Brazilian currency
 */

export const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})