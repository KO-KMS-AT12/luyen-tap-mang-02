function bai1(arr) {
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        console.log("i:" + i);
        document.write("row " + i + "<br>");
        for (let j = 0; j < arr.length - 1; j++) {
            document.write(arr[i][j] + "<br>");
        }
    }
}

// bai1([
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ]);

// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự  {'c', 's', 'c', '2', '6', '1'}
// sau khi thực hiện đảo ngược sẽ là "162csc"
function bai2(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = tmp;
    }
    return document.write(arr.join(''))

}

// bai2(['c', 's', 'c', '2', '6', '1']);
//Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng.
// Chương trình này đếm số ký tự số trong mảng.

function bai3(arr) {
    // return arr.reduce(function (count, word) {
    //     console.log('Dem:', count);
    //     return count[word] = ++count[word] || 1, count;
    // }, {});

    var a = [], b = [], key;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        key = arr[i];
    }

    return document.write("[ " + a + " ] so lan xuat hien lan luot la [ " + b + " ]");

}

// bai3(['a', 'b', 'a', 'c', 'a', 'b']);

//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
function bai4(str) {
    var soKhoangTrang = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (str[i - 1] != null && str[i + 1] != null)
                soKhoangTrang++;
        }
    }
    let soTu = soKhoangTrang + 1
    return document.write("Chuoi co " + soTu + " tu");
}

// bai4(" Hello how are you ");

//Bài 5: Viết một chương trình nhập vào 2 chuỗi,
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
function bai5(str1, str2) {
    if (str1 === str2) document.write("hai chuoi '" + str1 + "' va '" + str2 + "' giong nhau");
    else
        document.write("hai chuoi '" + str1 + "' va '   " + str2 + "' khong giong nhau");
}

// bai5("hello", "Hello")
// Bài 6: Viết chương trình nhập vào một mảng ký tự,
// tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
function bai6(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "-") {
            arr[i] = "_";
        }
    }
    document.write(arr);
}

// bai6(['a', 'b', '-', 'c', 'd', '-', 'e']);
