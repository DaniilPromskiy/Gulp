import gulp from "gulp";

import { path } from "./gulp/config/path.js";



global.app = {
    path: path,
    gulp: gulp
}


import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";

// наблюдатель изм в файлах
function watcher()  {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(copy, html, scss);


const dev = gulp.series(reset, mainTasks, watcher);


//сценарий по умолчанию
gulp.task('default', dev);
 