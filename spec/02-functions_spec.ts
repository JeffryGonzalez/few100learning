describe('functions', () => {
    describe('syntax for creating them', () => {

        it('declaring them', () => {
            // Named Function
            expect(add(3, 3)).toBe(6);
            function add(a: number, b: number) {
                return a + b;
            }

            // Anonymous Functions
            // -- an anymous function that I immediately invoke
            expect((function (a, b) { return a / b; })(10, 5)).toBe(2)

            const multiply = function (a: number, b: number) { return a * b; };
            const divide = (a: number, b: number) => a / b;
            expect(multiply(3, 3)).toBe(9);


            expect(divide(10, 2)).toBe(5);

            const logIt = (msg: string) => {
                msg = msg.toUpperCase();
                console.log(msg);
                return true;
            };
            logIt('Fun with Functions!');


        });
    });
    describe('higher order functions', () => {
        // A higher order function is a function that takes as an argument one or more functions and/or returns a function
        it('first example', () => {


        });
    });
});