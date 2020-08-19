const enhancer = require('./enhancer.js');
const item1 = {
    name: "Sword",
    durability: 50,
    enhancement: 7,
  };
  const item2 = {
    name: "Axe",
    durability: 50,
    enhancement: 13,
  };
  const item3 = {
    name: "Machete",
    durability: 70,
    enhancement: 20,
  };
  const item4 = {
    name: "Throwing stars",
    durability: 70,
    enhancement: 10,
  };
  const item5 = {
    name: "Mace",
    durability: 70,
    enhancement: 16 ,
  }
  const item6 = {
    name: "Lazers",
    durability: 80,
    enhancement: 17 ,
  }
// test away!

describe('enhancer', ()=>{
    describe('repair()', ()=> {
        it('Should return new item wth durability restored too 100', ()=>{
          const expectedOutput = 100
          const actualOutput = enhancer.repair(item1)
          expect(actualOutput.durability).toBe(expectedOutput)
        })
    })
    describe('success()', () => {
        it('Should return item with enhancement increased by 1 if less than 20. Otherwise unchanged ', () =>{

            expect(enhancer.success(item2).enhancement).toBe(14)
            expect(enhancer.success(item3).enhancement).toBe(20)
        })
    })
    describe('fail()', ()=>{
        it("should return new item if enhancement < 15 = durability - 5 , enhancement > 15 = durabilty - 10, if enhancement < 16 = enhancement -1", ()=>{
        
            expect(enhancer.fail(item4).durability).toBe(65)
            expect(enhancer.fail(item5).durability).toBe(60)
            expect(enhancer.fail(item5).enhancement).toBe(16)
            expect(enhancer.fail(item6).durability).toBe(70)
            expect(enhancer.fail(item6).enhancement).toBe(16)
        })
    })


})