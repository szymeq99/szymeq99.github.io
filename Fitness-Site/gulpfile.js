const gulp = require('gulp'); //Do tej zmiennej przypisujemy galpa z node_modules(załaczamy biblioteke)
const sass = require('gulp-sass'); //Tutaj robimy to samo dla sassa

//Tworzymy taska

gulp.task('sass',() => {   //String to nazwa naszego taska jaka chcemy
    return gulp.src('app/scss/**/*.scss')   //z tej funkcji zwracamy funkcje i podajemy sciezke do plików .scss
    .pipe(sass())            //bierze pliki z (src) i uzywa na nich funkcji sass(funkcji kompilowania do css)
    .pipe(gulp.dest('app/css'))         //kompiluje nasze pliki przenosi do wybranego przez nas miejsca
})  

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));  //Task który "patrzy" na pliki i gdy zobaczy zmiany to wykonaj taska(czylil wykona taska 'sass' nie musimy po kazdej zmianie wpisywac 'gulp sass')
})