import { Book, LibraryBook } from './book'; // Импортируем интерфейс и класс книги

// Интерфейс для пользователя
export interface User {
    id: number;
    name: string;
    borrowedBooks: Book[];
}

// Класс пользователя, реализующий интерфейс User
export class LibraryUser implements User {
    public borrowedBooks: Book[] = [];

    constructor(public id: number, public name: string) {}

    // Метод для взятия книги
    borrow(book: LibraryBook): void {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
        } else {
            console.log(`Книга "${book.title}" уже занята.`);
        }
    }

    // Метод для возврата книги
    return(book: LibraryBook): void {
        const bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex !== -1) {
            this.borrowedBooks.splice(bookIndex, 1);
            book.returnBook();
        } else {
            console.log(`Книга "${book.title}" не была взята.`);
        }
    }
}
