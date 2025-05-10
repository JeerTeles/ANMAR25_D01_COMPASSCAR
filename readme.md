# AWS NODE MAR25 DESAFIO 01

## Descrição
Este projeto é parte do desafio 01 do curso AWS NODE MAR25 (Compass UOL). O objetivo é desenvolver um sistema de locação de carros, para a Compass Car.
Inicialmente, vamos começar com um MVP (Produto Mínimo Viável)  de uma API para fazer a gestão dos nossos carros (CRUD de carros).
Essa API deve cadastrar, buscar, atualizar e excluir carros, bem como fazer as devidas validações.

## Tecnologias Ultilizadas

* Node.js
* cors
* dotenv
* express
* sequelize

## Pré-requisitos

* Usar JavaScript como como linguagem pricipal.
* Utilizar o framework Express.js. 
* Node.js instalado.
* Usar Mysql como sistema de gerenciamento de banco de dados.


# AWS NODE MAR25 DESAFIO 01: Compass CAR API

## Descrição

Esta API Node.js, desenvolvida com Express.js, tem como objetivo fornecer um sistema de gerenciamento de carros para a empresa de locação "Compass Car". O foco inicial é a implementação de um MVP (Produto Mínimo Viável) para realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em registros de carros, incluindo as devidas validações.

## Como executar o projeto (Passo a Passo para Iniciantes)

Siga estes passos para configurar e executar a API Compass CAR em seu ambiente local:

**Pré-requisitos:**

* **Node.js:** Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).
* **npm (ou yarn):** Geralmente instalado com o Node.js. Será usado para gerenciar as dependências do projeto.
* **MySQL:** Você precisará de um servidor MySQL rodando localmente. Se não tiver instalado, você pode usar ferramentas como [MySQL Community Server](https://dev.mysql.com/downloads/mysql/) ou um ambiente de desenvolvimento como [XAMPP](https://www.apachefriends.org/index.html).

**Passos:**

1.  **Clonar o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITÓRIO_PRIVADO>
    cd ANMAR25_D01_COMPASSCAR
    ```
    *(Substitua `<URL_DO_SEU_REPOSITÓRIO_PRIVADO>` pela URL do seu repositório no GitHub).*

2.  **Instalar as dependências:**
    Dentro da pasta do projeto (`ANMAR25_D01_COMPASSCAR`), execute o seguinte comando para instalar as bibliotecas necessárias listadas nas orientações:
    ```bash
    npm install
    # ou
    yarn install
    ```
    Este comando irá baixar e instalar as bibliotecas `express`, `cors`, `dotenv`, `sequelize` e `mysql2`.

3.  **Configurar o banco de dados:**
    a.  **Criar o database:** Abra seu cliente MySQL (como MySQL Workbench, DBeaver ou linha de comando) e execute o seguinte comando para criar o banco de dados:
        ```sql
        CREATE DATABASE compasscar;
        ```

    b.  **Criar as tabelas:** As tabelas `cars` e `cars_items` precisam ser criadas. Execute os seguintes comandos SQL:

        ```sql
        USE compasscar;

        CREATE TABLE cars (
            id INT AUTO_INCREMENT PRIMARY KEY,
            brand VARCHAR(255) NOT NULL,
            model VARCHAR(255) NOT NULL,
            plate VARCHAR(8) UNIQUE NOT NULL,
            year INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE cars_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            car_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (car_id) REFERENCES cars(id)
        );
        ```

    c.  **Configurar as variáveis de ambiente:**
        * Na raiz do seu projeto, crie um arquivo chamado `.env`.
        * Adicione as informações de conexão com o seu banco de dados MySQL neste arquivo. Substitua os valores pelos seus dados de configuração:

        ```dotenv
        DB_HOST=localhost
        DB_USER=seu_usuario_mysql
        DB_PASSWORD=sua_senha_mysql
        DB_NAME=compasscar
        DB_DIALECT=mysql
        ```
        *(Certifique-se de usar as credenciais corretas para acessar seu banco de dados MySQL).*

4.  **Executar a API:**
    No terminal, dentro da pasta do projeto, execute o seguinte comando para iniciar o servidor da API:
    ```bash
    npm start
    # ou
    yarn start
    ```
    Este comando geralmente executa um script definido no arquivo `package.json`, que iniciará o seu servidor Node.js (provavelmente no arquivo principal da sua aplicação, como `server.js` ou `app.js`).

5.  **Testar a API:**
    A API estará rodando (por padrão, em alguma porta como `3000`). Você pode usar ferramentas como `curl`, Postman ou Insomnia para enviar requisições HTTP para os endpoints definidos nas especificações do projeto (por exemplo, `POST /api/v1/cars` para cadastrar um novo carro).

## Próximos Passos

Agora você tem a API rodando! Você pode começar a implementar as funcionalidades de cada endpoint seguindo as especificações detalhadas no documento principal. Lembre-se de escrever seu código em inglês, utilizar as bibliotecas especificadas e seguir as orientações de validação e tratamento de erros. Boa sorte com o desenvolvimento!


