const saludar = require("./holaMundo");

test("la funcion saludar debe imprimir hola mundo", () => {
  expect(saludar()).toBe("Hola Mundo!");
});
