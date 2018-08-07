if (process.env.npm_package_config_disabled) {
  console.log(`
    You have disabled Vaadin development time usage statistics collection. To re-enable, run:
    "npm config set @vaadin/vaadin-usage-statistics:disabled false && rm -rf node_modules && rm -rf package-lock.json && npm install"
    For more details, see https://github.com/vaadin/vaadin-usage-statistics
  `);

  var fs = require('fs');

  try {
    fs.renameSync('vaadin-usage-statistics.js', 'vaadin-usage-statistics.js.bak');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found!');
    } else {
      throw err;
    }
  }

  try {
    fs.renameSync('vaadin-usage-statistics-optout.js', 'vaadin-usage-statistics.js');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found!');
    } else {
      throw err;
    }
  }
} else {
  console.log(`
    Vaadin collects development time usage statistics to improve this product. To opt-out, run:
    "npm config set @vaadin/vaadin-usage-statistics:disabled true && rm -rf node_modules && rm -rf package-lock.json && npm install"
    For more details, see https://github.com/vaadin/vaadin-usage-statistics
  `);
}

