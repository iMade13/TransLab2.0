describe('Validar contraseña', () => {
    it('Debería tener máximo 8 caracteres', () => {
        assert.equal(validatePass('01234567'), true)
    })
    it('Debería ser solo números', () => {
        assert.equal(validatePass('12345'), true);
    })
})

describe('Calcular tarifa', () => {
    it('Debería devolver una resta de dos números', () => {
        assert.equal(calculateRate(1200, 760), 440);
    })
})