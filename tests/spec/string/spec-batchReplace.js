define(['src/string/batchReplace'], function (batchReplace) {

    describe('string/batchReplace()', function () {

        it('should do multiple replacements', function () {

            expect( batchReplace('abc 123', [
                    [/[a-z]/g, '$&$&'],
                    [/ /, '-'],
                    [/\d/g, '5']
                ]) ).toEqual( 'aabbcc-555' );

        });

    });

});
