import React, { Component } from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((elem) => (
          <div key={elem.conteudo} className='card'>
            <h2> O conteúdo é: {elem.conteudo} </h2>
            <p> Status: {elem.status}</p>
            <p> Bloco: {elem.bloco}</p>
          </div>
        ))}
      </div>
    );
  }
}
