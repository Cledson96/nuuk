const { exec } = require('child_process');

const { createServer } = require('http');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = false;

// Executar 'npm install' e 'npm run build' antes de iniciar o servidor
exec('npm i', installErr => {
  if (installErr) {
    console.error('Falha ao executar npm install', installErr);
    return;
  }
  const next = require('next');
  const app = next({ dev });
  const handle = app.getRequestHandler();
  console.log('Dependências instaladas.');

  exec('npm run build', buildErr => {
    if (buildErr) {
      console.error('Falha ao construir o projeto', buildErr);
      return;
    }

    console.log('Projeto construído.');

    app.prepare().then(() => {
      createServer((req, res) => {
        handle(req, res);
      }).listen(port, err => {
        if (err) throw err;
        console.log(`> Pronto em http://localhost:${port}`);
      });
    });
  });
});
