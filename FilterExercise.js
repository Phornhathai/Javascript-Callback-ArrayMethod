// Challenge: Filter Exercise
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).

// มาฝึกใช้ filter กัน เขียน function (ฟังก์ชัน) ชื่อ validUserNames ที่รับ array username ของผู้ใช้ (string)


const validUserNames = username => {
    let result = username.filter((username) => username.length < 10)
    return console.log(result);
}
// function ควรส่งคืน array ใหม่ที่ประกอบด้วยชื่อผู้ใช้ที่มีความยาวน้อยกว่า 10 อักขระเท่านั้น

validUserNames(['mark', 'staceysmom1978', 
'q29832128238983', 'carrie98', 'MoanaFan']);



// ​
// // => ["mark", "carrie98", "MoanaFan"]
// Note: 

// The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

// Syntax โซลูชันนี้อาจแปลกเล็กน้อยสำหรับคุณ ณ จุดนี้ในหลักสูตร เนื่องจากคุณต้องเขียนโค้ดที่คุณเพิ่งเรียนรู้ในการบรรยายภายในครั้งก่อน เช่น

// function validUserNames(usernames) {
//   // your code here
// }
// หรือถ้าคุณต้องการใช้ arrow function:
// const validUserNames = usernames => // your code here;