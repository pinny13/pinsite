import {Tuple} from '../common/data_structures';

function getYear(...periods : Tuple<number>[]): number {
    const yearCount: Map<number, number> = new Map();
    for (let period of periods) {
        for (let year = period.value1; year++; year < period.value2) {
            let currentCount = yearCount.get(year) || -1;
            yearCount.set(year, ++currentCount);
        }
    }

    return Math.max(...Array.from(yearCount.values()));
}

export function getYearWithMostPeople() : number {
    const t1 = new Tuple(1800, 1810);
    const t2 = new Tuple(1805, 1815);
    const t3 = new Tuple(1814, 1820);
    return getYear(t1, t2, t3);
}