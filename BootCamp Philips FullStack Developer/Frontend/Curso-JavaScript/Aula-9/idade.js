function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}

const pessoa1 = {
    nome: 'Anderson',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};
const animal = {
    nome: 'Willie Nelson',
    idade: 5,
    raca: 'Golden Retriver'
};

console.log(calculaIdade.call(animal, [10]));