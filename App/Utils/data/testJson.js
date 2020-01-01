//run on Nodejs
const fs = require('fs');

fs.readFile('./dataCity.json', (err, data) => {
  if (err) throw err;
  let listCity = JSON.parse(data);
  const listCityVN = listCity.reduce((acc, item) => {
    if (item.country === 'VN') {
      acc.push(item);
    }
    return acc;
  }, []);
  fs.writeFile('./dataCityVN.json', JSON.stringify(listCityVN), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
});
