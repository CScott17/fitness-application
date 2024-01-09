import sqlite3

def create_table():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                        username TEXT,
                        password TEXT,
                        email TEXT,
                        phone_number BIGINT
                    )''')
    connection.commit()
    connection.close()

def register_user(username, password, email, phone_number):
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("INSERT INTO users (username, password, email, phone_number) VALUES (?, ?, ?, ?)", (username, password, email, phone_number))
    connection.commit() 
    connection.close()

def login_user(username, password):
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    user = cursor.fetchone()
    connection.close()
    return user
