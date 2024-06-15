class Book {
	constructor(public name: string, public pages: number) {}
}

class StackBooks {
	private stack: Book[] = [];

	add(name: string, pages: number) {
		const book = new Book(name, pages);

		this.stack.push(book);
	}

	remove() {
		this.stack.pop();
	}

	peek() {
		const index = this.stack.length - 1
    const item = this.stack[index]

    console.log(`Peek: Livro: ${item.name} | Pages: ${item.pages}`)
  }

	showAll() {
		this.stack.map((item) =>
			console.log(`Livro: ${item.name} | Pag: ${item.pages}`)
		);
	}
}

const stack = new StackBooks();

stack.add('Livro 1', 200);
stack.add('Livro 2', 300);
stack.add('Livro 3', 300);
stack.add('Livro 4', 400);

stack.remove();

stack.peek();

stack.showAll();
