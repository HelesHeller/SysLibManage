import { LibraryBook } from './book'; // Импортируем класс книги
import { LibraryUser } from './user'; // Импортируем класс пользователя

// Класс библиотеки для управления книгами и пользователями
export class Library {
    public books: LibraryBook[] = [];
    public users: LibraryUser[] = [];

    // Добавление книги в библиотеку
    addBook(book: LibraryBook): void {
        this.books.push(book);
        console.log(`Книга "${book.title}" добавлена в библиотеку.`);
    }

    // Регистрация нового пользователя
    registerUser(user: LibraryUser): void {
        this.users.push(user);
        console.log(`Пользователь "${user.name}" зарегистрирован.`);
    }

    // Поиск книг по автору
    findBooksByAuthor(author: string): LibraryBook[] {
        return this.books.filter(book => book.author === author);
    }

    // Поиск доступных книг
    findAvailableBooks(): LibraryBook[] {
        return this.books.filter(book => book.isAvailable);
    }
}
