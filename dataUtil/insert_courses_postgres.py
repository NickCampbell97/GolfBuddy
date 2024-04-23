
import csv
import psycopg2

db_params = {
    'host': '/var/run/postgresql',
    'database': 'nick',
    'user': 'nick',
    'password': 'SweetPotato99!',
    'port': '5432'
}

conn = psycopg2.connect(**db_params)
cursor = conn.cursor()

csv_file = '/home/nick/Documents/parsed_golf_courses.csv'

with open(csv_file, mode='r') as file:
    reader = csv.reader(file)
    next(reader)
    
    for row in reader:
        course_name = row[0]
        street = row[1]
        city = row[2]
        state = row[3]
        zip = row[4]
        phone = row[5]
        if ((len(course_name) < 100) and (len(street) < 100) and (len(city) < 60) and (len(state) < 3) and (len(zip) < 6) and (len(phone) < 25)):
            insert_query = '''
            INSERT INTO courses (c_name, c_street, c_city, c_state, c_zip, c_phone_num)
            VALUES (%s, %s, %s, %s, %s, %s);
            '''
            cursor.execute(insert_query, (course_name, street, city, state, zip, phone))
        else:
            continue

    conn.commit()

cursor.close()
conn.close()