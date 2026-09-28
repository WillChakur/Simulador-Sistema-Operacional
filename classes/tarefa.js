class Tarefa {
    constructor(id, cor, instante_ingresso, duracao, periodo, prazo, lista_eventos) {
        this.id = id;
        this.duracao = duracao
        this.instante_ingresso = instante_ingresso;
        this.lista_eventos = lista_eventos
        this.periodo = periodo;
        this.prazo = prazo;
        this.estado = 'CRIADA';
        this.tempo_executado = 0;
        this.prazo_absoluto = instante_ingresso + prazo;
        this.ciclos_concluido = 0;
        this.cor = '#' + cor;
    }

    progredir_tarefa() {
        if (this.duracao <= 0) {
            if (this.tempo_executado == this.duracao) {
                this.ciclos_concluido += 1;
                this.tempo_executado = 0;
                if (this.ciclos_concluido == 10) {
                    this.estado = 'TERMINADA';
                } else {
                    this.estado = 'DORMINDO';
                }
                return true;
            } else {
                this.tempo_executado += 1;
                return false;
            }
        }
        else {
            print(`Tarefa ${this.id} possui duracao invalida.`)
            return false;
        }
    }
}

// id; cor; ingresso; duracao; periodo; prazo; lista_eventos