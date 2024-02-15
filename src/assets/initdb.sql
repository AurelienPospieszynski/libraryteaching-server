-- SQL commands to create the local database
CREATE TABLE Authors (
    AuthorID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Bio TEXT
);

CREATE TABLE Categories (
    CategoryID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT
);

CREATE TABLE Books (
    BookID SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    AuthorID INT REFERENCES Authors(AuthorID),
    CategoryID INT REFERENCES Categories(CategoryID),
    ISBN VARCHAR(50),
    PublicationYear INT
);

CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    MembershipDate DATE
);

CREATE TABLE BorrowRecords (
    RecordID SERIAL PRIMARY KEY,
    BookID INT REFERENCES Books(BookID),
    UserID INT REFERENCES Users(UserID),
    BorrowDate DATE,
    ReturnDate DATE
);
