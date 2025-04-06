# WebdriverIO

O objetivo deste projeto é apresentar uma estrutura para a automação de front em dispositivos Android e iOS, utilizando WebdriverIO em conjunto com Appium.

## 👨‍💻 Autor

Marlon Amorim

## 📝 Passos Para baixar o Projeto

1. Clone do repositório:
    ```
    git clone git@github.com:strMarlon/automacao-webdriverIO.git
    ```

2. Entre no diretório do projeto:
    ```
    cd seu-projeto
    ```

3. Instale as dependências:
    ```
    npm install
## 📝 Dependências

- Node 16  
- npm ou yarn  
- Appium 2.1.3  
- uiautomator2 2.45.1  
- xcuitest 4.35.0  

## 🏗️ Estrutura de pastas

```
📁 app                # Aplicativos .apk e .app utilizados para execução local
📁 configs            # Configurações do WebdriverIO para diferentes ambientes
📁 logs               # Logs de execução
📁 node_modules       # Módulos Node instalados
📁 reports            # Relatórios e prints de execução no BrowserStack
📁 screens            # PageObjects com mapeamento e ações dos elementos de tela
📁 tests              # Casos de teste automatizados
📄 .gitignore         # Arquivo para ignorar arquivos e pastas no Git
📄 .babel.config.js   # Configurações Babel para transpilação
📄 .env               # Variáveis de ambiente
📄 package.json       # Metadados, scripts e dependências do projeto
📄 wdio.android.conf.js      # Configuração local Android
📄 wdio.ios.conf.js          # Configuração local iOS
📄 wdio.android.bs.conf.js   # Configuração Android BrowserStack
```

## 💻 Scripts disponíveis

```json
"scripts": {
  "wdio_android": "wdio run wdio.android.conf.js",
  "wdio_ios": "wdio run wdio.ios.conf.js",
  "wdio_android_BS": "wdio run wdio.android.bs.conf.js"
}
```

## 🧪 Cenários de Teste

- **[CT01]** - Validar as labels exibidas na tela "Forms".  
  _Garante que todos os textos esperados estão presentes na interface._

- **[CT02]** - Preencher o campo "Input field" e verificar a label "Click to turn the switch ON" na tela "Forms".  
  _Testa o comportamento dinâmico da tela ao preencher um campo._

- **[CT03]** - Acionar o Feature Toggle e validar a label "Click to turn the switch OFF" na tela "Forms".  
  _Confirma a mudança de estado do botão de alternância._

- **[CT04]** - Validar as labels apresentadas na tela "Home".  
  _Verifica se os textos estão corretos e visíveis na tela inicial._

- **[CT05]** - Verificar a ação de clique no botão "Home".  
  _Garante que o botão está funcionando e redireciona corretamente._

- **[CT06]** - Validar a exibição e funcionalidade do botão "Login".  
  _Confirma que o botão aparece e responde ao clique._

- **[CT07]** - Verificar mensagens de erro ao deixar os campos de e-mail e senha em branco na tela "Login".  
  _Assegura que a validação de campos obrigatórios está ativa._

- **[CT08]** - Validar as labels da subtela "Login" dentro da tela "Login".  
  _Testa a presença dos textos corretos na subtela de autenticação._

- **[CT09]** - Validar o preenchimento dos campos de e-mail e senha na tela "Login".  
  _Garante que os dados são aceitos corretamente nos campos._

- **[CT10]** - Verificar as ações e os resultados esperados da subtela "Sign Up" na tela "Login".  
  _Valida o fluxo de cadastro de novos usuários._

## ▶️ Como executar os testes

- Android local:
  ```bash
  npx run wdio_android
  ```

- iOS local:
  ```bash
  npx run wdio_ios
  ```

- Android BrowserStack:
  ```bash
  npx run wdio_android_BS
  ```

## 📊 Relatórios Allure

Após a execução dos testes, para gerar e visualizar o relatório Allure:

```bash
allure generate <caminho-da-pasta-de-resultados> --clean -o allure-report
allure open
```

> Substitua `<caminho-da-pasta-de-resultados>` pela pasta de resultados desejada, como `results-android-local` ou `report-android-browserstack`.

## 🔁 Pipeline CI/CD

Este projeto usa o GitLab CI para automação dos testes. A configuração do pipeline está no arquivo `.gitlab-ci.yml`.
