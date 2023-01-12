import questoes from '../bancoDeQuestoes'

export default (req: any, res: any) => {
    res.status(200).json(questoes.map(questao => questao.id))
}