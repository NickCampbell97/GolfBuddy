
import csv

f_path = 'path/to/raw/csv'

with open(f_path, 'r') as f:
    reader = csv.reader(f)
    rows = list(reader)

parsed_data = []

i = 0

for row in rows:
        if len(row) > 0:

            course_info = row[2]
            course_info_parts = course_info.split('-')
            course_name = course_info_parts[0]

            address = row[3].strip()

            address_parts = [part.strip() for part in address.split(',')]

            street = address_parts[1]
            city = address_parts[2]
            state_zip = address_parts[3].split(' ')
            state = state_zip[0]

            if len(state_zip) > 1:
                zip = state_zip[1]
            else:
                 zip = 'null'

            if '-' in zip:
                zip_parts = zip.split('-')
                zip = zip_parts[0]

            if len(address_parts) > 4:
                phone = address_parts[4]
            else:
                 phone = 'null'

            parsed_data.append({
                'Course Name': course_name,
                'Street': street,
                'City': city,
                'State': state,
                'Zip': zip,
                'Phone': phone
            })

output_file_path = 'path/to/parsed/csv'

with open(output_file_path, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=['Course Name', 'Street', 'City', 'State', 'Zip', 'Phone'])
    writer.writeheader()
    
    for data in parsed_data:
        writer.writerow(data)


