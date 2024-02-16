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
('J.R.R. Tolkien', 'Author of The Lord of the Rings series.'),
('George R.R. Martin', 'Known for A Song of Ice and Fire series.'),
('Patrick Rothfuss', 'Known for The Kingkiller Chronicle series.'),
('Brandon Sanderson', 'Known for the Mistborn series and The Stormlight Archive.');

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
('The Old Man and the Sea', 10, 2, '9780684801223', 1952),
('Harry Potter and the Chamber of Secrets', 1, 6, '9781408855669', 1998),
('Harry Potter and the Prisoner of Azkaban', 1, 6, '9781408855676', 1999),
('Harry Potter and the Goblet of Fire', 1, 6, '9781408855683', 2000),
('Harry Potter and the Order of the Phoenix', 1, 6, '9781408855690', 2003),
('Harry Potter and the Half-Blood Prince', 1, 6, '9781408855706', 2005),
('Harry Potter and the Deathly Hallows', 1, 6, '9781408855713', 2007),
-- Additional books in the Fantasy category (by various authors)
('The Hobbit', 11, 6, '9780547928227', 1937), -- J.R.R. Tolkien
('The Fellowship of the Ring', 11, 6, '9780547928210', 1954), -- J.R.R. Tolkien
('A Game of Thrones', 12, 6, '9780553593716', 1996), -- George R.R. Martin
('The Name of the Wind', 13, 6, '9780756404741', 2007), -- Patrick Rothfuss
('Mistborn: The Final Empire', 14, 6, '9780765311788', 2006); -- Brandon Sanderson

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
(10, 10, '2021-10-05', '2021-10-20'),
(11, 2, '2021-11-01', NULL), -- Book still borrowed
(12, 3, '2021-11-05', NULL),
(13, 4, '2021-11-10', NULL),
(14, 5, '2021-11-15', NULL),
(15, 6, '2021-11-20', NULL),
(16, 7, '2021-11-25', NULL),
(17, 8, '2021-12-01', NULL),
(18, 9, '2021-12-05', NULL),
(19, 10, '2021-12-10', NULL),
(20, 1, '2021-12-15', NULL),
(21, 2, '2021-12-20', NULL); 
