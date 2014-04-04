// create variable outside of beforeEach closure
// so that module can be assigned to a variable that
// will be accessible by the tests
var Sneetch;

// execute before each test runs
// executes async so pass done to wait
beforeEach(function (done) {
    // require castle library
    requirejs(['castle'], function (castle) {
        // call test method which mocks specified dependencies
        castle.test({
            // module to be tested
            module: 'sneetch',
            // mock dependency
            mocks: ['fixitup'],
            // mock global dependency
            globals: [{ module: 'money', exports: 'MONEY' }],
            // after castle.test has loaded all mocks and the module
            // then execute callback passing it a reference to the module
            // to be tested
            callback: function (module) {
                Sneetch = module;
                // let test runner know that all async code is complete
                done();
            }
        });
    });
});

// run tests
describe('Sneetch', function () {

    it('should construct an instance', function () {
        // test contruction of a star bellied sneetch
        var sneetch1 = new Sneetch(true);
        expect(sneetch1).to.be.an.instanceof(Sneetch);
        expect(sneetch1.star).to.be.true;

        // test contruction of a plain bellied sneetch
        var sneetch2 = new Sneetch(false);
        expect(sneetch2).to.be.an.instanceof(Sneetch);
        expect(sneetch2.star).to.be.false;
    });

    it('should put a star on thars', function () {
        var sneetch = new Sneetch(false);
        sneetch.starOn();

        expect(sneetch.star).to.be.true;
        expect(sneetch.money).to.be.equal(97);
    });

    it('should take a star off thars', function () {
        var sneetch = new Sneetch(true);
        sneetch.starOff();

        expect(sneetch.star).to.be.false;
        expect(sneetch.money).to.be.equal(90);
    });

});