import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1', // vetor host vai receber o valor em string '127.0.0.1' que significa o ip da maquina local, vai olhar para si mesmo a , separa  chaves de vetores
    user: 'root', // vetor user vai receber o valor string 'root'
    password: 'senac@02', // vetor password vai receber o valor 'senac@02'
    database: 'sakila' // vetor database vai receber o valor 'pedro'
}).promise(); // promise, é um executor de si mesmo

const result = await pool.query("update `sakila`.`actor` set `first_name` = 'pedro' where `actor_id` = 46;"); // a variavel result, ó vai receber o valor depois que processar tudo e o await significa que vai aguardar o resultado, poll.query vai invocar a explicação que estiver dentro do (), e o que dentro do () executa tudo do sql
console.log(result); // vai exibir no console o resultado // opçao ctrl c, obdece o comando cancelar no terminar, e nao copiar

