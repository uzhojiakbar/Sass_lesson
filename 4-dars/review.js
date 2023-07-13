// ==================
// variables (o'zgaruvchilar)
// variables - juda oddiy shunchaki $ dan malum bir nom va qiymat bersak boldi
    // lekin oddiy bolmasiga qaramasdan ancha murakkab va foydali ishlarni qilsak boladi
    // code takrorlanishi oldini olishimiz, murakkab matematik ammalar bajarlishi va boshqalari
    // Masalan:

    // $main - color: #122348;
    // $second - color: white;

    // body {
    //     background - color: $main - color;
    //     h1{
    //         color: $second - color;
    //     }
    // }

// ==================
// scope {}
// Agar biz sass fayli tepada yani har qanday scope {} lar dan tashqarida ozgaruvchi yaratsak u ozgaruvchi global boladi, yani istalgan joyda foydalanishi mumkin (global variable)
    // lekin agar scope lar ichida elon qilsak unda faqat osha scope ichida ishlaydi (local variable)

    // $global-var: red;

    // h1 {
    //     $local-var: blue;
    //     color: $local -var ;
    // }

// ==================
// Shadowing
// Agar global va local variable nomi bir xil bolib qolsa nima boladi?
// Shadowing - Agar global va local variable nomi bir xil bolib qolsa scope ichida local variable ishlaydi, tashqarisida esa global var ishlaydi

    // $var: green;

    // p {
    //     $var: red;
    //     background - color: $var;
    // }

    // h1 {
    //     background - color: $var;
    // }