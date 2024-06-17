# 7DaysOfCode - Estrutura de dados


### Dia 1: Array
Arrays são coleções de elementos do mesmo tipo armazenados em localizações de memória contíguas.
- **Uso Ideal:** Acesso rápido por índice.
- **Prós:** Acesso rápido (`O(1)`).
- **Contras:** Tamanho fixo, inserções/deleções custosas (`O(n)`).
- **Características:** Índices baseados em zero.

### Dia 2: Lista Simplesmente Encadeada
Listas simplesmente encadeadas são coleções de nós onde cada nó aponta para o próximo nó na sequência.
- **Uso Ideal:** Estrutura de dados dinâmica com inserções e deleções frequentes.
- **Prós:** Tamanho dinâmico, inserções/deleções eficientes (`O(1)`).
- **Contras:** Acesso lento aos elementos (`O(n)`), maior uso de memória devido aos ponteiros.
- **Características:** Cada nó contém um valor e um ponteiro para o próximo nó.

### Dia 3: Lista Duplamente Encadeada
Listas duplamente encadeadas são semelhantes às listas simplesmente encadeadas, mas cada nó também aponta para o nó anterior.
- **Uso Ideal:** Traversão bidirecional através dos elementos.
- **Prós:** Navegação bidirecional eficiente, inserções/deleções eficientes (`O(1)`).
- **Contras:** Maior uso de memória devido a dois ponteiros por nó, acesso lento aos elementos (`O(n)`).
- **Características:** Cada nó contém um valor, um ponteiro para o próximo nó e um para o nó anterior.

### Dia 4: Fila
Filas são coleções de elementos que seguem o princípio FIFO (First In, First Out).
- **Uso Ideal:** Processamento de elementos na ordem em que foram adicionados.
- **Prós:** Implementação simples, operações de enfileiramento e desenfileiramento eficientes (`O(1)`).
- **Contras:** Acesso restrito (apenas ao primeiro e último elemento).
- **Características:** Inserção no final (enfileiramento), remoção no início (desenfileiramento).

### Dia 5: Pilha
Pilhas são coleções de elementos que seguem o princípio LIFO (Last In, First Out).
- **Uso Ideal:** Processamento de elementos na ordem inversa à que foram adicionados.
- **Prós:** Implementação simples, operações de inserção e remoção eficientes (`O(1)`).
- **Contras:** Acesso restrito (apenas ao elemento do topo).
- **Características:** Operações de push (inserção) e pop (remoção) no topo da pilha.

### Dia 6: Hash Map
Hash Maps são coleções de pares chave-valor que permitem acesso rápido aos valores pela chave.
- **Uso Ideal:** Acesso rápido aos dados associados a chaves únicas.
- **Prós:** Complexidade média rápida para acesso, inserção e remoção (`O(1)` em média).
- **Contras:** Maior uso de memória, possibilidade de colisões que podem afetar o desempenho.
- **Características:** Usa uma função de hash para mapear chaves para índices em um array.

### Dia 7: Árvore
Árvores são estruturas de dados hierárquicas com um nó raiz e filhos que representam subárvores.
- **Uso Ideal:** Representação de relações hierárquicas, operações eficientes de busca e ordenação.
- **Prós:** Inserções, deleções e buscas eficientes (`O(log n)` em árvores balanceadas).
- **Contras:** Implementação mais complexa, manutenção do balanceamento pode ser custosa.
- **Características:** Cada nó possui um valor e ponteiros para os filhos (em árvores binárias, até dois filhos).

