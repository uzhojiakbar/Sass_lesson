// Selectors (Tanlab oluvchilar)

// ======================
// Selectors = html hujjatimizda elementlarimizni maxsus tanlab oluvchilar orqali tanlab olishdir, masalan class, id, tagname va boshqalari.
// Tanlab oluvchilar Nafaqat Sass ning balki Css ning ham asosidir

// ======================
// Sass da selectorslar css bn bir xil
// #id{}, tagname{},.classname{} va boshqalar

// ======================
// Nesting (Ichma Ich joylashtirish)
// Nesting - malum bir selektorni qayta qayta yozmasdan, bitasini ichida boshqasini yozish.

// ======================
// masalan html da bunday struktura:
    // <h1>
    //      <p>Paragraph</p>
    //      <h2>Heading</h2>
    // </h1>
// Endi, buni sass da tanlab olamiz.
    // h1{
        // p{
            // color:blue;
        // }
        // h2{
            // font-family:'sans-serif'
        // }
    // }

// 3 tadan ortiq Nesting qilish tavsiya qilinmaydi, bu loading vaqti chozilishiga olib keladi


// ======================
// Nested (selektorlar royxati)
// Nested - vergul bilan ajratilgan selectorlar
    //  .alert, .warning{
    //      ul, p{
    //          color:red;
    //      }
    //  }