import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Maria',23,'1'),
    new Cliente('Joao',44,'2'),
    new Cliente('Pedro',55,'3'),
    new Cliente('Marta',66,'4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes}
        clienteSelecionado= {clienteSelecionado} ></Tabela>
      </Layout>
    </div>
  )
}