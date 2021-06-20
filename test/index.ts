import KML from '../src';

KML(process.argv.reverse()[0])
  .then(console.log)
  .catch(console.error)

