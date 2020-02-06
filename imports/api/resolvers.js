import Cliente from './model/cliente'
import Projeto from './model/projeto'
import Meteor from 'meteor/meteor'

const resolvers = {
    Query: {
        clientesArquiteto(arquiteto) {
            return Cliente.find({ arquiteto }).fetch()
        },
        cliente(id) {
            return Cliente.findOne({ _id: id })
        },
        projeto(id) {
            return Projeto.findOne({ _id: id })
        },
        projetosArquiteto(arquiteto) {
            return Projeto.find({ arquiteto }).fetch()
        },
        user(id) {
            return Meteor.users.findOne({ _id: id })
        }
    },
    Mutation: {
        insertProjeto(obj, { nome, arquiteto }, context) {
            Projeto.insert({ nome, arquiteto, clientes: [] })
        },
        insertCliente(obj, { nome, email, arquiteto }, context) {
            Cliente.insert({nome,email,arquiteto})
        }
    }
}

export default resolvers