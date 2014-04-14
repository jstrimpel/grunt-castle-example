module.exports = function (grunt) {

    'use strict';

    // read in application paths
    var paths = grunt.file.readJSON('lib/paths.json');

    // configure grunt castle task
    grunt.initConfig({
        castle: {
            // default target
            application: {
                options: {
                    // define mocks directory and paths
                    mocks: {
                        server: {
                            baseUrl: 'test/mocks',
                            paths: paths
                        },
                        client: {
                            baseUrl: 'test/mocks',
                            paths: paths
                        }
                    },
                    // define specs and out dir for html specs
                    specs: {
                        baseUrl: 'test/specs',
                        client: 'client/**/*.js',
                        server: 'server/**/*.js',
                        common: 'shared/**/*.js',
                        'client-target': 'test/specs/html'
                    },
                    // configure requirejs for both environments
                    requirejs: {
                        server: {
                            baseUrl: './lib',
                            paths: paths
                        },
                        client: {
                            baseUrl: './lib',
                            paths: paths
                        }
                    },
                    // *** this will be deprecated soon ***
                    reporting: {
                        dest: 'reports',
                        src: 'lib',
                        options: {},
                        // configure plato
                        analysis: {
                            files: ['lib/**/*.js']
                        },
                        // configure code coverage
                        coverage: {
                            dest: 'lib-cov',
                            exclude: 'modules'
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-castle');
};