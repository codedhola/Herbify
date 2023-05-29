import { promisify } from 'util'
const randomBytesAsync = promisify(require('crypto').randomBytes)

function getKey (size: number) { 
  return randomBytesAsync(size)
}

// This will print the Buffer returned from crypto.randomBytes()
getKey(16)
  .then((key: any) => key.toString('hex'))

export async function generateKey (num: number) {   
    const key = await getKey(num)
     return key.toString("hex")
  }
