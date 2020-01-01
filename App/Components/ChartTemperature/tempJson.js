//run on Nodejs
const fs = require('fs');

const backupData = {
  labels: [
    '12:00',
    '15:00',
    '18:00',
    '21:00',
    '00:00',
    '03:00',
    '06:00',
    '09:00',
  ],
  datasets: [
    {
      data: [20.88, 19.33, 19.12, 19.61, 19.85, 21.64, 24.36, 25.66],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    },
  ],
};

fs.writeFile('./backupDataChartTemp.json', JSON.stringify(backupData), function(
  err,
) {
  if (err) {
    return console.log(err);
  }
  console.log('The file was saved!');
});
