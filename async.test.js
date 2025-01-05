const fetchData= require('./async');

test('the data is chocolate using async',()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('chocolate')
    })
});

// test data using await

test('the data is chocolate using async await',async()=>{
    const data= await fetchData();
    expect(data).toBe('chocolate')
})

test('Async Test',async()=>{
    await expect(fetchData(true)).rejects.toMatch('error occured')
})