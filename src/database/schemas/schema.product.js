module.exports = {
  type: "object",
  properties: {
    id: { type: "integer" },
    codigo: { type: "string" },
    nome: { type: "string" },
    preco: { type: "number" }
  },
  required: ["codigo", "nome", "preco"],
  additionalProperties: false,
}