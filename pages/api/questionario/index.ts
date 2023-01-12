import { embaralhar } from '../../../functions/arrays'
import questoes from '../bancoDeQuestoes'

export default (req: any, res: any) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}