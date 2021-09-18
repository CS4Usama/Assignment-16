        /* Program 01 */

const checkCase = () => {
    var char1 = document.getElementById("char1").value;
    if(char1 >= 'A' && char1 <= 'Z') {
        document.getElementById("ans1").innerHTML = "'" + char1 + "' is a Uppercase Alphabet.";
    } else if(char1 >= 'a' && char1 <= 'z') {
        document.getElementById("ans1").innerHTML = "'" + char1 + "' is a Lowercase Alphabet.";
    } else {
        document.getElementById("ans1").innerHTML = "Please input an Alphabet.";
    }
}



        /* Program 02 */

const printWeekDay = () => {
    var num1 = document.getElementById("num1").value;
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    document.getElementById("ans2").innerHTML = day[num1 - 1];
}



        /* Program 03 */

const printMonthDay = () => {
    var num2 = document.getElementById("num2").value;
    let month = ["January has 31 Days", "February has 28 or 29 Days", "March has 31 Days", "April has 30 Days", "May has 31 Days", "June has 30 Days", "July has 31 Days", "August has 31 Days", "September has 30 Days", "October has 31 Days", "November has 30 Days", "December has 31 Days"];
    document.getElementById("ans3").innerHTML = month[num2 - 1];
}



        /* Program 04 */

const numberOfNotes = () => {
    var amount = document.getElementById("num3").value;
    document.getElementById("ans4").innerHTML = '';
    let notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
    for (let i = 0; i < notes.length; i++) {
        if(Math.floor(amount/notes[i]) !== 0) {
            document.getElementById("ans4").innerHTML += "Notes of " + notes[i] + " are: &nbsp&nbsp" + Math.floor(amount/notes[i]) + "</br>";
        }   // &nbsp or &#160 is a 'Non-Breakable Space' Escape Character
        amount %= notes[i];
    }
}



        /* Program 05 */

const trianlgeValidity = () => {
    var angle1 = parseInt(document.getElementById("angle1").value);
    var angle2 = parseInt(document.getElementById("angle2").value);
    var angle3 = parseInt(document.getElementById("angle3").value);
    if(angle1 > 0 && angle2 > 0 && angle3 > 0) {
        if(angle1 + angle2 + angle3 === 180) {
            // A triangle is valid if sum of its three angles is equal to 180
            document.getElementById("ans5").innerHTML = "Valid Triangle";
        } else {
            document.getElementById("ans5").innerHTML = "Invalid Triangle";
        }
    } else {
        document.getElementById("ans5").innerHTML = "Invalid Triangle! Angles are Less than or Equal to 0";
    }
}



        /* Program 06 */

const trianlgeValidity2 = () => {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    /*Here we can not choose greater than option because one condition out of three will be ever true.
    So, we have to choose less than option. So that, any condition out of three will be true, our logic is true.
    Both are the same but their ORing logic is different from each other.*/
    if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        // A triangle is valid if sum of its any two sides is greater than third side
        document.getElementById("ans6").innerHTML = "Invalid Triangle";
    } else {
        document.getElementById("ans6").innerHTML = "Valid Triangle";
    }
}



        /* Program 07 */

const checkTriangleType = () => {
    var side4 = parseInt(document.getElementById("side4").value);
    var side5 = parseInt(document.getElementById("side5").value);
    var side6 = parseInt(document.getElementById("side6").value);
    // An equilateral Triangle is a triangle whose all three sides are equal.
    // Isosceles Triangle is a triangle if any of its two sides are equal.
    // Scalene Triangle is a triangle if none of its sides is equal.
    if(side4 === side5 && side5 === side6) {
        document.getElementById("ans7").innerHTML = "Equilateral Triangle";
    } else if(side4 === side5 || side5 === side6 || side6 === side4) {
        document.getElementById("ans7").innerHTML = "Isoceles Triangle";
    } else {
        document.getElementById("ans7").innerHTML = "Scalene Triangle";
    }
}



        /* Program 08 */

const quadraticRoots = () => {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    let root1, root2;
    let discrimnant = (b*b) - (4*a*c);
    // Condition for Real and Different Roots
    if(discrimnant > 0) {
        root1 = (-b + Math.sqrt(discrimnant)) / (2*a);
        root2 = (-b - Math.sqrt(discrimnant)) / (2*a);
        document.getElementById("ans8").innerHTML = `The Roots of Quadratic Equation are ${root1} and ${root2}`;
    } else if(discrimnant == 0) {   // Condition for Real and Equal Roots
        root1 = root2 = -b / (2*a);
        document.getElementById("ans8").innerHTML = `The Roots of Quadratic Equation are ${root1} and ${root2}`;
    } else {    // If Roots are not Equal
        let realPart = (-b / (2*a)).toFixed(2);
        let imagPart = (Math.sqrt(-discrimnant) / (2*a)).toFixed(2);
        document.getElementById("ans8").innerHTML = `The Roots of Quadratic Equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }
}



        /* Program 09 */

const profitOrLoss = () => {
    var costPrice = document.getElementById("costPrice").value;
    var sellPrice = document.getElementById("sellPrice").value;
    let amount = sellPrice - costPrice;
    if(amount > 0) {
        document.getElementById("ans9").innerHTML = "Profit: &nbsp Rs. " + amount;
    } else if (amount < 0) {
        amount = Math.abs(amount);  // Convert Negative value into Positive one (Absolute Value or Modulus)
        /* amount *= -1;   // Another Method to Convert Negative value into Positive one */
        document.getElementById("ans9").innerHTML = "Loss: &nbsp Rs. " + amount;
    } else {
        document.getElementById("ans9").innerHTML = "No Profit nor Loss";
    }
}



        /* Program 10 */

const charOccurrence = () => {
    var str = document.getElementById("str").value;
    var char2 = document.getElementById("char2").value;
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === char2) {
            let pos = i;    // Here we used a separate variable. So that, loop cycles didn't disturb
            arr.push(' '+ ++pos);   // Here we have pushed prefix increment position not index. Because a layman does not know about index
        }
    }
    if(arr.length === 0) {
        document.getElementById("ans10").innerHTML = `'${char2}' Occurrence not Found in Your String.`;
    } else {
        document.getElementById("ans10").innerHTML = `Occurrence of '${char2}' found at these Positions: &nbsp ${arr}`;
    }
}



        /* Program 11 */

const countOccurrence = () => {
    var str2 = document.getElementById("str2").value;
    var char3 = document.getElementById("char3").value;
    let count = 0;
    //indexOf Logic can also be used here...
    for(let i = 0; i < str2.length; i++) {
        if(str2.charAt(i) === char3) {
            count++;    // count total occurrences
        }
    }
    if(count === 0) {
        document.getElementById("ans11").innerHTML = `'${char3}' not Found in Your String.`;
    } else {
        document.getElementById("ans11").innerHTML = `Total Occurrence of '${char3}' are: &nbsp ${count}`;
    }
}



        /* Program 12 */

const highFrequencyChar = () => {
    var str3 = document.getElementById("str3").value;
    var max = 0, maxChar = '';
    //Find Highest Frequency Character and its Frequency
    str3.split('').forEach(function(char) {
        if(char !== ' ') {  //ignore spaces
            if(str3.split(char).length > max) {
                // 'str3.split(char).length' gives the splitted character length with one additional unnecessary length. So, we will decrement one from total length to stable it.
                max = str3.split(char).length - 1;
                maxChar = char;
            }
        }
    });

    // /*Another Method to Find Highest Frequency Character and its Frequency*/
    // for(let i=0; i<str3.length; i++) {
    //     if(str3[i] !== ' ') {
    //         if(str3.split(str3[i]).length > max) {
    //             max = str3.split(str3[i]).length - 1;
    //             maxChar = str3[i];
    //         }
    //     }
    // }

    //Find All other same Highest Frequency Characters
    for (let i = 0; i < str3.length; i++) {
        if(str3.split(str3[i]).length == max+1) {
            // maxChar = `${maxChar}${str3[i]}`;
            maxChar += str3[i];
        }
    }
    //Remove Repeated Characters
    let freqArr = [];
    for(let i = 0; i < maxChar.length; i++) {
        if(freqArr.indexOf(maxChar[i]) === -1) {
            /*freqArr is an empty array. So, if we find an index of a character it will return -1. When the first occurrence of the character
            is already pushed then it will not return -1 and if-condition will be false. Using this logic, we can remove repeated characters.*/
            freqArr.push(maxChar[i]);
        }
    }
    if(max === 1) {     //if All Characters are Repeated only once
        document.getElementById("ans12").innerHTML = "No Highest Frequency Character Found.";
    } else {
        document.getElementById("ans12").innerHTML = `Highest Frequency Characters of the String: &nbsp ${freqArr} </br> Its Frequency is: &nbsp ${max}`;
    }
}



        /* Program 13 */

const lowFrequencyChar = () => {
    var str4 = document.getElementById("str4").value;
    var min = 100, minChar = '';
    //Find Lowest Frequency Character and its Frequency
    str4.split('').forEach(function(chr) {
        if(chr !== ' ') {  //ignore spaces
            if(str4.split(chr).length < min) {
                min = str4.split(chr).length;
                minChar = chr;
            }
        }
    });

    //Find All other same Lowest Frequency Characters
    for (let i = 0; i < str4.length; i++) {
        if(str4.split(str4[i]).length == min) {
            minChar = `${minChar}${str4[i]}`;
            // minChar += str4[i];
        }
    }
    //Remove Repeated Characters
    let freqArr2 = [];
    for(let i = 0; i < minChar.length; i++) {
        if(freqArr2.indexOf(minChar[i]) === -1) {
            /*freqArr2 is an empty array. So, if we find an index of a character it will return -1. When the first occurrence of the character
            is already pushed then it will not return -1 and if-condition will be false because it will return those character's indexes.
            Using this logic, we can remove repeated characters.*/
            freqArr2.push(minChar[i]);
        }
    }
    // 'str3.split(char).length' gives the splitted character length with one additional unnecessary length. So, we will decrement one from total length to stable it.
    --min;
    document.getElementById("ans13").innerHTML = `Lowest Frequency Characters of the String: &nbsp ${freqArr2} </br> Its Frequency is: &nbsp ${min}`;
}



        /* Program 14 */

const eachCharOccurrence = () => {
    var str5 = document.getElementById("str5").value;
    let obj = {};  //an empty object
    str5.replace(/\S/g, function(e){obj[e] = (isNaN(obj[e]) ? 1 : obj[e] + 1);});
    // '/\S/g' will replace all Whitespaces and 'JSON.stringify()' will convert Object into String to display on webpage

    /* 2nd Solution:
    let onlyLetters = str5.replace(/[^a-zA-Z0-9]+/g,'');    //to delete all non letter symbols
    onlyLetters.split('').forEach((e) => obj[e] = obj[e] ? obj[e] + 1 : 1); */
    
    /* 3rd Solution:
    str5.replace(/\W/g, '').split('').forEach((e) => obj[e] = isNaN(obj[e]) ? 1 : obj[e] + 1); */
    
    obj = JSON.stringify(obj).replace(/,/g, ', &nbsp ');    //add spaces after one character set
    
    document.getElementById("ans14").innerHTML = obj;
}



        /* Program 15 */

const remove1stOccurrence = () => {
    var str6 = document.getElementById("str6").value;
    var char4 = document.getElementById("char4").value;
    let newStr1 = str6.replace(char4, '');
    if(newStr1 === str6) {
        document.getElementById("ans15").innerHTML = `Character '${char4}' is not found in your string.`;
    } else {
        document.getElementById("ans15").innerHTML = `First occurrence of '${char4}' is removed from string. Now, your string is:</br>"${newStr1}"`;
    }
}



        /* Program 16 */

const removeLastOccurrence = () => {
    var str7 = document.getElementById("str7").value;
    var char5 = document.getElementById("char5").value;
    let splitStr1 = str7.split("");     //split() will return an array
    splitStr1[str7.lastIndexOf(char5)] = '';     //replace the index of str7's last occurrence of char5 with null
    let newStr2 = splitStr1.join("");
    if(newStr2 === str7) {
        document.getElementById("ans16").innerHTML = `Character '${char5}' is not found in your string.`;
    } else {
        document.getElementById("ans16").innerHTML = `Last occurrence of '${char5}' is removed from string. Now, your string is:</br>"${newStr2}"`;
    }
}



        /* Program 17 */

const removeAllOccurrence = () => {
    var str8 = document.getElementById("str8").value;
    var char6 = document.getElementById("char6").value;
    let newStr3 = str8.split(char6).join('');
    if(newStr3 === str8) {
        document.getElementById("ans17").innerHTML = `Character '${char6}' is not found in your string.`;
    } else {
        document.getElementById("ans17").innerHTML = `All Occurrences of '${char6}' are removed from string. Now, your string is:</br>"${newStr3}"`;
    }
}



        /* Program 18 */

const removeRepeatedChar = () => {
    var str9 = document.getElementById("str9").value;
    let newStr4 = '';
    for(let i = 0; i < str9.length; i++) {
        if(newStr4.indexOf(str9[i]) === -1 || str9[i] === ' ') {
            /*newStr4 is an empty string. So, if we find an index of a character it will return -1. When the first occurrence of the character
            is already present in it then it will not return -1 and if-condition will be false because it will return those character's indexes.
            Using this logic, we can remove repeated characters. But we don't want to remove spaces. So, we will concatenate spaces as it is.*/
            newStr4 += str9[i];
        }
    }
    document.getElementById("ans18").innerHTML = newStr4;
}



        /* Program 19 */

const replace1stOccurrence = () => {
    var str10 = document.getElementById("str10").value;
    var char7 = document.getElementById("char7").value;
    var char8 = document.getElementById("char8").value;
    let newStr5 = str10.replace(char7, char8);
    if(newStr5 === str10) {
        document.getElementById("ans19").innerHTML = `Character '${char7}' is not found in your string.`;
    } else {
        document.getElementById("ans19").innerHTML = `First occurrence of '${char7}' is replaced with '${char8}' character. Now, your string is:</br>"${newStr5}"`;
    }
}



        /* Program 20 */

const replaceLastOccurrence = () => {
    var str11 = document.getElementById("str11").value;
    var char9 = document.getElementById("char9").value;
    var char10 = document.getElementById("char10").value;
    let splitStr2 = str11.split("");
    splitStr2[str11.lastIndexOf(char9)] = char10;     //replace the index of str11's last occurrence of char9 with char10
    let newStr4 = splitStr2.join("");
    if(newStr4 === str11) {
        document.getElementById("ans20").innerHTML = `Character '${char9}' is not found in your string.`;
    } else {
        document.getElementById("ans20").innerHTML = `Last occurrence of '${char9}' is replaced with '${char10}'. Now, your string is:</br>"${newStr4}"`;
    }
}



        /* Program 21 */

const replaceAllOccurrence = () => {
    var str12 = document.getElementById("str12").value;
    var char11 = document.getElementById("char11").value;
    var char12 = document.getElementById("char12").value;
    let newStr5 = str12.split(char11).join(char12);
    if(newStr5 === str12) {
        document.getElementById("ans21").innerHTML = `Character '${char11}' is not found in your string.`;
    } else {
        document.getElementById("ans21").innerHTML = `All Occurrences of '${char11}' are replaced with '${char12}'. Now, your string is:</br>"${newStr5}"`;
    }
}



        /* Program 22 */

const word1stOccurrence = () => {
    var str13 = document.getElementById("str13").value;
    var word1 = document.getElementById("word1").value;
    let wordIndex1 = str13.indexOf(word1);
    if(wordIndex1 === -1) {
        document.getElementById("ans22").innerHTML = `'${word1}' is not found in your string.`;
    } else {
        ++wordIndex1;   //we display position not index because a layman doesn't have knowledge about index
        document.getElementById("ans22").innerHTML = `'${word1}' is found at position: &nbsp ${wordIndex1}`;
    }
}



        /* Program 23 */

const wordLastOccurrence = () => {
    var str14 = document.getElementById("str14").value;
    var word2 = document.getElementById("word2").value;
    let wordIndex2 = str14.lastIndexOf(word2);
    if(wordIndex2 === -1) {
        document.getElementById("ans23").innerHTML = `'${word2}' is not found in your string.`;
    } else {
        ++wordIndex2;   //we display position not index because a layman doesn't have knowledge about index
        document.getElementById("ans23").innerHTML = `'${word2}' is found at position: &nbsp ${wordIndex2}`;
    }
}



        /* Program 24 */

const wordAllOccurrences = () => {
    var str15 = document.getElementById("str15").value;
    var word3 = document.getElementById("word3").value;
    let wordIndex3, newIndex, arr2 = [];
    wordIndex3 = newIndex = 0;
    for (let i = 0; i < str15.length; i++) {
        wordIndex3 = str15.indexOf(word3, newIndex);    //we will find the first index of word3 at newIndex which is 0 at the first cycle
        if(wordIndex3 !== -1) {     //if index is found (return -1 in case of index not found), we will push it into arr2
            arr2.push(' '+ ++wordIndex3);   //we display position not index because a layman doesn't have knowledge about index
        } if(wordIndex3 > 0) {      //if index is found using indexOf method then it will be >0 because it will return word3 index and changes newIndex to 'index at which first occurrence of word3 ends'
            newIndex =  wordIndex3 + word3.length;
        }
    }
    if(arr2.length === 0) {
        document.getElementById("ans24").innerHTML = `'${word3}' is not Found in Your String.`;
    } else {
        document.getElementById("ans24").innerHTML = `'${word3}' found at these Positions: &nbsp ${arr2}`;
    }
}



        /* Program 25 */

const countWordOccurrences = () => {
    var str16 = document.getElementById("str16").value;
    var word4 = document.getElementById("word4").value;
    let wordCount = str16.split(word4).length - 1;  //split() returns splitted-substrings which is one more from the total split's occurrence (length). So, to stable it we will decrement 1 from it.
    if(word4 === '') {
        document.getElementById("ans25").innerHTML = `Please enter a word to count its occurrences.`;
    } else if(wordCount === 0) {
        document.getElementById("ans25").innerHTML = `'${word4}' is not found in your string.`;
    } else {
        document.getElementById("ans25").innerHTML = `Total occurrences of '${word4}' is: &nbsp ${wordCount}`;
    }
}



        /* Program 26 */

const removeWord_1stOccurrence = () => {
    var str17 = document.getElementById("str17").value;
    var word5 = document.getElementById("word5").value;
    let newStr6 = str17.replace(word5, '');
    if(newStr6 === str17) {
        document.getElementById("ans26").innerHTML = `'${word5}' is not found in your string.`;
    } else {
        document.getElementById("ans26").innerHTML = `First occurrence of '${word5}' is removed from string. Now, your string is:</br>"${newStr6}"`;
    }
}



        /* Program 27 */

const removeWord_LastOccurrence = () => {
    var str18 = document.getElementById("str18").value;
    var word6 = document.getElementById("word6").value;
    let splitStr3 = str18.split(" ").reverse().join(" ");
    let newStr7 = splitStr3.replace(word6, '').split(' ').reverse().join(' ');
    if(newStr7 === str18) {
        document.getElementById("ans27").innerHTML = `'${word6}' is not found in your string.`;
    } else {
        document.getElementById("ans27").innerHTML = `Last occurrence of '${word6}' is removed from string. Now, your string is:</br>"${newStr7}"`;
    }
}



        /* Program 28 */
    
const removeAll_wordOccurrences = () => {
    var str19 = document.getElementById("str19").value;
    var word7 = document.getElementById("word7").value;
    let newStr8 = str19.split(word7).join("");
    if(newStr8 === str19) {
        document.getElementById("ans28").innerHTML = `'${word7}' is not found in your string.`;
    } else {
        document.getElementById("ans28").innerHTML = `All occurrences of '${word7}' is removed from string. Now, your string is:</br>"${newStr8}"`;
    }
}



        /* Program 29 */
    
const trimLeading_whiteSpace = () => {
    var str20 = document.getElementById("str20").value;
    let trimLead = str20.replace(/^\s+/g, '');  //leading string (left-sided), ^ means at the beginning of string, + means (at least one)
    // let trimLead = str20.trimLeft();     //Another Method to trim leading white space
    document.getElementById("ans29").innerHTML = `String after trimming leading white space:</br> "${trimLead}"`;
}



        /* Program 30 */
    
const trimTrailing_whiteSpace = () => {
    var str21 = document.getElementById("str21").value;
    let trimTrail = str21.replace(/<br>+$|[</br>]+$/g, '').replace(/\s+$/g, '');  //trailing string (right-sided), + means (at least one), $ means at the end of string
    // let trimTrail = str21.replace(/<br>$|[</br>]+$/g, '').trimRight();     //Another Method to trim trailing white space
    document.getElementById("ans30").innerHTML = `String after trimming trailing white space:</br> "${trimTrail}"`;
}



        /* Program 31 */

const trim_whiteSpaces = () => {
    var str22 = document.getElementById("str22").value;
    let trimLT = str22.replace(/&nbsp|<br>|[</br>]/g, '').replace(/^\s+|\s+$/g, '');  //+ means (at least one), $ means at the end of string, | means inclusive OR (if any of them or All True = TRUE)
    // let trimLT = str22.replace(/&nbsp|<br>|[</br>]|/g, '').trim();     //Another method to trim both leading and trailing white spaces
    
    //We will remove simple spaces given by keyboard at the end of tags. Because in the beginning of tags replacement, they would not removed.
    document.getElementById("ans31").innerHTML = `String after trimming both leading and trailing white spaces:</br> "${trimLT}"`;
}



        /* Program 32 */

const removeExtra_blankSpaces = () => {
    var str23 = document.getElementById("str23").value;
    let ans32 = str23.replace(/\s+/g, ' ');
    // let ans32 = str23.replace(/\s+/g, ' ').trim();
    // let ans32 = str23.replace(/\s{2,}/g, ' ').trim();    {2,} shows 2 or 2+ spaces
    document.getElementById("ans32").innerHTML = `${ans32}`;
}



/* Program 33 */

const countFreqOfArray = () => {
    let arr = ['Usama', 'Pakistan', 'Usama', 5, 'Usama', 'Pakistan'];
    let obj = {};
    arr.forEach((elem) => {
        let count = 0;
        arr.forEach((elem2) => {
            if(elem == elem2) {
                count++;
            }
        });
        obj[elem] = count;
    });
    let ans33 = JSON.stringify(obj);    //Object can't be displayed at document screen. So, we have to convert it into a string.
    document.getElementById('ans33').innerHTML = `${ans33}`;
}



/* Program 34 */

const uniqueElementsOfArray = () => {
    let arr = ['Usama', 'Pakistan', 'Usama', 5, 'Usama', 'Pakistan'];
    let newArr = [];
    arr.forEach((elem) => {
        let count = 0;
        arr.forEach((elem2) => {
            if(elem == elem2) {
                count++;
            }
        });
        if(count == 1) {
            newArr.push(elem)
        }
    });
    document.getElementById('ans34').innerHTML = `Unique Elements in the Array: &nbsp ${newArr}`;

    // let ans34 = [...new Set(arr)];
    // document.getElementById('ans34').innerHTML = `Unique Elements in the Array: &nbsp ${ans34}`;
}



/* Program 35 */

const countDuplicateElementsInArray = () => {
    let arr = ['Usama', 'Pakistan', 'Usama', 5, 'Usama', 'Pakistan'];
    let obj = {};
    dupElem = 0;
    arr.forEach(function(x) {
        obj[x] = (obj[x] || 0) + 1;
    });
    
    for (var key in obj) {
        if(obj.hasOwnProperty(key)) {
            obj[key] > 1 ? dupElem++ : dupElem;
        }
    }
    return document.getElementById('ans35').innerHTML = `Total Number of Duplicate Elements in the Array: &nbsp ${dupElem}`;
    
    /* To find the Duplicate Values, We just need to Reverse the Condition # 2 of Program 36 */
    // let dupElem = arr.filter((elem, index) => {
    //     return arr.indexOf(elem) !== index;
    // });
    // console.log(dupElem);
}



/* Program 36 */

const delDupElemFromArray = () => {
    let arr = ['Usama', 'Pakistan', 'Usama', 5, 'Usama', 'Pakistan'];

    /* 1. using Set Method */
    let ans36 = [...new Set(arr)];

    /* 2. using indexOf() and filter() Method */
    // let ans36 = arr.filter((elem, index) => {
    //     return arr.indexOf(elem) === index;
    // });

    /* 3. using forEach() and include() Method */
    // let ans36 = [];
    // arr.forEach((elem) => {
    //     if(!ans36.includes(elem)) {
    //         ans36.push(elem);
    //     }
    // });

    document.getElementById('ans36').innerHTML = `After Deleting Duplicate Elements from Array: &nbsp ${ans36}`;
}



/* Program 37 */

const mergeTwoArrays = () => {
    let arr1 = ['Usama', 'Pakistan', 21];
    let arr2 = ['BSCS', 5, 'Semester', false];
    // let mergedArr = arr1.concat(arr2);
    let mergedArr = [...arr1, ...arr2];
    document.getElementById('ans37').innerHTML = `After Merging Two Arrays into Third Array: &nbsp ${mergedArr}`;
}



/* Program 38 */

const reverseArray = () => {
    let arr = ['BSCS', 5, 'Semester', false];
    let revArr = [];

    // revArr = arr.reverse();
    
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     revArr.push(arr[i]);
    //     console.log(arr[i]);
    // }

    document.getElementById('ans38').innerHTML = `: &nbsp ${revArr}`;
}