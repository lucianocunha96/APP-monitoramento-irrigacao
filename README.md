# **Monitoramento de Irrigação**

Este é um aplicativo desenvolvido com React Native para monitorar o funcionamento de um sistema de irrigação automática. O app tem como objetivo principal acompanhar remotamente os registros de ativação e desativação da bomba de irrigação, ajudando usuários a garantir que o sistema está operando corretamente.

# 🚀 Funcionalidades

   - Exibição de uma lista com os horários em que a bomba foi ligada e desligada.
   - Identificação visual por cores:
      - Laranja: Sistema ligado.
      - Verde: Sistema desligado.
   - Interface simples e intuitiva, com informações organizadas em formato de lista.
   - Registros incluem:
      - Data e hora no formato completo (ex: 2024-11-10 14:30:00).
      - Data formatada no padrão DD/MM/AAAA HH:mm para maior legibilidade.

# 🛠️ Tecnologias Utilizadas
   - React Native: Para o desenvolvimento do aplicativo mobile.
   - Axios: Para realizar chamadas à API.
   - Node.js: Ambiente para gerenciamento de dependências e scripts.
   - Android Studio: Emulador e configuração de ambiente para Android.
   - Xcode: Emulador e configuração de ambiente para iOS.

# 📦 Estrutura do Projeto
** src/components: ** Componentes reutilizáveis (ex: ListItem, Header, Footer).
** src/screens: ** Telas principais do aplicativo (ex: HomeScreen).
** src/services: ** Integração com a API.
** assets: ** Recursos estáticos, como imagens e ícones.

# 🔧 Configuração do Ambiente

   - Clone este repositório:
```bash
# Copiar código
git clone https://github.com/seu-usuario/monitoramento-irrigacao.git
```

   - Instale as dependências:
```bash
#Copiar código
npm install
```

   - Inicie o aplicativo:
```bash
# Copiar código
npx react-native run-android
```

   - Ou para iOS:
```bash
# Copiar código
npx react-native run-ios
```

# 🌟 Objetivo

Este projeto foi desenvolvido com o intuito de fornecer uma ferramenta prática para gerenciar sistemas de irrigação.
