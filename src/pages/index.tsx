import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {

  const clientes = [
    new Cliente('Maria', 23,'1'),
    new Cliente('Joao', 44,'2'),
    new Cliente('Pedro', 55,'3'),
    new Cliente('Marta', 66,'4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluindo ${cliente.nome}`)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
        <>
          <div className="flex justify-end">
            <Botao cor='green' className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
          </div>
          <Tabela 
            clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}/>
        </>
        ) : (
          <Formulario 
            cliente={clientes[2]}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}