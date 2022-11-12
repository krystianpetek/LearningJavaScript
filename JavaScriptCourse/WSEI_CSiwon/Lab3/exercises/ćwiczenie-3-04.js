/**
 * Korzystając z funkcji Array (filter, map) i funkcji strzałkowych zdefiniuj funkcję, która
 * na podstawie łańcucha tworzy tablicę obiektów.
 * Jeden wiersz opisuje jeden obiekt.
 * Każdy obiekt powinien przejść walidację aby
 * - pole `name` nie było null, puste, nie miało więcej niż 25 znaków
 * - pole `ects` było całkowice, nieujmne i nie większe od 200
 * - pole `active` miało wartość true lub false (w łańcuchu true to `aktywny/aktywna` a false `nieaktywny\nieaktywna`).
 * Przykład obiektu: {name: "Robert", ects: 44, active: true} 
 * Wiersze z błędnymi danymi należy pominąć (niepoprawna liczba kolumn w wierszu, niepoprawny typ, nieznana dana, niezgodność z walidacją)\
 * i nie tworzyć z nich obiektów.
 * Postaraj się robić walidację w osobnych wywołaniach `filter`.
 */

const active = ["aktywny", "aktywna", "nieaktywny", "nieaktywna"];

function parseStudents(input) {
    if (input === undefined)
        return [];

    const studentsInput = input.split("\n");
    const studentslocal = studentsInput.map(student => student.split("\t"));
    const validatedStudents = studentslocal.filter(student => {
        if (!student[0] && !student[0].length > 25) return;
        if (student[1] > 200 || student[1] < 0) return;
        if (typeof parseInt(student[1]) !== "number") {
            return;
        }
        student[1] = parseInt(student[1]);

        if (!active.includes(student[2])) {
            return;
        }

        if (student[2] === active[0] || student[2] === active[1])
            student[2] = true;
        else {
            student[2] = false;
        }
        return student;
    });
    return validatedStudents.map(student => {
        return {
            name: student[0],
            ects: student[1],
            active: student[2]
        }
    });
}
const studentLines = "Adam\t123\taktywny\nEwa\t34\tnieaktywna\nRoman\t56\taktywny\nKazik\t-34\taktyw\nBogdan\tfalse";

const students = parseStudents(studentLines);
console.log(parseStudents().length);
try {
    if (students.length == 3) {
        console.log("Test 41 passed");
    } else {
        console.log("Test 41 failed");
    }
} catch (e) {
    console.log("Test 41 failed");
}

try {
    if (students[0].name === "Adam" && students[0].ects === 123 && students[0].active === true &&
        students[1].name === "Ewa" && students[1].ects === 34 && students[1].active === false) {
        console.log("Test 42 passed");
    } else {
        console.log("Test 42 failed");
    }
} catch (e) {
    console.log("Test 42 failed");
}

try {
    if (parseStudents().length === 0) {
        console.log("Test 43 passed");
    } else {
        console.log("Test 43 failed");
    }
} catch (e) {
    console.log("Test 43 failed");
}