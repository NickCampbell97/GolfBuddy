

import psycopg2

db_params = {
    'host': 'host',
    'database': 'db',
    'user': 'usr',
    'password': 'pwd',
    'port': '5432'
}

conn = psycopg2.connect(**db_params)
cursor = conn.cursor()

file = 'path/to/geocode/file'

with open(file, 'r') as f:
    rows = f.readlines()

    rows = rows[1:]

    for row in rows:
        
        parts = row.strip().split(',')
                                                                                                                             
        print(f'{parts[0]} {parts[1]} {parts[2]}')

        #if (len(parts[0]) > 0) and (len(parts[1]) > 0) and (len(parts[2]) > 0):

        zip_code = parts[0]
        lat = float(parts[1])
        lng = float(parts[2])

        insert_query = '''
        INSERT INTO geocodes (z_code, lat, lng)
        VALUES (%s, %s, %s);
        '''
        cursor.execute(insert_query, (zip_code, lat, lng))
        #else:
         #   continue

    conn.commit()

cursor.close()
conn.close()

    