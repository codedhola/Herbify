import { sequelize } from './db/index'
import { app } from './app'


async function serverInit(){
    try {
        await sequelize.sync(
          { force: false } //Reset db every time
        );
        const PORT: number = Number(process.env.PORT) || 4001
        
        app.listen(PORT, () => {
            console.log(`App running... App instance on port ${PORT}`)
        })
      } catch (error) {
        console.log(error);
      }

}

serverInit()

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
