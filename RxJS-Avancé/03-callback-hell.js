const fs = require('fs');

// Sync
try {
  const content = fs.readFileSync('.prettierrc', { encoding: 'utf-8' });
  fs.writeFileSync('.prettierrc.copy', content);
  console.log('Copy sync done');
} catch (err) {
  console.log(err);
}

// Async
// Callback Hell / Pyramid of doom
// callbackhell.com
fs.readFile('.prettierrc', { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc.copy', content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy async done');
      }
    });
  }
});

// Async
// API Promise
// Histoire : dans jQuery (2005) defer -> similaire aux promesses
// Jusqu'à 2015 apparaissent des bibliothèques de Promise comme Bluebird ou q
// A partir de 2015 natif en JS
// Dans Node on peut manipuler des fichiers avec Promise depuis Node 12
fs.promises
  .readFile('.prettierrc', { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile('.prettierrc.copy', content))
  .then(() => console.log('Copy async promise done'))
  .catch((err) => console.log(err));

// En ES2017
// fonction asynchrone : async / await

async function copy() {
  try {
    const content = await fs.promises.readFile('.prettierrc', { encoding: 'utf-8' });
    await fs.promises.writeFile('.prettierrc.copy', content);
    console.log('Copy sync done');
  } catch (err) {
    console.log(err);
  }
}

copy();

// En ESNext (processus de norme JS, mais pas encore fini)
// Top level await - TypeScript 3.9
// try {
//   const content = await fs.promises.readFile('.prettierrc', { encoding: 'utf-8' });
//   await fs.promises.writeFile('.prettierrc.copy', content);
//   console.log('Copy sync done');
// } catch (err) {
//   console.log(err);
// }

// async iterator ES2018
// for await (const line of readFileByLine('.prettierrc')) {
//
// }
// for await (const params of this.activatedRoute.params) {
//    await this.contactService.getById(params.id);
// }
