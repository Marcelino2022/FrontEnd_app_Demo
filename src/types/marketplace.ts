export interface IItemOverview{
    data: { title: string, icon: string, description: string }[]
}

export interface ISideItems{
    items: {id: number, designation: string }[]
}


export interface ICategory{
    class?: string,
    data: { designation: string, image: string}[]
}

export interface IProduct{
    id?: number
    designation?: string
    amount?: number,
    coin?: string,
    supplier?: string
    deliveryCost?: number
    review?: number
    image?: string
}


export interface IProductList {
    background?: String
    data: { category: String, products: Array<IProduct> }[]
}