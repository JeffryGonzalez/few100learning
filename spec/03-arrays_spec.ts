import { roundToTwoPlaces } from "./utils";

describe('destructuring', () => {
    it('destructuring arrays', () => {
        const friends = ['sean', 'billy', 'david', 'sarah', 'mo'];

        const f1 = friends[0];
        const f2 = friends[1];
        expect(f1).toBe('sean');
        expect(f2).toBe('billy');

        const [d1, d2] = friends;
        expect(d1).toBe('sean');
        expect(d2).toBe('billy');

        const [e1, , e2, ...rest] = friends;
        expect(e1).toBe('sean');
        expect(e2).toBe('david');
        expect(rest).toEqual(['sarah', 'mo'])
    });

    it('destructuring objects', () => {
        const friends = {
            number1: 'sean',
            number4: 'sarah',
            number2: 'billy',
            number3: 'david',
            number5: 'mo'
        };

        const { number1, number2 } = friends;
        expect(number1).toBe('sean');
        expect(number2).toBe('billy');

        const { number4: f1, number5: f2 } = friends;
        expect(f1).toBe('sarah');
        expect(f2).toBe('mo');

        const { number1: n1, ...other } = friends;

        expect(n1).toBe('sean');
        expect(other).toEqual({
            number4: 'sarah',
            number2: 'billy',
            number3: 'david',
            number5: 'mo'
        });


    });
});
describe('array methods', () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('forEach allows you to look at each member (this doesn\'t produce anything!)', () => {
        numbers.forEach((n) => console.log(n));
    });

    describe('methods that produce a new array', () => {
        it('selecting just specific stuff from an array', () => {

            function isEven(n: number) {
                return n % 2 === 0;
            }
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);// just showing you this so you see it doesn't change the array.
            expect("").toBeFalsy();
            expect(" ").toBeTruthy();

        });
        it('map lets you transform each element of the source array', () => {
            // if there's a place you want to go, it'll get you there you know. it's the map. it's the map. it's the map.

            const doubled = numbers.map(n => n * 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
        it('a quick practice', () => {
            interface Vehicle {
                vin: string;
                makeAndModel: string;
                mileage: number;
            }
            const vehicles: Vehicle[] = [
                { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
            ];




            // find all the vehicles with < 100_000, but just give me the make and model.

            const result = vehicles // all of the Vehicle
                .filter(v => v.mileage < 100_000) // just the Vehicle objects with < 100_000
                .map(v => v.makeAndModel); // An array of strings that are just the make and model of those.

            expect(result).toEqual(['Toyota Prius', 'Ford Explorer']);
        });
        it('another example', () => {
            interface Product {
                id: number;
                description: string;
                cost: number;
            }

            const products: Product[] = [
                { id: 1, description: 'Eggs', cost: 1.99 },
                { id: 2, description: 'Beer', cost: 7.99 },
                { id: 3, description: 'Chips', cost: 2.99 },
            ];

            // our price markup is 30%.
            // for each product create an array of objects that look like this:
            interface SaleItem {
                id: number;
                description: string;
                price: number;
            }

            // but only if the price is > $5.00
            function makeSaleItemFromProduct(product: Product): SaleItem {
                const result: SaleItem = {
                    id: product.id,
                    description: product.description,
                    price: roundToTwoPlaces(product.cost)
                };
                return result;
            }

            function highPricedItems(item: SaleItem) {
                return item.price > 5.00;
            }
            const answer: SaleItem[] = products
                .map(makeSaleItemFromProduct).filter(highPricedItems);

            expect(answer).toEqual([{
                id: 2, description: 'Beer', price: 10.39
            }]);
        });
    });
});