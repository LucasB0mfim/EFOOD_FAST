declare type Food = {
  id: number
  tipo: string
  capa: string
  titulo: string
  avaliacao: string
  descricao: string
  cardapio: {
    id: number
    foto: string
    nome: string
    preco: number
    descricao: string
    porcao: string
  }
}
