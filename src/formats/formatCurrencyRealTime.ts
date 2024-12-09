/**
 * you must pass the input value in real time, it will be formatted to the Brazilian currency format
 * @param {string} input - the value must be a string
 * @return {string} return - returns a string on format currency
*/

export function formatCurrencyRealTime(input: string) {
    // Remove caracteres não numéricos, exceto vírgula
    const cleanedValue = input.replace(/[^\d,]/g, '')

    // Substitui vírgula por ponto temporariamente para manipular como decimal
    const [integer, decimal] = cleanedValue.replace(',', '.').split('.')

    // Formata os milhares usando regex
    const formattedInteger = integer
    ? integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    : ''

    // Junta parte inteira e decimal (com vírgula)
    return decimal !== undefined
    ? `${formattedInteger},${decimal}`
    : formattedInteger
}