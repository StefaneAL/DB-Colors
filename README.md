[![name](https://raw.githubusercontent.com/StefaneAL/DB-Colors/main/igm/capa.jpeg)](https://www.todasasletras.org/)

# TODAS AS LETRAS - LGBTI+ IN TECH

> Banco de  talentos **LGBTI+** para tecnologia, direcionado ao **TODAS AS LETRAS**.

> Status: **Concluído** ✔

## **Apresentação** 
Todas as letra é um projeto que se iniciou em 2018 motivado pela falta de iniciativas para pessoas **LGBTI+**. Tinha como objetivo inicial ser um grupo de apoio para compartilhar vivências. 
Hoje se tormou o maior meetup LGBTI+ da América Latina.

## *Tem como base 3 pilares* 

* ### **Capacitar** 
    * Capacitam pessoas LGBTI+ com encontros, cursos e treinamentos de tecnologia. Além de oferecer entradas gratuitas em grandes eventos.

* ### **Inserir**
    * Inserem pessoas LGBTI+ no mercado de trabalho com a divulgação de vagas e a presença cortesia em eventos importantes para a área.

* ### **Crescer**
    * Geram lideranças LGBTI+ com treinamentos e mentorias para palestrantes.

    ![name](https://raw.githubusercontent.com/StefaneAL/DB-Colors/main/igm/dados.jpeg)


## **Contextualização** 
Ao tentar fazer meu cadastro notei que o projeto usa um `Google Forms` para armazenar as informações de talentos cadastrados.

Entendi que poderia ser uma boa colaboração criar uma API para o armazenamento e a busca de profissionais 

## **Solução** 
Uma API com dados basicos de `USER` e tambem de `HardSkills` que pode ser incrementada conforme a necessidade da plataforma.

## **Funcionalidades** 
- [X] Cadastro de `USER`
- [X] Lista de todos os `USERS`
- [X] Localizar `USERS` por `id`
- [X] Atualização de cadastro 
- [X] Remoção de `USERS`
---
- [X] Cadastro de `HardSkills`
- [X] Lista de todas as `HardSkills`
- [X] Localizar `HardSkills` por `id`
- [X] Atualização de `HardSkills` 
- [X] Remoção de `HardSkills`

## **Features e rotas**

>Esta API está sendo escutada em `https://db-colors.herokuapp.com` 
---
* ## `USER`

| Feature | Método | Rota |
|---------|--------|------|
| Cadastro de `USER`| POST | `/user/create` |
| Lista de todos os `USERS`| GET | `/user/all` |
| Localizar `USERS` por `id` | GET | `/user/:id` |
| Atualização de cadastro | PUT | `/user/:id` |
| Remoção de `USERS` | DEL | `/user/:id` |

---

* ## `HardSkills`

| Feature | Método | Rota |
|---------|--------|------|
| Cadastro de `HardSkills`| POST | `/skill/create` |
| Lista de todos os `HardSkills`| GET | `/skill/all` |
| Localizar `HardSkills` por `id` | GET | `/skill/:id` |
| Atualização de `HardSkills` | PUT | `/skill/:id` |
| Remoção de `HardSkills` | DEL | `/skill/:id` |
