enum BPI {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
}
export type Time = {
    updated: string;
    updatedISO: string;
    updateduk: string;
}

export type Currency = {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export type BitcoinPriceResponse = {
    time: Time;
    disclaimer: string;
    chartName: string;
    bpi: {
        [currency in BPI]: Currency;
    };
}
// export type BitcoinPriceResponse = {
//     // ... структура ответа от API Coindesk
// }
