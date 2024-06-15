class Order {
	dish: string;
	table: number;

	constructor(dish: string, table: number) {
		this.dish = dish;
		this.table = table;
	}
}

class Restaurant {
	private row: Order[] = [];

	enqueue(dish: string, table: number) {
		const newOrder = new Order(dish, table);

		this.row.push(newOrder);
	}

	dequeue() {
		this.row.shift();
	}

	showRow() {
		this.row.map((item) =>
			console.log(`Mesa: ${item.table} | Prato: ${item.dish}`)
		);
	}
}

const restaurant = new Restaurant();

restaurant.enqueue('Prato 1', 1);
restaurant.enqueue('Prato 2', 2);
restaurant.enqueue('Prato 3', 3);
restaurant.enqueue('Prato 4', 4);

restaurant.dequeue();
restaurant.dequeue();

restaurant.showRow();
