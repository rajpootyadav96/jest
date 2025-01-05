const multiply =require('./index');

test('2 and 5 multiply 10',async()=>{
    expect(multiply(2,5)).toBe(10) // for the exact value
})


test('2 and 5 multiply 10',async()=>{
    expect(multiply(2,5)).not.toBe(4) // for not exact value
})

describe('Multiply test',()=>{
    it('2 and 5 multiply equal 10',()=>{
        expect(multiply(2,5)).toBe(10)
    });
    it('2 and 5 multiply not to be 10',()=>{
        expect(multiply(2,5)).not.toBe(5)
    })
});

test("object equality",()=>{
    const data={alpha:'A'};
    data['beta']='B';
    expect(data).toEqual({alpha:"A",beta:'B'}) // to check deep equality
})

// Testcase for to test null values

test("Null values",()=>{
    const value=null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
})

test("Zero values",()=>{
    const value=0;
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
})

//Number comparison

test('Number comparison',()=>{
    const value=3+3;
    expect(value).toBeGreaterThan(5);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(6);
    expect(value).toBe(6);
    expect(value).toEqual(6);
// For decimal comparison
    const floatValue=0.2+0.1;
    expect(floatValue).toBeCloseTo(0.3,5)
// For string comparison for regular expression
    expect('developer').not.toMatch(/I/)
    expect('developer').toMatch(/dev/);


})
// test array values

test.only('Array Matchers',()=>{
    const todoList=[
        "Buy Groceries",
        "Clean Room",
        "Subscribe",
        "Like",
        "Comment"
    ];
    expect(todoList).toContain('Subscribe')
})

//Exception matchers

function openInvalidFile(){
    throw new Error('File not found')
}

expect(()=>openInvalidFile()).toThrow();
expect(()=>openInvalidFile()).toThrow(Error);
expect(()=>openInvalidFile()).toThrow('File not found');
expect(()=>openInvalidFile()).toThrow(/not found/);


// Function mocking

test.only('drinks returns',()=>{
    const drink= jest.fn(()=>true);
    drink();
    expect(drink).toHaveReturnedWith(true)
})