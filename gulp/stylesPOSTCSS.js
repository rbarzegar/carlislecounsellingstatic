var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    rucksack = require('rucksack-css'),
    pxtorem = require('postcss-pxtorem'),
    easyimport = require('postcss-easy-import'),
    mixins = require('postcss-sassy-mixins'),
    nested = require('postcss-nested'),
    vars = require('postcss-simple-vars');



//Gulp SASS compiler task - don't use globs for sass compilation, focus on importing one file only

gulp.task('css', function() {
    var processors = [
        easyimport({
            prefix: '_',
            extensions: '.css'
        }),
        mixins,
        nested,
        vars,
        cssnext,
        rucksack({
            responsiveType: true,
            shorthandPosition: false,
            quantityQueries: false,
            alias: false,
            inputPseudo: false,
            clearFix: true,
            fontPath: true,
            hexRGBA: true,
            easings: true
        }),
        pxtorem({
            rootValue: 16,
            unitPrecision: 3,
            propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'padding', 'margin'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })
    ];
    return gulp.src('app/postcss/styles.css')
        .pipe(postcss(processors))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('app/css'));
});