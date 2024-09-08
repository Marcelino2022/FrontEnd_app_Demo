
export interface ICardsGridType{
    class: String
    titleColor: string
    textColor: string
    btncontent?:string
    icon: string
    contents:  Array<{title: string, content: string, image: string }>
}

export interface IClientData{
    class: String
    titleColor?: string
    textColor?: string
    icon?: string
    clients:  Array<{title: string, content: string, image: string, review: Number }>
}