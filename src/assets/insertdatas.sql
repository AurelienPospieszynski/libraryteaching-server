-- SQL commands to insert data into the tables

-- Insert Authors
INSERT INTO Authors (Name, Bio) VALUES
('J.K. Rowling', 'Author of Harry Potter series.'),
('George Orwell', 'Known for 1984 and Animal Farm.'),
('Leo Tolstoy', 'Famous for War and Peace and Anna Karenina.'),
('Agatha Christie', 'Known for her detective novels.'),
('William Shakespeare', 'English playwright, actor, and poet.'),
('Stephen King', 'American author of horror, supernatural fiction.'),
('Mark Twain', 'Known for The Adventures of Tom Sawyer.'),
('Jane Austen', 'Known for Pride and Prejudice, Sense and Sensibility.'),
('Charles Dickens', 'Famous for A Tale of Two Cities, Oliver Twist.'),
('Ernest Hemingway', 'Known for The Old Man and the Sea.');

-- Insert Categories
INSERT INTO Categories (Name, Description) VALUES
('Fiction', 'Fictional stories and novels.'),
('Non-Fiction', 'Non-fictional and informational content.'),
('Mystery', 'Novels that involve mystery.'),
('Science Fiction', 'Sci-Fi and futuristic themes.'),
('Historical Fiction', 'Novels set in a historical period.'),
('Fantasy', 'Fantasy themed novels and stories.'),
('Biography', 'Biographical and autobiographical content.'),
('Thriller', 'Thrilling and suspenseful content.'),
('Romance', 'Romantic themed novels.'),
('Self Help', 'Books for self-improvement and guidance.');

-- Insert Books
INSERT INTO Books (Title, AuthorID, CategoryID, ISBN, PublicationYear) VALUES
('Harry Potter and the Philosopher''s Stone', 1, 6, '9780747532743', 1997),
('1984', 2, 4, '9780451524935', 1949),
('War and Peace', 3, 5, '9781400079988', 1869),
('Murder on the Orient Express', 4, 3, '9780007119318', 1934),
('Hamlet', 5, 1, '9780521618748', 1603),
('The Shining', 6, 7, '9780307743657', 1977),
('The Adventures of Tom Sawyer', 7, 5, '9780486400778', 1876),
('Pride and Prejudice', 8, 9, '9780141439518', 1813),
('Oliver Twist', 9, 1, '9780141439747', 1838),
('The Old Man and the Sea', 10, 2, '9780684801223', 1952);

-- Insert Users
INSERT INTO Users (Name, Email, MembershipDate) VALUES
('John Doe', 'john.doe@example.com', '2020-01-01'),
('Jane Smith', 'jane.smith@example.com', '2019-05-16'),
('Alice Johnson', 'alice.johnson@example.com', '2021-02-24'),
('Bob Brown', 'bob.brown@example.com', '2018-11-12'),
('Charlie Davis', 'charlie.davis@example.com', '2020-03-30'),
('Diana Evans', 'diana.evans@example.com', '2019-07-08'),
('Frank Green', 'frank.green@example.com', '2021-06-17'),
('Grace Hall', 'grace.hall@example.com', '2017-09-21'),
('Henry Adams', 'henry.adams@example.com', '2020-12-03'),
('Irene Wilson', 'irene.wilson@example.com', '2019-10-10');

-- Insert BorrowRecords
INSERT INTO BorrowRecords (BookID, UserID, BorrowDate, ReturnDate) VALUES
(1, 1, '2021-01-01', '2021-01-15'),
(2, 2, '2021-02-01', '2021-02-15'),
(3, 3, '2021-03-01', '2021-03-15'),
(4, 4, '2021-04-01', '2021-04-15'),
(5, 5, '2021-05-01', '2021-05-15'),
(6, 6, '2021-06-01', '2021-06-15'),
(7, 7, '2021-07-01', '2021-07-15'),
(8, 8, '2021-08-01', '2021-08-15'),
(9, 9, '2021-09-14', '2021-09-30'),
(10, 10, '2021-10-05', '2021-10-20');
