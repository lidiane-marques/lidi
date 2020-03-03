var conexao = require('./conexao')

var alunoSchema = new conexao.Schema({
    nome:{
        type: String
    },
    endereco:{
        type:String
    },
    telefone:{
        type:String
    }
})
// exportar para usar essa estrutura//
module.exports = conexao.model('aluno', alunoSchema)