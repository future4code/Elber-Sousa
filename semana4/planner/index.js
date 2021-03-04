function adicionaTarefa() {
  const tarefa = document.getElementById('tarefa');
  if (tarefa.value !== '') {
    const diasSemana = document.getElementById('dias-semana');
    const dia = document.getElementById(diasSemana.value);
    dia.innerHTML += `<li>${tarefa.value}</li>`;
    tarefa.value = '';
    diasSemana.value = '';
  }
}
