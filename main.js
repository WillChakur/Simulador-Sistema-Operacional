function main() {
    let fila_tarefas = [];
    const input = document.getElementById('seletor-arquivo');

    input.addEventListener('change', (evento) => {
        const arquivo = evento.target.files[0];

        if (!arquivo) return;

        const leitor = new FileReader;

        leitor.onload = (e) => {
            const conteudo = e.target.result;

            const linhas = conteudo.split(/\r?\n/);

            const sistema = linhas.split(';');

            console.log(`Algoritmo de Escalonamento: ${sistema[0]} ; Quantidade de CPUs: ${sistema[2]}`)

            for (let i = 1; i < linhas.length; i++) {
                if (linhas[i].trim() == '') continue;
                const linhaTarefa = linhas[i].split(';')

                if (linhaTarefa[0] != null) {
                    console.log(`Tarefa ${linhaTarefa[0]} foi lida corretamente`);
                    const tarefa = new Tarefa(linhaTarefa[0], linhaTarefa[1], linhaTarefa[2], linhaTarefa[3], linhaTarefa[4], linhaTarefa[5], linhaTarefa[6]);
                    fila_tarefas.push(tarefa);
                }
            }
        }
        leitor.readAsText(arquivo);
    });

    // Com a lista de tarefas pronta vamos passar ela para um escalonador, que vai passar essa lista para o processador


}