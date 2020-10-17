import { Data } from '@types'

async function postData(url: string, data: unknown): Promise<Data> {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    referrerPolicy: 'origin',
    body: JSON.stringify(data),
  })
    .then((res) =>
      res.json().then((json) => {
        if (json.err > 0) {
          throw new Error(json.msg)
        } else return json
      })
    )
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err))
  return response
}

export { postData }
