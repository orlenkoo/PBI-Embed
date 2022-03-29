import { models } from 'powerbi-client'
import type { Report } from './types'
import type { IEmbedConfigurationBase } from 'embed'
import type { IComponentEmbedConfiguration } from 'service'

export function defaultReports(): Report[] {
  const base_url = 'https://app.powerbi.com/reportEmbed?reportId='

  return [
    {
      id: '58abaef7-77f4-46ae-913c-e8d7d7f996bb',
      name: 'Report 1',
    },
    {
      id: '958a733b-fa91-40e1-8906-905f930ca26a',
      name: 'Report 2',
    },
    {
      id: 'cddda597-993d-4b36-8aab-aa883a2c59fe',
      name: 'Report 3',
    },
  ].map((v) => ({ name: v.name, url: base_url + v.id }))
}

export function powerBiConfig(
  embedUrl: string,
): IComponentEmbedConfiguration | IEmbedConfigurationBase {
  console.log('powerBiConfig', embedUrl)

  return {
    type: 'report', //visual
    tokenType: models.TokenType.Embed,
    accessToken: import.meta.env.VITE_POWERBI_EMBED_TOKEN,
    embedUrl,
    permissions: models.Permissions.Create,
    viewMode: models.ViewMode.View,
    settings: {
      extensions: [
        {
          command: {
            name: 'Add Commentary',
            title: 'Extend command',
            //  icon: "", //only used for visualOptionsMenu not visualContextMenu
            selector: {
              $schema: 'http://powerbi.com/product/schema#visualSelector',
              visualName: '39143bc962603d6519d6',
            },
            extend: {
              // Define visualContextMenu to extend context menu.
              visualContextMenu: {
                // Define title to override default title.
                title: 'Add Commentary',
              },
            },
          },
        },
      ],
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
        pageNavigation: {
          visible: false,
        },
      },
    },
  }
}
