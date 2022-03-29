import { commentX, pbiEmbed } from '.'

export function submitComment(WalletName: string, comments: any) {
  console.log('comments', WalletName, comments)
  commentX.value = ''

  fetch(
    'https://html-azuresql.azurewebsites.net/api/azure-function-sql-poc?code=qcQNEKTTehEp857KRaruWzwsAr4M6wRO5entAPL1XB6D4TbHPXaVHg==',
    {
      method: 'POST',
      body: JSON.stringify({
        WalletAddress: comments,
        WalletName,
      }),
    },
  )
    .then(() => {
      //   console.log(data)
      // @ts-ignore
      pbiEmbed?.refresh()
    })
    .catch((e) => {
      console.log('rr', e)
    })
}
