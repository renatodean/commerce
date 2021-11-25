import { OperationContext } from '@commerce/api/operations'
import { Category } from '@commerce/types/site'
import { LocalConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'new-arrivals',
          name: 'Pachita\'s site',
          slug: 'new-arrivals',
          path: '/new-arrivals',
        },
        {
          id: 'featured',
          name: 'Compra todo',
          slug: 'featured',
          path: '/featured',
        },
      ],
      brands: [],
    })
  }

  return getSiteInfo
}
