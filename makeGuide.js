/*
I convert guide.md to html, read in guide_wrapper.html, and
replace <!-- content --> with the converted markdown. I then
output the crap to screen. Normally I just pipe it to guide.html
for updating.
*/
const fs = require('fs');
const md = require('markdown-it')();

let guide = fs.readFileSync('./guide.md', 'utf8');
let result = md.render(guide);

let guide_template = fs.readFileSync('./guide_wrapper.html','utf8');


let final_result = guide_template.replace('<!-- content -->', result);
console.log(final_result);

