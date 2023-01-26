import Cliente from "@/core/Cliente"

interface TabelaProps{
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function renderCabecalho() {
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderDados() {
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return(
        <table>
            <thead>
                {renderCabecalho()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}