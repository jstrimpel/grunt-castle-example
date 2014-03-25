// create variable outside of beforeEach closure
// so that module can be assigned to a variable that
// will be accessible by the tests
var Sneech;

// execute before each test runs
// executes async so pass done to wait
beforeEach(function (done) {
    // require castle library
    requirejs(['castle'], function (castle) {
        // call test method which mocks specified dependencies
        castle.test({
            // module to be tested
            module: 'sneech',
            // mock dependency
            mocks: ['fixitup'],
            // mock global dependency
            globals: [{ module: 'money', exports: 'MONEY' }],
            // after castle.test has loaded all mocks and the module
            // then execute callback passing it a reference to the module
            // to be tested
            callback: function (module) {
                Sneech = module;
                // let test runner know that all async code is complete
                done();
            }
        });
    });
});

// run tests
describe('Sneech', function () {

    it('should construct an instance', function () {
        // test contruction of a star bellied sneech
        var sneech1 = new Sneech(true);
        expect(sneech1).to.be.an.instanceof(Sneech);
        expect(sneech1.star).to.be.true;

        // test contruction of a plain bellied sneech
        var sneech2 = new Sneech(false);
        expect(sneech2).to.be.an.instanceof(Sneech);
        expect(sneech2.star).to.be.false;
    });

    it('should put a star on thars', function () {
        var sneech = new Sneech(false);
        sneech.starOn();

        expect(sneech.star).to.be.true;
        expect(sneech.money).to.be.equal(97);
    });

    it('should take a star off thars', function () {
        var sneech = new Sneech(true);
        sneech.starOff();

        expect(sneech.star).to.be.false;
        expect(sneech.money).to.be.equal(90);
    });

});