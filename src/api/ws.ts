import { getHttpUrl } from '@/utils/common'
import ReconnectingEventSource from 'reconnecting-eventsource'
import type { StockAmountParams, StockSseParams } from './types'

/**
 * 获取行情推送
 * @param param
 * @returns
 */
export const WSqtStockSse = (params: StockSseParams) => {
  const data = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
  const es = new ReconnectingEventSource(
    getHttpUrl() + '/api/qt/stock/sse' + '?' + data
  )
  const time = new Date().getTime()
  es.onopen = () => {
    console.log(
      '接口请求耗时（/api/qt/stock/sse）：',
      (new Date().getTime() - time) / 1000,
      '秒'
    )
  }
  return es
}
/**
 * 定制队列获取
 * @param param
 * @returns
 */
export const WSqtStockQueue = (param: {
  [key: string]: any
  symbol_id: string
}) => {
  const params = Object.keys(param)
    .map(key => `${key}=${param[key]}`)
    .join('&')
  const es = new ReconnectingEventSource(
    getHttpUrl() + '/api/qt/stock/queue' + '?' + params
  )
  const time = new Date().getTime()
  es.onopen = () => {
    console.log(
      '接口请求耗时（/api/qt/stock/queue）：',
      (new Date().getTime() - time) / 1000,
      '秒'
    )
  }
  return es
}
/**
 * 逐笔数据推送
 * @param param
 * @returns
 */
export const WSqtStockTick = (param: any) => {
  const params = Object.keys(param)
    .map(key => `${key}=${param[key]}`)
    .join('&')
  const es = new ReconnectingEventSource(
    getHttpUrl() + '/api/qt/stock/tick' + '?' + params
  )
  const time = new Date().getTime()
  es.onopen = () => {
    console.log(
      '接口请求耗时（/api/qt/stock/tick）：',
      (new Date().getTime() - time) / 1000,
      '秒'
    )
  }
  return es
}
/**
 * 推送前排总金额
 * @param param
 * @returns
 */
export const WSqtStockAmount = (param: StockAmountParams) => {
  const params = Object.keys(param)
    .map(key => `${key}=${param[key]}`)
    .join('&')
  const es = new ReconnectingEventSource(
    getHttpUrl() + '/api/qt/stock/amount' + '?' + params
  )
  const time = new Date().getTime()
  es.onopen = () => {
    console.log(
      '接口请求耗时（/api/qt/stock/amount）：',
      (new Date().getTime() - time) / 1000,
      '秒'
    )
  }
  return es
}
