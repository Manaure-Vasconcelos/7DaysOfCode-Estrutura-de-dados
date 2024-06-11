/*
Ao adicionar um novo item, o usuário deve inserir o nome do produto e a quantidade desejada.
Ao remover um item, o usuário deve especificar o nome do produto. 
Por fim, ao listar todos os itens, a lista deve exibir o nome do produto e a quantidade em um formato legível.
*/

interface ListProp {
	product: string;
	quantity: number;
}

class ShoppingList {
	private _product: string[] = [];
	private _quantity: number[] = [];

	add(props: ListProp) {
		this._product.push(props.product);
		this._quantity.push(props.quantity);
	}

	remove(product: string) {
		const index = this._product.findIndex((item) => item === product);
		this._product.splice(index, 1);
		this._quantity.splice(index, 1);
	}

	listCart() {
		for (let i = 0; i <= this._product.length - 1; i++) {
			console.log(`Item ${i}: ${this._product[i]} / ${this._quantity[i]}`);
		}
	}
}

const instancy = new ShoppingList();

instancy.add({ product: 'produto 1', quantity: 10 });
instancy.add({ product: 'produto 2', quantity: 20 });
instancy.add({ product: 'produto 3', quantity: 30 });
instancy.add({ product: 'produto 4', quantity: 40 });
instancy.add({ product: 'produto 5', quantity: 50 });

instancy.remove('produto 2');

instancy.listCart();
