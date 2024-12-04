# 📋 Requisitos Funcionais (RF)

2. Dashboard general (RF01)
- [] Deve exibir o total de gastos do mês atual.
- [] Mostrar gráficos dinâmicos (pizza ou barras) com a distribuição de gastos por categoria.
- [] Atualizar as informações em tempo real com base nos filtros aplicados.

3. Register form (RF02)
- [] O usuário deve ser capaz de adicionar uma nova despesa por meio de um formulário.
- [] O formulário deve conter os campos: descrição, valor, categoria e data.
- [] O botão "Salvar" deve validar os campos e adicionar a despesa à lista global (armazenada no Redux).

4. Visualização de Despesas (RF03)
- [] Exibir uma lista com todas as despesas cadastradas.
- [] Permitir editar ou excluir uma despesa existente.
- [] Ordenar a lista por data ou valor.


5. Filtros de Despesas (RF04)
- [] Filtros devem estar disponíveis tanto no Dashboard quanto na Tela de Despesas.
- [] Permitir filtrar por período (últimos 7 dias, mês atual, ano atual).
- [] Filtrar por categoria e faixa de valor.
- [] Input para filtrar despesa especifica apenas na tela de detalhes
- [] Aplicar os filtros em tempo real, atualizando a tabela e os gráficos.


# Regras de Negócio (RN)
1. RN01:
- [] O sistema deve calcular e exibir o total de gastos do mês com base nas despesas registradas.

2. RN02:
- [] Uma despesa deve obrigatoriamente conter uma descrição, valor maior que zero e categoria válida.

3. RN03:
- [] O valor das despesas adicionadas não pode ser negativo ou zero.

4. RN04:
- [] A edição de uma despesa existente deve preservar o histórico anterior até a confirmação da alteração.

5. RN05:
- [] Exclusão de despesas deve exigir uma confirmação do usuário.

6. RN06:
- [] O cálculo de saldo disponível será baseado em um orçamento planejado fixo (definido previamente no Redux).

# ⚙️ Requisitos Não Funcionais (RNF)
1. Desempenho (RNF01):
- [] A aplicação deve carregar e atualizar os dados (gráficos e tabelas) em no máximo 2 segundos.

2. Usabilidade (RNF02):
- [] A interface deve seguir boas práticas de UX/UI, utilizando componentes do Material UI para consistência visual.
- [] Ícones devem ser intuitivos, especialmente para ações de adicionar, editar e excluir.

3. Segurança (RNF03):
- [] Validação de dados no frontend (descrição não vazia, valores numéricos corretos).

4. Manutenibilidade (RNF04):
- [] O código deve ser modular, utilizando Redux Toolkit para gerenciar o estado global de forma clara.
- [] Documentação básica do código com TypeScript e JSDoc.

5. Compatibilidade (RNF05):
- [] Suporte para navegadores modernos (Chrome, Firefox, Edge).
- [] Testado em dispositivos móveis.

6. Acessibilidade (RNF06):
- [] Implementar atributos ARIA nos componentes.
- [] Garantir contraste adequado e navegação via teclado.


# Exemplo JSDoc

```javascript
/**
* - this function exists to format a value 10.30000000 from 10,30
* - 10.30000 is only example value, you can add anything value this function
* @param {number} value receive a value of type number, example.: 10.30000000
* @returns { string } return a formatted string with 10,30
*/

export function formatCurrency(value: number) {
    return value.toFixed(2).replace('.', ',')
}
```
