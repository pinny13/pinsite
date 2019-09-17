import {Tuple} from '../common/data_structures';

function getYear(...periods : Tuple<number>[]): number {
    /*
    const yearCount: Map<number, number> = new Map();
    for (let period of periods) {
        const start = period.value1;
        const end = period.value2;

        for (let i=start; i++; i <= end) {
            let currentCount = yearCount.get(i) || -1;
            yearCount.set(i, ++currentCount);
        }
    }

     return Math.max(...Array.from(yearCount.values()));
     */

    const yearCount: Map<number, number> = new Map();
    for (let period of periods) {
        const start = period.value1;
        const end = period.value2;

        for (let i=start; i++; i <= end) {
            // let currentCount = yearCount.get(i) || -1;
        }
    }

    return 13;
}

export function getYearWithMostPeople() : number {
    const t1 = new Tuple(1800, 1850);
    const t2 = new Tuple(1840, 1900);
    const t3 = new Tuple(1899, 1950);
    return getYear(t1, t2, t3);
}