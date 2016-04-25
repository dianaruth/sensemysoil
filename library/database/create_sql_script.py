result = "USE srdirtdb;\n"
result += "CREATE TABLE `srdirtdb`.`soil_data` (`idsoil_data` INT NOT NULL AUTO_INCREMENT COMMENT '', `probe` INT NULL COMMENT '', `temperature` DOUBLE NULL COMMENT '', `moisture` DOUBLE NULL COMMENT '', `reading_time` DATETIME NULL COMMENT '', PRIMARY KEY (`idsoil_data`) COMMENT '');\n"
id = 1
f = open('data.txt').read()
lines = f.split('\n')
for line in lines :
	fields = line.split(",")
	result += "INSERT INTO `soil_data` (`idsoil_data`,`probe`,`moisture`,`temperature`,`reading_time`) VALUES (" + str(id) + "," + str(fields[0]) + "," + str(fields[1]) + "," + str(fields[2]) + ",'" + str(fields[3].strip()) + "');\n"
	id += 1
print(result)

# INSERT INTO `soil_data` (`idsoil_data`,`probe`,`temperature`,`moisture`,`reading_time`) VALUES (1,1,63.88,27.84,'2014-01-01 03:30:37');
