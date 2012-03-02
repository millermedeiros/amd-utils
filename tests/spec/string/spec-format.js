define(['src/string/format'], function (format) {

    describe('string/format()', function(){

        it('should substitute all index with strings', function(){
            var str = '{0}-{1}-{2}';
            expect( format(str, 'lorem', 'ipsum', 'dolor') ).toEqual('lorem-ipsum-dolor');
        });

        it('should not substitute if no replacement found', function(){
        	var str = '{1}-{2}-{3}';
            expect( format(str, 'lorem', 'ipsum', 'dolor') ).toEqual('ipsum-dolor-{3}');
        });

    });
});
