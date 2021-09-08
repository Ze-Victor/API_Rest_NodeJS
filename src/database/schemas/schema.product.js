module.exports = {
  type: "object",
  properties: {
    id: { type: "integer" },
    nome: { type: "string" },
    preco: { type: "number" }
  },
  required: ["id", "nome", "preco"],
  additionalProperties: false,
}