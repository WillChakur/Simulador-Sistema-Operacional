class Relogio {
    constructor(processsadores, listaTarefas) {
        this.tick = 0;
        this.processadores = processsadores;
        this.listaTarefas = listaTarefas;
        this.tarefasProntas = [];
    }

    aumentarTick() {
        this.tick += 0;

        for (cpu of this.processadores) {
            if (cpu.ligado) {
                cpu.executar_tick()
            }


        }
    }
}