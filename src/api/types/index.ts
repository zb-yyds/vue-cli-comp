export interface StockSseParams {
  [key: string]: any
  fltt: number
  fields: string
  symbol_id: string
}

export interface StockAmountParams {
  [key: string]: any
  symbol_id: string
  order_ids: string
  interval: number
}
