const assert = require('chai').assert;
global.window = global;
require('../src/js/login')

describe('Validar contraseña', () => {
    it('Debería tener máximo 8 caracteres', () => {
        //assert.equal(validatePass(0123456789), false);
        assert.equal(validatePass(01234567), true)
    })
    it('Debería ser solo números', () => {
        assert.equal(validatePass(12345), true);
        //assert.equal(validatePass('hola123'), false);
    })
})