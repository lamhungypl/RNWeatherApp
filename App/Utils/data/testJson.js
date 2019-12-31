//run on Nodejs
const fs = require('fs');

fs.readFile('./dataCity.json', (err, data) => {
  if (err) throw err;
  let listCity = JSON.parse(data);
  const cityNames = listCity.map(city => {
    const name = `${city.name}, ${city.country}`;
    return {name};
  });
  fs.writeFile(
    './dataCityNamesNewLength.json',
    JSON.stringify(cityNames.length),
    function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    },
  );
});
