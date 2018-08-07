if (process.env.npm_package_config_disabled) {
  console.log(`
    You have disabled Vaadin development time usage statistics collection. To re-enable, run:
    npx -p @vaadin/vaadin-usage-statistics enable
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
    npx -p @vaadin/vaadin-usage-statistics disable
    For more details, see https://github.com/vaadin/vaadin-usage-statistics
  `);
}

