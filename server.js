
// const success = require('./function')

// const routes = [
//     {
//         method: 'GET',
//         path: '/hello/{userName?}',
//         handler: (request,h) =>{
//             const {userName = "stranger"} = request.params;
//             const { lang } = request.query;

//             if(lang === 'id') {
//                 return `Hai, ${userName}!`;
//             }

//             return `hello ${userName}`
            
//         }
//     },
//     {
//         method: '*',
//         path: '/',
//         handler: (request,h) =>{
//             return 'halaman tidak dapat diakses dengan method tersebut'
//         }
//     },
//     {
//         method: 'GET',
//         path: '/about',
//         handler: (request,h) =>{
//             return 'About Page'
        
//     },
//     {
//         method: '*',
//         path: '/about',
//         handler: (request,h) =>{
//             return 'halaman tidak dapat diakses dengan method tersebut'
//         }
//     },
//     {
//         method: 'GET',
//         path: '/home',
//         handler: (request,h) =>{
//             return h.success();
//         }
//     },
//     {
//         method: '*',
//         path: '/{any*}',
//         handler: (request,h) =>{
//             return 'Halaman tidak ditemukan'
//         }
//     }
// ]

// module.exports = routes;


// console.log('ini menggunakan hapi');

const Hapi = require('@hapi/hapi');
const routes = require('./routes');




const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();