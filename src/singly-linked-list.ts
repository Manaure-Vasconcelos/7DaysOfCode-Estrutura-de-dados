class Patient {
	next: Patient | null;
	id: number;
	name: string;
	health: string;

	constructor(id: number, name: string, health: string) {
		this.next = null;
		this.id = id;
		this.name = name;
		this.health = health;
	}
}

class PatientList {
	private root: Patient | null = null
	private tail: Patient | null = null;

	add(id: number, name: string, health: string) {
		const newData = new Patient(id, name, health);
		if (!this.root) {
			this.root = newData;
			this.tail = newData;
		}

		if (this.tail) {
			this.tail.next = newData;
			this.tail = this.tail.next
		}
	}

	remove(name: string) {
		let previous: Patient | null = null;
		let current = this.root;

		while (current) {
			if (current.name === name) {
				if (previous) {
					previous.next = current.next;
				} else {
					this.root = current.next;
				}

				if (this.tail === current) {
					this.tail = previous;
				}
				return true;
			}

			previous = current;
			current = current.next;
		}
		return false;
	}

	showPatients() {
		let current = this.root;
		while (current) {
			console.log(`ID: ${current.id}`);
			console.log(`Nome: ${current.name}`);
			console.log(`Estado de saúde: ${current.health}`);
			console.log('------------------------');
			current = current.next;
		}
	}
}

const emergency = new PatientList();

emergency.add(1, 'Paciente 1', 'Estável');
emergency.add(2, 'Paciente 2', 'Critico');
emergency.add(3, 'Paciente 3', 'Normal');
emergency.add(4, 'Paciente 4', 'Estável');

emergency.remove('Paciente 3');

emergency.showPatients();
