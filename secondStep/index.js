const slugify = require("slugify");
console.log(slugify("Fresh Meat", { replacements: "%", lower: false }));
