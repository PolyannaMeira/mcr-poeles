# Configuração Web3Forms

## Passos para ativar o formulário:

### 1. Criar Access Key no Web3Forms
1. Acesse: https://web3forms.com
2. Clique em **"Create Access Key"**
3. Digite o email onde deseja receber os formulários (ex: n.pinto.courtage@gmail.com)
4. Clique em **"Create Access Key"**
5. **Copie a access key gerada** (exemplo: `abc123de-f456-7890-abcd-ef1234567890`)

### 2. Substituir no código
No arquivo `src/components/ContactSection.tsx`, linha ~50, substitua:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'
```
Por:
```typescript
access_key: 'sua_access_key_aqui'
```

### 3. Testar
1. Execute `npm run dev`
2. Preencha o formulário
3. Verifique se chegou o email

## Vantagens do Web3Forms:
- ✅ **Gratuito** até 1000 submissões/mês
- ✅ **Sem configuração de servidor** necessária
- ✅ **Anti-spam** integrado
- ✅ **Notificações por email** automáticas
- ✅ **Funciona de qualquer domínio**

## Exemplo de email que será recebido:
```
Assunto: Nouvelle demande de devis - M.C.R Chauffage

Nouvelle demande de devis:

Nome: João Silva
Prenome: João
Email: joao@exemplo.com
Telefone: 06 12 34 56 78
Code Postal: 62000
Tipo de projeto: Poêle à Granulés
```

## Problemas comuns:
- **Access key inválida**: Verifique se copiou corretamente
- **Formulário não envia**: Verifique a conexão com internet
- **Não recebe emails**: Verifique spam/lixo eletrônico

## Configurações adicionais (opcional):
No Web3Forms dashboard você pode:
- Configurar redirecionamento após envio
- Personalizar template do email
- Adicionar webhooks
- Ver estatísticas de envios