const { emailExist,
     emailAt, 
     emailPeriod, 
     emailSpace, 
     loginPassword,
    userFirstNameValidator,
    userLastNameValidator,
    userEmailValidator,
    userEmailAtValidator,
    userEmailDotValidator,
    userEmailSpaceValidator  } = require('../Logic/logic')


describe('email validator functions', () => {
    test('test if email exists', () => {
        expect(emailExist('tim@gmail.com')).toBe(true);
    })
    test('if email has an @ symbol', () => {
        expect(emailAt('time@gmail.com')).toBe(true);
        expect(emailAt('timegmail.com')).toBe(false);
      
    })
    test('if email has an . ', () => {
        expect(emailPeriod('time@gmail.com')).toBe(true);
        expect(emailPeriod('tim@egmailcom')).toBe(false);
    })

    test('if email has a space ', () => {
        expect(emailSpace('time@gmail.com')).toBe(true);
        expect(emailSpace('tim@egma il.com')).toBe(false);
    })
})

describe('password function', () => {
    test('test if password exists', () => {
        expect(loginPassword('dkdjfjj2234')).toBe(true);
    })
   
    })

    describe('first name validator function', () => {
        test('test if first name exists', () => {
            expect(adminFirstNameValidator('Test')).toBe(true);
        })
    })
    
    describe('last name validator function', () => {
        test('test if last name exists', () => {
            expect(adminLastNameValidator('Test')).toBe(true);
        })
    })
    
    describe('email validator function', () => {
        test('test if email exists', () => {
            expect(userEmailValidator('test@test.com')).toBe(true);
        })
        test('test if email has an @ symbol', () => {
            expect(userEmailAtValidator('test@test.com')).toBe(true);
            expect(userEmailAtValidator('testtest.com')).toBe(false);
        })
        test('test if email has a .', () => {
            expect(userEmailDotValidator('test@test.com')).toBe(true);
            expect(userEmailDotValidator('test@testcom')).toBe(false);
        })
        test('test if email has a space', () => {
            expect(userEmailSpaceValidator('test@test.com')).toBe(true);
            expect(userEmailSpaceValidator('test@te st.com')).toBe(false);
        })
    })
    