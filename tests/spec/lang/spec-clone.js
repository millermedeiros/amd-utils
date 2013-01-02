define(['amd-utils/lang/clone'], function (clone) {

    describe('lang/clone()', function () {

        it('should create a new object and copy properties', function () {
            var a = {a:1, b:2, c:'foo'};
            var b = clone(a);
            expect( b ).toEqual( a );
            expect( b ).not.toBe( a );
        });

        it('should deep clone objects', function () {
            var a = {
                a : 1,
                b : {
                    c : 'lorem',
                    d : {
                        e : 'ipsum',
                        f : 2
                    }
                }
            };
            var b = clone(a);

            expect( b ).toEqual( a );
            expect( b ).not.toBe( a );
            expect( b.b ).toEqual( a.b );
            expect( b.b ).not.toBe( a.b );
            expect( b.b.d ).toEqual( a.b.d );
            expect( b.b.d ).not.toBe( a.b.d );
        });

        it('should deep clone arrays', function () {

            var a = {
                a : 1,
                b : [1, 2, ['lorem', {c : 'ipsum', d: ['dolor', 'amet']}]]
            };

            var b = clone(a);

            expect( b ).toEqual( a );
            expect( b ).not.toBe( a );
            expect( b.b ).toEqual( a.b );
            expect( b.b ).not.toBe( a.b );
            expect( b.b[2] ).toEqual( a.b[2] );
            expect( b.b[2] ).not.toBe( a.b[2] );
            expect( b.b[2][1] ).toEqual( a.b[2][1] );
            expect( b.b[2][1] ).not.toBe( a.b[2][1] );

        });

        it('should handle RegExp', function () {
            var a = {
                a : 1,
                b : /foo\/bar\/(.+)/
            };
            var b = clone(a);

            expect( b ).toEqual( a );
            expect( b ).not.toBe( a );
            expect( b.b.test('foo/bar/ipsum-123') ).toBe( true );
            expect( b.b ).not.toBe( a.b );
        });

        it('should handle Date', function () {
            var a = {
                a : 1,
                b : new Date()
            };
            var b = clone(a);

            expect( b ).toEqual( a );
            expect( b ).not.toBe( a );
            expect( b.b ).toEqual( a.b );
            expect( b.b ).not.toBe( a.b );
        });

        it('should copy functions by reference', function () {
            var fn = function(){
                return 'bar';
            };
            var a = {
                a : 1,
                b : fn
            };
            var b = clone(a);
            expect( b ).toEqual( a );
            expect( b.b ).toBe( fn );
        });

        it('should copy properties from prototype', function () {
            function Foo(n){
                this.n = n;
            }
            Foo.prototype.bar = 'bar';
            Foo.prototype.a = {b : 123};
            var a = new Foo(123);
            var b = clone(a);
            expect( b ).toEqual( a );
            expect( b.bar ).toEqual( 'bar' );
            expect( b.constructor ).not.toBe( a.constructor );
            expect( b.a ).not.toBe( Foo.prototype.a );
        });

        it('should use createObject to clone instances if flag is true', function () {
            function Foo(n){
                this.n = n;
            }
            Foo.prototype.bar = 'bar';
            Foo.prototype.a = {b : 123};
            var a = new Foo(123);
            var b = clone(a, true);
            expect( b ).toEqual( a );
            expect( b.bar ).toEqual( 'bar' );
            expect( b.constructor ).toBe( a.constructor );
            expect( b.a ).toBe( Foo.prototype.a );
        });

    });

});
