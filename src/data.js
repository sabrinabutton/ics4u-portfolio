import oscRho from "./osc-rho.PNG";
import metaballs from "./metaballs.JPG";

export const PROJECTS = [
    {
        title: "Oscillating Rhodonea",
        image: oscRho,
        desc: "This is a refactoring of The Coding Train’s Coding Challenge: Mathematical Rose Patterns. It uses the knowledge gained in the Natural Simulations course on Khan Academy in order to oscillate the constant used to calculate the polar coordinate of the current rose point. The constant, called k, is calculated by dividing a numerator by a denominator. This program oscillates the value of the denominator. This creates an interesting effect in which the rose, or rhodonea, cycles through a variety of forms with different numbers of petals. This project solidified both my understanding of the specified coding challenge and allowed me to utilize what I had already learned in the course in my own unique way.",
        link: "https://github.com/sabrinabutton/oscillating-rhodonea",
        link_title: "Oscillating Rhodonea Repository on Github"
    },
    {
        title: "Alternate Coding Challenge Refactoring",
        image: metaballs,
        desc: "This is an algorithm that produces n-dimesional objects by changing the color of the ball as you leave the core. I changed the algorithm so that it uses RGB instead of HSL to calculate this color. I also added a random function to multiply each factor in the square root function that finds the denominator that later allows us to calculate the 'sum'. This makes the metaballs seem sparkly.",
        link: "https://github.com/sabrinabutton/ics4u-coding-challenges/tree/master/sparklingMetaballs",
        link_title: "Folder on Github"
    }
];

export const TOP_TEN = [
    {
        title: "Natural Simulations",
        desc:"The Natural Simulations module on Khan Academy allowed me to realize how computer science is so greatly connected to math, and how nature can be simulated via mathematical functions. Previously, I had coded in a manner that was majoritively logic-based. The use of equations in the course, in combination with the logic I had already mastered, opened me up to a whole new way of learning. I now can understand the crossroads between logic and math, and further how an algorithm uses the two to accomplish something. I will continue to use this combination of concepts in my learning going forward, in both mathematics and sciences.",
        link: "https://www.khanacademy.org/computer-programming/spin-off-of-project-creature-colonies/5299226868154368",
        link_title: "Featured Project: Creature Colonies"
    },
    {
        title: "Algorithms",
        desc: "This course allowed me to realize how everything we do in life is controlled by an algorithm: a set of instructions. In further learning, I will apply this concept of “a set of steps” to my work in a conscious manner, in order to get things done in an efficient and sensical way. Previous to taking this KA course, I had some knowledge of algorithms, specifically the breadth-first-search, but did not have a super solid grasp of the idea behind it. This course not only broadened the number of standard algorithms I know of, but also made me more comfortable with the idea and logical flow of algorithms, which I will now be able to implement into my own unique code. ",
        link: "https://www.khanacademy.org/computer-science/spin-off-of-project-recursive-art/6611546316439552",
        link_title: "Featured Project: Recursive Art"
    },
    {
        title: "AP Computer Science Principles",
        desc: 'This KA course taught me a lot about how computers work from a hardware perspective, and how hardware works with software to make a computer “think”, a concept which I was previously mostly unfamiliar with. A lot of errors I’ve had in the past, such as “overflows”, make more sense when you think of a computer as a machine, with limited abilities, rather than a magical thinking device. It also gave me foundations for how networks, algorithms and the internet really work. I will apply this knowledge in the future, both when working with software and hardware.',
        link: "#",
        link_title: "No Project Available"
    },
    {
        title: "Intro to HTML/CSS",
        desc: "Though I already knew both HTML and CSS, this module helped me to learn important little things that are commonly overlooked by novice programmers. Most notably, these things were best practices, specific explanations of CSS properties, website hosting and HTML validation. In the future, I will pay attention to HTML and CSS best practices, using the shortest yet effective methods of styling and inserting elements (ex. Using a flexbox rather than struggling with dozens of elements with random height’s and margins that just ‘works’). I will also be better informed on website hosting, which will be quite useful as I’m currently looking into building myself a professional personal website. I’ll also make a note of the tools available to me to check validation of my HTML.",
        link: "https://www.khanacademy.org/computer-programming/spin-off-of-project-recipe-book/5656567771791360",
        link_title: "Featured Project: Recipe Book"
    },
    {
        title: "SQL",
        desc: "This module taught me the importance and value of storage and data in programming. I learned how to store, query and edit data in a SQL database, and through various projects was able to apply this knowledge to a variety of different subject areas with different uses. Data is essential for any functional large-scale web environment for efficiency, improvement and user-experience. In the future, I will implement the use of a database where it would improve my workflow and website. For example, this website (yes, this one you’re reading this on right now), is using a makeshift database to store paragraphs like this one (yes, this one), so I didn’t have to hard-code all the paragraphs and links and such. Of course, this is just a file - but a similar concept (the importance of data). I have, however, implemented an actual database since completing this module. For my app Flashtime that I made for HackEd, I created a database using MongoDB in order to allow users to store their flashcards for later. The use of a database definitely made that project less complex and more user-friendly and will allow for such in future projects.",
        link: "https://www.khanacademy.org/computer-programming/spin-off-of-project-app-impersonator/5737793484455936",
        link_title: "Featured Project: App Impersonator"
    },
    {
        title: "jQuery",
        desc: "jQuery saves a lot of code. And saving a lot of code saves a lot of time. This library specifically allows you to more easily access the DOM, style components, and animate, just to name a few possibilities. In this module, I learned jQuery, but ultimately also learned the value of using external libraries. In the future, though I may not use jQuery (I’m not the biggest fan), I will hold onto the idea concept that libraries are not a ‘shortcut’, but rather a way to get things done better, and will execute this in my code. Or, if I’m being literal, I can translate this into my other studies and hold onto the idea that it is never a bad thing to reference or use other works within your own to make them better.",
        link: "https://www.khanacademy.org/computer-programming/spin-off-of-project-word-game/5468330096820224",
        link_title: "Featured Project: Word Game"
    },
    {
        title: "Responsive Web Design",
        desc: "This module gave me more in-depth experience with CSS and HTML attributes as well as how to combine the two via classes, ids, names and element types. It showed me best practices for both styling and elements by providing me with exact information on what attributes do what and how to cleanly style a page the way you want, both from code and visual perspectives. In the future, I will try to refer back to these clean methods when programming, and in general pay attention to the concept of best practices.",
        link: "https://codepen.io/sabrinabutton/pen/PooVYaJ",
        link_title: "Pablo Picasso Tribute Page"
    },
    {
        title: "Javascript Algorithms and Data Structures",
        desc: "This free code camp certification showed me how to use javascript’s different functions in combination with logic in order to achieve a final goal. It makes coding complex algorithms a lot easier and efficient when you know how to take advantage of the functions javascript provides within your code rather than doing it all from scratch. In the future, in code, I will try to use functions that are provided rather than overengineering. From a more broad perspective, this teaches me the importance of using the resources you already have when doing any project.",
        link: "#",
        link_title: "No Project Available"
    },
    {
        title: "Front End Libraries",
        desc: "",
        link: "",
        link_title: ""
    },
    {
        title: "Intro to JS",
        desc: "Though I was previously knowledgeable of Javascript syntax and logic, this course provided me with reinforcement of what I already knew and allowed me to adopt and explore best practices within Javascript. This includes using Object.prototype functions (instead of this.functionName = function, which, in some cases, is still useful), when to use certain logic (ternary, switch, loops) and how to work with p5.js to visualize JS. In the future, I will be mindful of Javascript best practices and acknowledge that p5.js and other graphics libraries are always an option and can make programming much easier and more efficient in some scenarios. To be broader, I learned that it is A) important to do things in an efficient and readable manner and B) that I should take advantage of the tools available to me.",
        link: "https://www.khanacademy.org/computer-programming/spin-off-of-project-bookshelf/5827088498524160",
        link_title: "Featured Project: Bookshelf"
    }
];