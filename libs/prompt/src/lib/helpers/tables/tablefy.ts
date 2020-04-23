import { first, isArray, isEmpty, isNil } from 'lodash'
import Table from 'tty-table'

type TableOptions<T> = {
  values: Array<T>
  footer?: Array<string>
}

export const tablefy = <T>({ values, footer }: TableOptions<T>) => {
  if (isNil(values) || isEmpty(values)) {
    console.log('No results..', '\n')
  }

  if (!isArray(values)) {
    values = [values]
  }

  const item = first(values)
  const headers = Object.keys(item).map((key) => ({
    value: key,
    color: 'white',
    align: 'left'
  }))

  const options = {
    borderStyle: 'solid',
    borderColor: 'green',
    paddingBottom: 0,
    headerAlign: 'center',
    align: 'center',
    color: 'white',
    truncate: '...'
  }

  return Table(headers, values, footer, options).render()
}
