export enum LIBRARY_VIEW {
  COMPACT = 'compact',
  LIST = 'list',
  GRID = 'grid',
}

export type LibraryViewOption = {
  label: string
  value: LIBRARY_VIEW
  icon: JSX.Element
}
