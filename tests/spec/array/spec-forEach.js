define(['src/array/forEach'], function (forEach) {

    describe('array/forEach()', function(){

        it('should loop and pass params to callback', function(){
            var result = 0;
            var items = [1,2,3,4,5];

            forEach(items, function(val, i, arr){
                expect( arr ).toBe( items );
                expect( val ).toBe( items[i] );
                result += val;
            });

            expect( result ).toBe( 15 );
        });

        it('should support sparse arrays', function () {
            var items = new Array(6);
            items[2] = 3;
            items[5] = 8;
            items[10] = undefined; // it's a trap!

            var result = [];

            forEach(items, function(val, i, arr){
                expect( arr ).toBe( items );
                expect( val ).toBe( items[i] );
                expect( i ).not.toBe( 4 ); // make sure it skips sparse items
                result.push(val);
            });

            expect( result ).toEqual( [3, 8, undefined] );
        });

    });

});

