export const getTotal = ({prices}) => {
    const onlyPrices = prices.map(value => value.price);
    return onlyPrices.reduce((acumulador, valorActual) => acumulador + valorActual, 0 );
    // onlyPrices.reduce((acumulador, valorActual) => acumulador + valorActual, 0 )
}