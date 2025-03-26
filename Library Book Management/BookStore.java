import java.util.Scanner;

class Book {
	
    private String title;
    private String author;
    private double price;

    
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void details() {
        System.out.println("\n Book Details");
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: $" + price);
    }
    
    public String toString() {
    	return "Title: " + title + " Author: " + author;
    }
}

public class BookStore {
    public static void main(String[] args) {

    	Book[] books = new Book[5];

        books[0] = new Book("The Alchemist", "Paulo Coelho", 12.99);
        books[1] = new Book("1984", "George Orwell", 9.99);
        books[2] = new Book("To Kill a Mockingbird", "Harper Lee", 14.99);
        books[3] = new Book("The Great Gatsby", "F. Scott Fitzgerald", 10.99);
        books[4] = new Book("Moby Dick", "Herman Melville", 8.99);

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the book title to search: ");
        String searchTitle = scanner.nextLine();

        boolean found = false;

        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(searchTitle)) {
                book.details();
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Book not found!");
        }

        scanner.close();
    }
}
