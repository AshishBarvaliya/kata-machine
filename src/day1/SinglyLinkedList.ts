type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = { value: item };
            return;
        }

        let head = this.head;
        this.head = { value: item, next: head };
    }

    insertAt(item: T, idx: number): void {
        if (!this.length) {
            this.append(item);
            return;
        }
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        if (curr) {
            curr.next = { value: item, next: curr?.next?.next };
        }
    }

    append(item: T): void {
        let node = { value: item };

        if (!this.head) {
            this.head = node;
            this.length++;
            return;
        }

        let curr = this.head;
        while (curr?.next) {
            curr = curr.next;
        }
        curr.next = node;
        this.length++;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = this.head;
        let ind = 0;

        for (let i = 0; i < this.length && curr; i++) {
            if (curr?.value === item) {
                break;
            }
            prev = curr;
            curr = curr.next;
            ind++;
        }
        if (curr && prev) {
            let value = curr?.value;
            prev = curr?.next;
            this.length--;

            if (ind === 0) {
                this.head = curr?.next;
            }

            return value;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        let curr = this.head;

        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head;
        let prev = this.head;

        for (let i = 0; i < idx && curr; i++) {
            prev = curr;
            curr = curr.next;
        }

        if (curr && prev) {
            prev.next = curr?.next;

            if (idx === 0) {
                this.head = curr?.next;
            }

            this.length--;
            return curr.value;
        }

        return undefined;
    }
}

