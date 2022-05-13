const courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
]

const testCases = [
    [null, 200],
    [100, 350],
    [200, null],
    [null, null]
]

const filterCoursesByRange = (courses, range) => {
    switch (range[1]) {
        case null:
            return courses.filter(({prices}) => prices[0] >= range[0])
        default:
            return courses.filter(({prices}) => (prices[0] >= range[0] && prices[0] <= range[1] && prices[1] <= range[1]))
    }
}

const onShowFilteredCourses = (testCases) => {
    testCases.forEach(testCase => console.table(filterCoursesByRange(courses, testCase)))
}

onShowFilteredCourses(testCases)

