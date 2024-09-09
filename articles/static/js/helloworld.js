var groupmates = [
 {
 "name": "Александр",
 "surname": "Иванов",
 "group": "БВТ1702",
 "marks": [4, 3, 5]
 },
 {
 "name": "Иван",
 "surname": "Петров",
 "group": "БСТ1702",
 "marks": [4, 4, 4]
 },
 {
 "name": "Кирилл",
 "surname": "Смирнов",
 "group": "БАП1801",
 "marks": [5, 5, 5]
 }
];
var rpad = function(str, length) {
// js не поддерживает добавление нужного количества символов
// справа от строки, т.е. аналога ljust из Python здесь нет
	str = str.toString(); // преобразование в строку
	while (str.length < length)
		str = str + ' '; // добавление пробела в конец строки
	return str; // когда все пробелы добавлены, возвратить строку
};
var printStudents = function(students){
	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
);
// был выведен заголовок таблицы
	for (var i = 0; i<=students.length-1; i++){
// в цикле выводится каждый экземпляр студента
	console.log(
		rpad(students[i]['name'], 15),
		rpad(students[i]['surname'], 15),
		rpad(students[i]['group'], 8),
		rpad(students[i]['marks'], 20)
);
}
	console.log('\n'); // добавляется пустая строка в конце вывода
};
printStudents(groupmates);
var printGroupFilter = function(students, group){
	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
);
	for (var i = 0; i<=students.length-1; i++){
		if (students[i]['group'] == group){
			console.log(
						rpad(students[i]['name'], 15),
						rpad(students[i]['surname'], 15),
						rpad(students[i]['group'], 8),
						rpad(students[i]['marks'], 20)
			);
		}
		
	}
	console.log('\n');
};

var printMarkFilter = function(students, mark){
	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
);
	for (var i = 0; i<=students.length-1; i++){
		midmark = 0;
		for (var j = 0; j<=(students[i]['marks'].length-1); j++){
			midmark = midmark + students[i]['marks'][j]
			}
		midmark = midmark/j
		if (midmark >= mark){
			console.log(
						rpad(students[i]['name'], 15),
						rpad(students[i]['surname'], 15),
						rpad(students[i]['group'], 8),
						rpad(students[i]['marks'], 20)
			);
		console.log(midmark)
		}
		
	}
	console.log('\n');
};