interface IndividualPrincipalInterface {
  headingText: string;
  description: string;
}

interface FePrinciplesInterface {
  sixSecondRule: IndividualPrincipalInterface;
  contrast: IndividualPrincipalInterface;
  seo: IndividualPrincipalInterface;
  sixtyThirtyTen: IndividualPrincipalInterface;
  uiAndUx: IndividualPrincipalInterface;
  designPatterns: IndividualPrincipalInterface;
}

interface GeneralPrinciplesInterface {
  dry: IndividualPrincipalInterface;
  yagni: IndividualPrincipalInterface;
  readableOverConcise: IndividualPrincipalInterface;
  selfCommentingCode: IndividualPrincipalInterface;
  noMagicNumbers: IndividualPrincipalInterface;
  tdd: IndividualPrincipalInterface;
}

interface ProgrammingApproachesInterface {
  functional: {
    headingText: string;
    principles: {
      separationOfConcern: IndividualPrincipalInterface;
      pureFunctions: IndividualPrincipalInterface;
      abstraction: IndividualPrincipalInterface;
    };
  };
  oop: {
    headingText: string;
    principles: {
      theBigFour: IndividualPrincipalInterface;
      solid: IndividualPrincipalInterface;
    };
  };
}

interface AllPrinciples {
  generalPrinciples: GeneralPrinciplesInterface;
  frontEndPrinciples: FePrinciplesInterface;
  programmingApproaches: ProgrammingApproachesInterface;
}

export const PRINCIPLES: AllPrinciples = {
  generalPrinciples: {
    dry: {
      headingText: "DRY",
      description:
        "Don't Repeat Yourself! Some of the best code can be automated.",
    },
    yagni: {
      headingText: "YAGNI",
      description:
        "You aren't going to need it! Time spent problems that don't exist are better spent working on problems that DO exist.",
    },
    readableOverConcise: {
      headingText: "Readable > Concise",
      description:
        "Flashy and complex looking code is just that - flash and good looking. And hellish for other developers trying to understand your code.",
    },
    selfCommentingCode: {
      headingText: "Self-commenting Code",
      description:
        "Code that spells itself out is an extension of having readable code - functions, or components that explain what they're doing tell the reader what's happening.",
    },
    noMagicNumbers: {
      headingText: "No Magic Numbers",
      description:
        "Having a random number - or string - unexplained in code is a tad scary. Lock that thing in a variable so we know what it means!",
    },
    tdd: {
      headingText: "Test Driven Development",
      description:
        "Would you board a plane that has only been tested in the mechanic's back yard? Me neither. Test that code!",
    },
  },
  frontEndPrinciples: {
    sixSecondRule: {
      headingText: "6 Second Rule",
      description:
        "Pretty straightforward rule - if you can't catch the eye of the customer within 6 seconds, they're gone. Make that page pop!",
    },
    contrast: {
      headingText: "Contrast",
      description:
        "The key to ease of reading a website is ensuring that text colour and background colour are not too close to each other.",
    },
    seo: {
      headingText: "Search Engine Optimisation",
      description:
        "This is a huge aspect to generalise, but generally accounting for correct html tags, page speed, UI/UX, and search engine indexing are an essential part of SEO.",
    },
    sixtyThirtyTen: {
      headingText: "The '60-30-10' Rule",
      description:
        "This principal aids in ensuring that a website's colour is directing the users attention to engage with what we want them to.",
    },
    uiAndUx: {
      headingText: "UI and UX",
      description:
        "The User Interface and the User Experience. Separating the concern between these two essential parts of Front-end development, and nailing then them, is absolutely crucial.",
    },
    designPatterns: {
      headingText: "Design Patterns",
      description:
        "How an app can be broken up and delegated and analysed - Model - View - Controller, and Model - View - View Model are very popular ways of structuring an app.",
    },
  },
  programmingApproaches: {
    functional: {
      headingText: "Functional Programming",
      principles: {
        separationOfConcern: {
          headingText: "Separation of Concern",
          description:
            "On of my favourite things about functional programming is seeing how we can break apart complex procedures into smaller, easier to understand segments. This makes refactoring, reshaping, and reading the code much easier to understand - so long as the programmer has created self documenting code...",
        },
        pureFunctions: {
          headingText: "Pure Functions",
          description:
            "An important aspect of maintaining abstraction is ensuring that each function is pure, meaning that they do not produce side effects - they do not mutate any data passed as an argument to the function.",
        },
        abstraction: {
          headingText: "Abstraction",
          description:
            "Keeping code abstract is a vital part of functional programming, as modification becomes easier when each function do not produce side effects - just use what the functions are returning, not prior (potentially mutated) data.",
        },
      },
    },
    oop: {
      headingText: "OOP - Object Oriented Programming",
      principles: {
        theBigFour: {
          headingText: "The Big 4",
          description:
            "Encapsulation. Abstraction. Polymorphism. Inheritance. These essential pillars of the OOP paradigm allow us to control data with great efficiency and cleanliness.",
        },
        solid: {
          headingText: "SOLID",
          description:
            "On top of the 4 basics, we have another best-practice for maintainable code. Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
        },
      },
    },
  },
};
