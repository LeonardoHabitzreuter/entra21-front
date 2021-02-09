const KEY = 'Entra21'

type Store = {
  token?: string
}

export const getData = () => {
  const data = localStorage.getItem(KEY)

  return JSON.parse(data || '{}') as Store
}

export const store = (store: Store) => {
  localStorage.setItem(KEY, JSON.stringify({ ...getData(), ...store }))
}
