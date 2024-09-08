export interface ITableRowLink{
    classTable?:string,
    title?: string,
    titleColor?: string,
    table?: string,
    icon?: string,
    rows: { description: String, link: string }[]
}