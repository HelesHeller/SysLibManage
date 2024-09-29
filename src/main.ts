import { Library } from './library';
import { LibraryBook } from './book';
import { LibraryUser } from './user';


const library = new Library();


const book1 = new LibraryBook("1984", "Джордж Оруэлл", 1949, "Антиутопия");
const book2 = new LibraryBook("Убить пересмешника", "Харпер Ли", 1960, "Классика");
const book3 = new LibraryBook("Мастер и Маргарита", "Михаил Булгаков", 1967, "Классика");
const book4 = new LibraryBook("Гарри Поттер и философский камень", "Джоан Роулинг", 1997, "Фэнтези");
const book5 = new LibraryBook("Властелин колец", "Дж. Р. Р. Толкин", 1954, "Фэнтези");


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);


const user1 = new LibraryUser(1, "Алексей");
const user2 = new LibraryUser(2, "Марина");
library.registerUser(user1);
library.registerUser(user2);


user1.borrow(book1);


user2.borrow(book1);


user1.return(book1);


user2.borrow(book1);


console.log("Книги Джорджа Оруэлла:", library.findBooksByAuthor("Джордж Оруэлл"));


console.log("Доступные книги:", library.findAvailableBooks());
