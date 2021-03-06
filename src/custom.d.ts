type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag,
  createRecordError:Error | null,
  createTagError:Error | null,
}

type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number 
    createdAt?: string //除了写数据类型之外还可以写一个类（构造函数），类是对 object 的分类
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {
}