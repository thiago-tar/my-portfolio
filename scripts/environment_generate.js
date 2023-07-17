function generateEnvironmentContent() {
  return `export const environment = {
  production: ${process.env.production || false},
  emailAPI_AUTH_TOKEN: "${process.env.emailAPI_AUTH_TOKEN || ""}",
  emailAPI_URL: "${process.env.emailAPI_URL || ""}"
  };`
  }
  (function generateEnvironment() {
  const fs = require('fs');
  const fileName = 'environment.ts'; // you can this as hard coded name, or you can use your own unique name
  const content = generateEnvironmentContent();
  console.log(content)
  process.chdir(`src/environments`); // This is the directory where you created the environment file. you can use your own path, but for this I used the Angular default environment directory
  fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
  })();
