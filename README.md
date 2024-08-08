# RotaFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# diário-de-bordo-frontend-desktop-mobile-componentes-API

## 📖 Sobre o projeto

O projeto será responsável pela implementação de um diário de bordo para o registro e controle de ocorrências dos veículos durante as viagens. Os registros serão disponibilizados em versões desktop e mobile para os motoristas e fiscais de ocorrências. O projeto [Front-DdB](https://github.com/GobiraArthur/FrontDdB.git) possibilitará o registro de ocorrências de forma remota por meio dos frameworks Django e Kivy.

### ❔ Como funciona?

A aplicação representa a versão web dos endpoints de vistorias as quais ainda são realizadas manualmente. Nessa versão web, os endpoints de registros serão apresentados de forma interativa para o vistoriadores e motoristas de forma que as ocorrências, quando existentes, sejam cadastradas, incluídas e alteradas de forma simples e intuitivas. Em complemento, a aplicação fornecerá um checklist de ocorrências comuns e um espaço para a descrição de novas ocorrências. 
Entre as informações exibidas, estão:
### Componentes WEB:
- <b>Listagem de Trajetos</b> <small>| para o cadastro do veículo, código, data, motorista, Origem/Destino e Status da viagem. Uma tabela exibirá as informações cadastradas.</small>
- <b>Cadastro</b> <small>| para o cadastro de incidentes, verificações por veículo e telefones úteis.</small>
- <b>Itens Verificados</b> <small>| exibindo uma folha de verificação para o registro das ocorrências por tipo e a situação do veículo após verificação.</small>
- <b>Telas Auxiliares</b> <small>| para a inserção de informações mais detalhadas para os cadastros de veículo, trajeto, cidade, item de verificação, necessidade de manutenção, incidentes e telefones emergenciais.</small>
### Componentes MOBILE:
- <b>Verificação de Itens</b> <small>| com os itens a serem verificados com os status: C, NC ou NA.</small>
- <b>Incidentes</b> <small>| para a verificação dos itens de ocorrência e um campo para a descrição detalhada de uma ocorrência.</small>

### 🔗 URL de produção

[👉🏽 Clique aqui](https://github.com/GobiraArthur/FrontDdB/tree/desenvolvimento) para acessar a versão em produção deste projeto.

## 📚 Tecnologias utilizadas

- <b>[Django](https://www.djangoproject.com/download/5.0.8/tarball/), Kivy, HTML5, CSS3 & [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3</b> <small>| para construção das páginas dinâmicas de cadastro nas versões Web e Mobile.</small>
- <b>Python 3.11.5 & Django 5.0.6</b> <small>| para o desenvolvimento backend.</small>
- <b>Kivy </b> <small>| para a comunicação com a API e construção de interfaces interativas.</small>

## 🛠 Configuração

Execute o comando abaixo para instalar as bibliotecas necessárias para o funcionamento do projeto

pip install django

## ▶ Execução

Na pasta do projeto execute o seguinte comando para iniciar o servidor:

python manage.py runserver
