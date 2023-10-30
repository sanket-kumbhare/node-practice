const { parse } = require("csv-parse");
const fs = require("fs");

const result = [];

fs.createReadStream("./kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (chunk) => {
    result.push(chunk);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(result);
  });
