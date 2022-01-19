const findTheOldest = function(people) {
    const sorted = people.sort( (p1, p2) => {
        const currentYear = new Date().getFullYear();
        const p1Age = ("yearOfDeath" in p1) ? p1.yearOfDeath - p1.yearOfBirth : currentYear - p1.yearOfBirth;
        const p2Age = ("yearOfDeath" in p2) ? p2.yearOfDeath - p2.yearOfBirth : currentYear - p2.yearOfBirth;
        if (p1Age > p2Age) {
            return -1;
        }
        return 1;
    });
    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
