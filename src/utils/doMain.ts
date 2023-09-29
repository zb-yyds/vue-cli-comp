export class PaginationInfo {
  curPage: number = 1 // 当前页码
  size: number = 10 // 每页大小
  listCount: number = 0
  status: string = ''
  constructor(limit: number = 20) {
    this.size = limit
  }
}
