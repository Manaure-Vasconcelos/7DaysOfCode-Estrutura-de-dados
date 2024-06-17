class Product {
	id: number;
	name: string;
	quantity: number;

	constructor(id: number, name: string, quantity: number) {
		this.id = id;
		this.name = name;
		this.quantity = quantity;
	}
}

class NodeProduct {
	product: Product;
	left: NodeProduct | null;
	right: NodeProduct | null;

	constructor(product: Product) {
		this.product = product;
		this.left = null;
		this.right = null;
	}
}

class ProductTree {
	root: NodeProduct | null;

	constructor() {
		this.root = null;
	}

	insert(id: number, name: string, quantity: number): void {
		const newProduct = new Product(id, name, quantity);
		if (this.root === null) {
			this.root = new NodeProduct(newProduct);
		} else {
			this._insert(this.root, newProduct);
		}
	}

	private _insert(node: NodeProduct, product: Product): void {
		if (product.id < node.product.id) {
			if (node.left === null) {
				node.left = new NodeProduct(product);
			} else {
				this._insert(node.left, product);
			}
		} else if (product.id > node.product.id) {
			if (node.right === null) {
				node.right = new NodeProduct(product);
			} else {
				this._insert(node.right, product);
			}
		} else {
			// Update the existing product's information
			node.product.name = product.name;
			node.product.quantity = product.quantity;
		}
	}

	search(id: number): Product | null {
		return this._search(this.root, id);
	}

	private _search(node: NodeProduct | null, id: number): Product | null {
		if (node === null) {
			return null;
		}

		if (id === node.product.id) {
			return node.product;
		} else if (id < node.product.id) {
			return this._search(node.left, id);
		} else {
			return this._search(node.right, id);
		}
	}
}

// Example usage
const tree = new ProductTree();
tree.insert(1, 'Product A', 100);
tree.insert(2, 'Product B', 200);
tree.insert(3, 'Product C', 150);

console.log(tree.search(2)); // Should print the information of Product B
console.log(tree.search(4)); // Should print null, as product with ID 4 does not exist
