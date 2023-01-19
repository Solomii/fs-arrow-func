// "use strict";

// !!!!arrow

// const site = {
//     title: "my site",
//     headers: ["Header1", "About", "Contact"],
//     showHeader: function () {
//         this.headers.forEach((header) => {
//             console.log(this);
//             // console.log(header)
//             console.log(this.title, "|", header);
//         });
//     },
// };

// site.showHeader();

// !!!!"костиль" this in variable

// const site = {
//     title: "my site",
//     headers: ["Header1", "About", "Contact"],
//     showHeader: function () {
//       const self = this;
//         this.headers.forEach(function(header) {
//             console.log(self);
//             // console.log(header)
//             console.log(self.title, "|", header);
//         });
//     },
// };

// !!!!!! поширений метод передачі this  через function declaration, thisArgs in methods array;

// const site = {
//   title: "my site",
//   headers: ["Header1", "About", "Contact"],
//   showHeader: function () {
//       // this.headers.forEach(function(header) {
//       //     console.log(this);
//       //     // console.log(header)
//       //     console.log(this.title, "|", header);
//       // },this);
//       this.headers.forEach(logHeader,this);
//   },
// };

// function logHeader(header) {
//   console.log(this)
//   console.log(this.title, "|", header);
// }

// bind and use strict

// "use strict";
// const obj = {
//     title: "123",
// };

// const site = {
//     title: "my site",
//     headers: ["Header1", "About", "Contact", "Second title"],
//     // showHeader: function () {
//     //     this.headers.forEach(logHeader.bind(this));
//     // },
//     showHeader: function () {
//       this.headers.forEach(logHeader.bind(obj));
//   },
// };

// function logHeader(header) {
//     console.log(this.title, "|", header);
// }
// site.showHeader();
