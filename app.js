let friends = ['Avera', 'Brad', 'John', 'Mollie', 'Abby']

function linesOfCode(friends) {
    for (i = 0; i < friends.length; i++) {
        console.log(friends[i] + ':');
        for (a = 99; a > 0; a--) {

            if (a < 2) {
                console.log(a + " line of code in the file, " + a + " line of code; " + friends[i] + " strikes one out, clears it all out, " + (a - 1) + " lines of code in the file");
            } else {
                if ((a - 1) == 1) {
                    console.log(a + " lines of code in the file, " + a + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (a - 1) + " line of code in the file");
                } else {
                    console.log(a + " lines of code in the file, " + a + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (a - 1) + " lines of code in the file");
                }
            }
        };

    }
}
linesOfCode(friends);