const products = [
    {id: 1, name: 'xiomi phone', prices: 1900},
    {id: 2, name: 'iphone', prices: 1900},
    {id: 3, name: 'mac book air', prices: 1900},
    {id: 4, name: 'lenovo yoga Lapotp', prices: 1900},
    {id: 5, name: 'Dell inspire laptop', prices: 1900},
    {id: 6, name: 'Sumsung phone note 4', prices: 1900},
    {id: 7, name: 'nokia old phone ', prices: 1900},
    {id: 8, name: 'MI chip  not cheap laptop', prices: 1900},
];
 function matchedProducts (products,search ){
    const matched =[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);}
    }
    return matched;

 }
const result =matchedProducts(products, "Phone");
console.log(result);
