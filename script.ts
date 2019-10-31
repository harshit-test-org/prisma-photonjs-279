import { Photon } from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const result = await photon.posts.create({
    data: {
      content: 'test',
      realPart: {
        set: [23.0, 12.0, 3.1],
      },
    },
  })
  console.log(result)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
