import { ref } from 'vue'
import { powerBiConfig } from './config'
import * as pbi from 'powerbi-client'
import type { Report, Page } from './types'

export const selectedReport = ref<Report | null>(null)
export const reportPages = ref<Page[]>([])
export const commentX = ref('')

export let pbiEmbed: pbi.Embed | undefined

export function setPowerBiEmbed(embedContainer: HTMLElement, url: string) {
  const powerbi = new pbi.service.Service(
    pbi.factories.hpmFactory,
    pbi.factories.wpmpFactory,
    pbi.factories.routerFactory,
  )
  embedContainer && powerbi.reset(embedContainer)
  pbiEmbed = powerbi.embed(embedContainer, powerBiConfig(url))

  //   Turn off Listeners
  {
    pbiEmbed.off('buttonClicked')
    pbiEmbed.off('dataSelected')
    pbiEmbed.off('visualClicked')
    pbiEmbed.off('commandTriggered')
    pbiEmbed.off('loaded')
    pbiEmbed.off('rendered')
    pbiEmbed.off('error')
  }

  //   Set Report Listeners
  {
    pbiEmbed.on('loaded', () => {
      //  @ts-ignore
      pbiEmbed?.getPages().then((pages) => (reportPages.value = pages))
    })
    pbiEmbed.on('error', () => {
      console.warn('error')

      //   pbiEmbed?.off('error')
    })
    //   pbiEmbed.reload().catch((e) => console.error(e))
    pbiEmbed.on('buttonClicked', () => {
      // refreshReport() //currently only relevant for Report 3
      // pbiEmbed.refresh();
      pbiEmbed?.reload()
    })
    pbiEmbed.on('dataSelected', (event: any) => {
      try {
        const data = event.detail
        const x = data.dataPoints[0].identity[0].equals
        const y = data.dataPoints[0].values[0].formattedValue
        const filter = data.filters[0].values[0]
        console.warn('dataSelected', filter, x, y)
      } catch (err) {
        console.error(err)
      }
    })
    // listen for a command trigger
    pbiEmbed.on('commandTriggered', (event: any) => {
      //currently only relevant for Report 3
      //   console.warn('commandTriggered', event)
      if (event.detail.command === 'Add Commentary') {
        const data = event.detail as any
        const x = data.dataPoints[0].identity[0].equals
        const y = data.dataPoints[0].values[0].formattedValue
        console.log('Add Commentary', x, y)

        commentX.value = x
      }
    })
  }
}
