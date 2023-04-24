insert into usuarios(nome, email, idade)
values ('Dainara Krewer',
        'dainara_krewer@hotmail.com',
        24);

insert into usuarios(nome, email, idade)
values ('Teste',
        'teste@teste.com',
        30);

select *
from usuarios;

select *
from usuarios
where idade = 24;

select *
from usuarios
where nome = 'teste';