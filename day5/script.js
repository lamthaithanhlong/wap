    const products = [
        { name: "Product 1", price: 20, category: "Electronics" },
        { name: "Product 2", price: 30, category: "Clothes" },
        { name: "Product 3", price: 40, category: "Electronics" },
        { name: "Product 4", price: 50, category: "Clothes" },
        { name: "Product 5", price: 60, category: "Clothes" },
        { name: "Product 6", price: 70, category: "Electronics" },
        { name: "Product 7", price: 80, category: "Clothes" },
        { name: "Product 8", price: 90, category: "Electronics" },
    ];
    
    /* Use map to create a dictionary with category as the key
    and an array of products as the value */
    const productsByCategory = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
        acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});
    
    // Use map to calculate the average price for each category
    const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
        const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
        return { category: category, average: sum / productsByCategory[category].length };
    });
    
    // Use filter to only select categories with an average above a certain threshold
    const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);


    function f1(x,y,z) {
        return x+y+z;
    }

    let f2 = (x,y,z) => {
        return x+y+z;
    }

    let f3 = (x,y,z)=>x+y+z;

    // Spread operator
    function f4(a,b){
        return {
            a,
            b
        }
    }


    // this will not work
    function f5(a,b){
        return 
        {
            a,
            b
        }
    }

    // spread operator demo
    // clone demo
    const arr = [1,2,3]
    const arr2 = [3,4]
    const obj = {
        name : 'thao',
        surname : 'vu'
    }
    // shadow clone
    const combined = arr
    // complex clone
    const combined1 = [...arr,...arr2]
    const combined2 = {...obj, name: 'machine'}

    console.log(highPricedCategories)
    console.log(f1(1,2,3))
    console.log(f2(1,2,3))
    console.log(f3(1,2,3))
    console.log(f4(1,2))
    console.log(f5(1,2))
    console.log(combined)
    console.log(combined1)
    console.log(combined2)