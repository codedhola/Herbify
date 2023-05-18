import { sequelizeConnection } from './db/index'
import { app } from './app'

// import express, {Request, Response, NextFunction, Application} from 'express'
// import userRoute from './api/v1/routes/users.routes'

// console.log("still working as usual")

const PORT = process.env.PORT

sequelizeConnection.sync({ alter: true}).then(() => {
  app.listen(PORT, () => {
      console.log(`App has started on port ${PORT}`)
  })  
})









// async function serverInit(){

//     let tries = 5
//     while(tries){
//           sequelize.authenticate()
//           .then(() => {
//             console.log('Connection has been established successfully.');
//             const PORT: number = Number(process.env.PORT) || 4001
            
//             app.listen(PORT, () => {
//                 console.log(`App running... App instance on port ${PORT}`)
//             })
//           })
//            .catch(err => {
//              console.error('Unable to connect to the database:', err);
//              // console.log(error);
//              tries -= 1
//              console.log(`${tries} left to exit`)
//              new Promise((res) => setTimeout(res, 2000))
//           });
//           // await sequelize.sync(
//           //   { force: false } //Reset db every time
//           // );
//   }
// }
// serverInit()

// (async () => {
//     try {
//       await sequelize.sync(
//         { force: false } //Reset db every time
//       );
//       const PORT: number = Number(process.env.PORT) || 4001
      
//       app.listen(PORT, () => {
//           console.log(`App running... App instance on port ${PORT}`)
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   })()
