const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Lucas", nota: 9 },
  ];

  const filtraNotas = alunos.filter((item) =>{
    return item.nota >= 6
  })

  console.log(filtraNotas)