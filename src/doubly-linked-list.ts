class Product {
	next: Product | null;
	previous: Product | null;
	name: string;
	barcode: string;
	price: number;
	quantity: number;

	constructor(name: string, barcode: string, price: number, quantity: number) {
		this.name = name;
		this.barcode = barcode;
		this.price = price;
		this.quantity = quantity;

		this.next = null;
		this.previous = null;
	}
}

class Inventory {
	private root: Product | null = null;
	private tail: Product | null = null;

	add(name: string, barcode: string, price: number, quantity: number) {
		const newData = new Product(name, barcode, price, quantity);

		if (!this.root) {
			this.root = newData;
			this.tail = newData;
		} else {
			if (this.tail) {
				this.tail.next = newData;
				newData.previous = this.tail;
				this.tail = newData;
			}
		}
	}

	remove(barcode: string) {
		let current = this.root;

		while (current) {
			if (current.barcode === barcode) {
				if (current.previous) {
					current.previous.next = current.next;
					current.previous.previous = current.previous;
				} else {
					this.root = current.next;
				}

				if (this.tail === current) {
					this.tail = current.previous;
				}

				return;
			}

			current = current.next;
		}
	}

	savePrice(barcode: string, newPrice: number): void {
		let current = this.root;

		if (newPrice <= 0) return console.log('Valor inválido');

		while (current) {
			if (current.barcode === barcode) {
				current.price = newPrice;
				return;
			}
			current = current?.next;
		}
	}

	showList(): void {
		let current = this.root;

		while (current) {
			console.log(
				`Nome: ${current.name} | Preço: ${current.price} | Quant: ${current.quantity}`
			);
			console.log(`Código de barrar: ${current.barcode}`);
			console.log(`Anterior: ${current.previous?.name}`);
			console.log(`Proximo: ${current.next?.name}`);
			console.log('---------------------------------------');
			current = current.next;
		}
	}
}

const inventory = new Inventory();

inventory.add('Produto 1', '123', 5, 50);
inventory.add('Produto 2', '456', 5, 50);
inventory.add('Produto 3', '789', 5, 50);
inventory.add('Produto 5', '756', 5, 50);
inventory.add('Produto 6', '146', 5, 50);
inventory.add('Produto 7', '147', 5, 50);
inventory.add('Produto 8', '158', 5, 50);
inventory.add('Produto 9', '137', 5, 50);

inventory.savePrice('456', 10);

inventory.remove('158');

inventory.showList();
