# outputs a csv file compatible with the sensemysoil project

import random
from datetime import datetime, timedelta

startdate = "2014-01-01 00:00:00"
enddate = "2016-03-31 00:00:00"

id = 1
result = '"idsoil_data";"probe";"temperature";"moisture";"salinity";"reading_time"\n'
date = datetime.strptime(startdate, "%Y-%m-%d %H:%M:%S")
while date < datetime.strptime(enddate, "%Y-%m-%d %H:%M:%S") :
    date = date + timedelta(hours=random.randint(0, 10), minutes=random.randint(0, 60), seconds=random.randint(0, 60))
    for probe in range(1, 5) :
        result += str(id) + ';' + str(probe) + ';' + str(round(random.uniform(30, 90), 2)) + ';' + str(round(random.uniform(25, 45), 2)) + ';' + str(round(random.uniform(55, 75), 2)) + ';"' + str(date) + '"\n'
        id += 1
print(result)