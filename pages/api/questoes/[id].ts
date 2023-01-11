import questoes from "../bancoDeQuestoes"

export default (req: any, res: any) => {
    res.status(200).json(questoes[0].paraObjeto())
}