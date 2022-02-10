export const getCartTotal = cartItems => {
    var total = 0;
    var items = 0;
    for(var i=0; i<cartItems.length; i++){
        items = cartItems[i].qty * cartItems[i].price 
        total = total + items;
    }
    return total;
}

export const getBrands = (products) => {
    
    var uniqueBrands = [];
    products.forEach((product, index) => {
        if (product.tags) {
            product.tags.forEach((tag) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    return uniqueBrands;
}


export const getColors = (products) => {
    var uniqueColors = [];
    products.forEach((product, index) => {
        if(product.colors) {
            product.colors.forEach((color) => {
                if (uniqueColors.indexOf(color) === -1) {
                    uniqueColors.push(color);
                }
            })
        }
    })
    return uniqueColors;
}

export const getMinMaxPrice = (products) => {
    
    let min = 100, max = 1000;

    products.forEach((product, index) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return {'min':min, 'max':max};
}

export const getVisibleproducts = (data, {brand,color, value,sortBy,searchBy}) => {
    return data.filter(product => {
        
        let brandMatch;
        if(product.tags)
            brandMatch = product.tags.some(tag => brand.includes(tag))
        else
            brandMatch = true;


        let colorMatch;
        if(color && product.colors) {
            colorMatch = product.colors.includes(color)
        }else{
            colorMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        const searchByName = (product.name.toLowerCase().indexOf(searchBy) > -1)

        return brandMatch  && colorMatch  && startPriceMatch && endPriceMatch && searchByName;
    }).sort((product1, product2) => {
        
        if (sortBy === 'HighestPrices') {
            return product2.price < product1.price ? -1 : 1;
        }
        else if (sortBy === 'LowestPrices'){
            return product2.price > product1.price ? -1 : 1;
        } 
        else{
            return product2.price !== product1.price ? 1 : 1;
        }
    });
    
}