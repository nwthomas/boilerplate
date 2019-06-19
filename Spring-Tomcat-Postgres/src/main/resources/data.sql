DELETE
FROM users;

INSERT INTO users (userid, username, password, firstname, middlename, lastname, phone, email, address1, address2, city, zip)
        VALUES (1, 'admin', 'password', 'admin', 'admin', 'admin', '(708) 123-5678', 'admin@gmail.com', '456 Eastern', '', 'Napa', '12345');

alter sequence hibernate_sequence restart with 5;