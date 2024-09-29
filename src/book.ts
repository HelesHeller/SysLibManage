// Интерфейс для книги
export interface Book {
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
    isAvailable: boolean;
}

// Класс книги, реализующий интерфейс Book
export class LibraryBook implements Book {
    constructor(
        public title: string,
        public author: string,
        public publishedYear: number,
        public genre: string,
        public isAvailable: boolean = true
    ) {}

    // Метод для взятия книги
    borrowBook(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} взята.`);
        } else {
            console.log(`${this.title} недоступна.`);
        }
    }

    // Метод для возврата книги
    returnBook(): void {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.title} возвращена.`);
        }
    }
}
