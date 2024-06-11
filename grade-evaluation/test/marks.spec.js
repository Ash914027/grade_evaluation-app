// Import the Chai assertion library and the 'marks' module
const chai = require("chai");
const expect = chai.expect
const marks = require('../src/marks')

// Describe a test suite for 'calculate grade'
describe('calculate grade',()=>{
    // Test case: Calculate grade with a total score of 'A+'
    it('calculate grade success A+',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect the grade to be 'A+'
        return marks.calculateTotalMarks(99,90,90,99,99)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>expect(result).to.be.equal('A+'))
    })

    // Test case: Calculate grade with a total score of 'A'
    it('calculate grade success A',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect the grade to be 'A'
        return marks.calculateTotalMarks(88,90,90,80,78)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>expect(result).to.be.equal('A'))
    })

    // Test case: Calculate grade with a total score of 'B'
    it('calculate grade success B',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect the grade to be 'B'
        return marks.calculateTotalMarks(70,77,72,78,73)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>expect(result).to.be.equal('B'))
    })

    // Test case: Calculate grade with a total score of 'C'
    it('calculate grade success C',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect the grade to be 'C'
        return marks.calculateTotalMarks(67,60,67,65,63)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>expect(result).to.be.equal('C'))
    })

    // Test case: Calculate grade with a total score of 'E'
    it('calculate grade success E',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect the grade to be 'E'
        return marks.calculateTotalMarks(58,50,54,50,52)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>expect(result).to.be.equal('E'))
    })

    // Test case: Calculate grade with a total score of 'F'
    it('calculate grade success F',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect the grade to be 'F'
        return marks.calculateTotalMarks(33,23,34,35,23)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>expect(result).to.be.equal('F'))
    })

    // Test case: Calculate grade with null values for marks
    it('calculate grade failure',()=>{
        // Calculate the total marks, then the average marks, and finally the grade
        // Expect an error to be thrown due to null values for marks
        return marks.calculateTotalMarks(88,undefined,90,80,undefined)
        .then(totalMarks => marks.calculateAverageMarks(totalMarks))
        .then(grade=> marks.calculateGrade(grade))
        .then(result=>{throw new Error('NUll values for marks')})
        .catch((err)=>expect(err).to.equal('Null values for marks'))
    })
})
