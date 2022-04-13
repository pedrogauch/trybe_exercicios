const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const letterA = names.reduce((acc, name) => name.includes('a') || name.includes('A') ? acc += 1 : 0, 0);
  console.log(letterA);