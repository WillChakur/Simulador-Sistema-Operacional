class Processador {
    constructor(id) {
        this.id = id;
        this.tarefa_atual = null;
        this.ligado = false;
        this.tempoDesligado = 0;
    }

    atribuir_tarefa(tarefa) {
        this.ligado = true;
        this.tarefa_atual = tarefa;
        console.log(`Processador ${this.id} ligado, executando tarefa ${tarefa.id}`);
    }

    desligar() {
        this.ligado = false;
        this.tarefa_atual = null;
        console.log(`Processador ${this.id} foi desligado`)
    }

    executar_tick() {
        if (this.ligado = true && this.tarefa_atual != null) {
            let tarefaTerminou = this.tarefa_atual.progredir_tarefa;

            if (tarefaTerminou) {
                this.desligar()
            }

        } else {
            this.tempoDesligado++;
        }
    }
}