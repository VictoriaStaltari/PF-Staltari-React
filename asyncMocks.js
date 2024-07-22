const products =[
    {id: 1,
    name: "producto1",
    category: "category1",
    img: "../public/Imagenes/bandejablancoporcelana.jpg",
    stock: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam minus praesentium impedit hic, quia dolores veniam, vero eius ducimus natus totam porro, iusto quaerat!",
    price: 600,
        },
    {id: 2,
        name: "producto2",
        category: "category2",
        img: "../public/Imagenes/jarroblancoporcelana.jpg",
        stock: 37,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam minus praesentium impedit hic, quia dolores veniam, vero eius ducimus natus totam porro, iusto quaerat!",
        price: 750,
        },
    {id: 3,
        name: "producto3",
        category: "category3",
        img: "../public/Imagenes/platoblancoporcelana.jpg",
        stock: 19,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam minus praesentium impedit hic, quia dolores veniam, vero eius ducimus natus totam porro, iusto quaerat!",
        price: 250,
        },
    {id: 4,
        name: "producto4",
        category: "category3",
        img: "../public/Imagenes/tazablancaporcelana.jpg",
        stock: 30,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam minus praesentium impedit hic, quia dolores veniam, vero eius ducimus natus totam porro, iusto quaerat!",
        price: 200,
        }
]
export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
export const getProductById = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === id))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=> prod.category === categoryId))
        })
    })
}