// const multiply =require('./index');

// test('2 and 5 multiply 10',async()=>{
//     expect(multiply(2,5)).toBe(10) // for the exact value
// })


// test('2 and 5 multiply 10',async()=>{
//     expect(multiply(2,5)).not.toBe(4) // for not exact value
// })

// describe('Multiply test',()=>{
//     it('2 and 5 multiply equal 10',()=>{
//         expect(multiply(2,5)).toBe(10)
//     });
//     it('2 and 5 multiply not to be 10',()=>{
//         expect(multiply(2,5)).not.toBe(5)
//     })
// });

// test("object equality",()=>{
//     const data={alpha:'A'};
//     data['beta']='B';
//     expect(data).toEqual({alpha:"A",beta:'B'}) // to check deep equality
// })

// Testcase for to test null values

// test("Null values",()=>{
//     const value=null;
//     expect(value).toBeNull();
//     expect(value).toBeDefined();
//     expect(value).not.toBeUndefined();
//     expect(value).not.toBeTruthy();
//     expect(value).toBeFalsy();
// })

// test("Zero values",()=>{
//     const value=0;
//     expect(value).not.toBeNull();
//     expect(value).toBeDefined();
//     expect(value).not.toBeUndefined();
//     expect(value).not.toBeTruthy();
//     expect(value).toBeFalsy();
// })

//Number comparison

// test('Number comparison',()=>{
//     const value=3+3;
//     expect(value).toBeGreaterThan(5);
//     expect(value).toBeGreaterThanOrEqual(5);
//     expect(value).toBeLessThan(7);
//     expect(value).toBeLessThanOrEqual(6);
//     expect(value).toBe(6);
//     expect(value).toEqual(6);
// // For decimal comparison
//     const floatValue=0.2+0.1;
//     expect(floatValue).toBeCloseTo(0.3,5)
// // For string comparison for regular expression
//     expect('developer').not.toMatch(/I/)
//     expect('developer').toMatch(/dev/);


// })
// test array values

// test.only('Array Matchers',()=>{
//     const todoList=[
//         "Buy Groceries",
//         "Clean Room",
//         "Subscribe",
//         "Like",
//         "Comment"
//     ];
//     expect(todoList).toContain('Subscribe')
// })

//Exception matchers

// function openInvalidFile(){
//     throw new Error('File not found')
// }

// expect(()=>openInvalidFile()).toThrow();
// expect(()=>openInvalidFile()).toThrow(Error);
// expect(()=>openInvalidFile()).toThrow('File not found');
// expect(()=>openInvalidFile()).toThrow(/not found/);


// Function mocking

// test.only('drinks returns',()=>{
//     const drink= jest.fn(()=>true);
//     drink();
//     expect(drink).toHaveReturnedWith(true)
// })


// ==================================mocking==================================
// jest.mock('./mathUtils')
// const {calculate} =require('./app');
// const { addToArray } = require('./arrayUtils');
// const {add} =require('./mathUtils');


// describe('calculate',()=>{
//     test('Calls add function with parameter',()=>{
//         calculate(1,2,'add');
//         expect(add).toHaveBeenCalled();
//         expect(add).toHaveBeenCalledWith(1,2)
//     })
// })

// // ==================================spy==================================

// const myModule=require('./spy');

// test('Should spy on function and check if it is called',()=>{
//     const spy=jest.spyOn(myModule,"myFunction");
//     myModule.myFunction();
//     expect(spy).toHaveBeenCalled()  //it checks whether it have been called or not

//     spy.mockRestore()// it is used to cleanup the spy 
// })

// ==================================setup and teardown ==================================


describe('SETUP AND TEARDOWN',()=>{
    const {addToArray} = require('./arrayUtils')
    let testArray;
    
    beforeAll(()=>{
        console.log('before all Test:initialize array');
        testArray=[]
    })
    
    afterAll(()=>{
        console.log('before all Test:clear array');
        testArray=null;
    })
    
    beforeEach(()=>{
        console.log('before each all Test:clear');
        testArray=[]
    
    })
    afterEach(()=>{
        console.log('after each all Test:clear');
        console.log(testArray)
    
    })
    
    test("Add an item to array",()=>{
        addToArray(testArray,'Rajpoot');
        expect(testArray).toContain('Rajpoot')
    })
})


// TDD
// TEST DRIVEN DEVELOPMENT
// MAINLY FOCUSING ON UNIT TESTING
// WRITE A TEST CASE THEN YOU CREATE OR IMPLEMENT

// BDD

// BEHAVIOR DRIVEN DEVELOPMENT
// AS A SCENARIO
// A USER, WANT TO LOGIN ACCESS A ACCOUNT
// SCENARIO : SUCCESSFUL LOGIN
// GIVEN THE USER IS ON LOGIN PAGE
// WHEN THE USER INTERS THE LOGIN CREDENTIALS
// THEN USER SHOULD BE REDIRECTED TO THE DASHBOARD