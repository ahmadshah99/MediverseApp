const translationList = [
    {
        id: 0,
        medicines: [
            {
                name: "Tylenol",
                countries: ["Canada"],
            },
            {
                name: "Abenol",
                countries: ["United States"],
            },
            {
                name: "Crocin",
                countries: ["India"],
            },
            {
                name: "Panadol",
                countries: ["United Arab Emirates", "France", "China", "Peru"],
            },
            {
                name: "Doliprane",
                countries: ["Morocco"], 
            },
            {
                name: "Perfalgan",
                countries: ["Italy", "United Kingdom", "Greece"]
            },
            {
                name: "Adinol",
                countries: ["Mexico"]
            }
        ],
        purpose: "pain relief",
        activeIngredient: "Acetaminophen"
    },
    {
        id: 1,
        medicines: [
            {
                name: "Viagra",
                countries: ["United States", "Australia", "Canada", "Austria", "Greece", "Turkey"]
            },
            {
                name: "Форсаж",
                countries: ["Ukraine"]
            },
            {
                name: "Go",
                countries: ["Mexico"]
            }
        ],
        purpose: "sexual dysfunction",
        activeIngredient: "Sildenafil"
    },
    {
        id: 2,
        medicines: [
            {
                name: "Accutane",
                countries: ["United States", "United Arab Emirates"]
            },
            {
                name: "Epuris",
                countries: ["Canada"]
            },
            {
                name: "Accuran",
                countries: ["Greece"]
            },
            {
                name: "Roaccutane",
                countries: ["United Kingdom"]
            },
            {
                name: "curacene",
                countries: ["France"]
            },
            {
                name: "Ai Si Jie",
                countries: ["China"]
            },
            {
                name: "Aisoskin",
                countries: ["Italy"]
            },
            {
                name: "Curacne",
                countries: ["Morocco"]
            },
            {
                name: "Acneone",
                countries: ['India']
            },
            {
                name: "Abocoat",
                countries: ["Japan"]
            },
            {
                name: "Neotrex",
                countries: ["Mexico"]
            }
        ],
        purpose: "treat severe acne",
        activeIngredient: "Isotretinoin"
    },
    {
        id: 3,
        medicines: [
            {
                name: "Inderal",
                countries: ["United States", "India", "Italy", "Greece", "Japan"]
            },
            {
                name: "Avlocardyl",
                countries: ["France"]
            },
            {
                name: "Bedranol",
                countries: ["United Kingdom"]
            },
            {
                name: "Hang Da Lai",
                countries: ["China"]
            },
            {
                name: "Inderal LA",
                countries: ["Canada"]
            },
            {
                name: "Propranolol Genfar",
                countries: ["Costa Rica"]
            },
            {
                name: "Inderalici",
                countries: ["Mexico"]
            }
        ],
        purpose: "high blood pressure, irregular heartbeats, shaking (tremors)",
        activeIngredient: "Propranolol"
    },
    {
        id: 4,
        medicines: [
            {
                name: "Lasix",
                countries: ["United States", "India", "Italy", "United Kingdom", "Mexico"]
            },
            {
                name: "A Xi Ya",
                countries: ["China"]
            },
            {
                name: "Dimazon",
                countries: ["France"]
            },
            {
                name: "Fudesix",
                countries: ["Greece"]
            },
            {
                name: "Apo-Furosemide",
                countries: ["Canada"]
            },
            {
                name: "Lasix 4%",
                countries: ["Japan"]
            },
            {
                name: "Furosemida Vitalis",
                countries: ["Costa Rica"]
            }
        ],
        purpose: "used to reduce extra fluid in the body (edema) caused by conditions such as heart failure, liver disease, and kidney disease",
        activeIngredient: "Furosemid"
    },
    {
        id: 5,
        medicines: [
            {
                name: "Flagyl",
                countries: ["United States", "Japan", "Italy", "France", "United Kingdom", "India", "Mexico"]
            },
            {
                name: "Ai Di",
                countries: ["China"]
            },
            {
                name: "Metrocream",
                countries: ["Canada"]
            },
            {
                name: "Metronidazol Genfar",
                countries: ["Costa Rica"]   
            },
            {
                name: "Colpocin T",
                countries: ["Greece"]
            }
        ],
        purpose: "treat the symptoms of bacterial infections of the vagina, stomach, liver, skin, joints, brain and respiratory tract.",
        activeIngredient: "Metronidazole"
    },
    {
        id: 6,
        medicines: [
            {
                name: "Atorvastatin",
                countries: ["Canada"]
            },
            {
                name: "Lipitor",
                countries: ["United States", "China", "Japan", "Italy", "United Kingdom", "Greece"]
            },
            {
                name: "Atorvastatine Almus",
                countries: ["France"]
            },
            {
                name: "Atorvastatina Genfar",
                countries: ["Costa Rica"]
            },
            {
                name: "Ab-Vas",
                countries: ["India"]
            },
            {
                name: "Atorlip",
                countries: ["Mexico"]
            }
        ],
        purpose: "Lowers cholesterol levels",
        activeIngredient: "Atorvastatin"
    },
    {
        id: 7,
        medicines: [
            {
                name: "Levothyroxine",
                countries: ["Canada"]
            },
            {
                name: "Synthroid",
                countries: ["United States"]
            },
            {
                name: "Eltroxin",
                countries: ["India"]
            },
            {
                name: "Forthyron",
                countries: ["France"]
            },
            {
                name: "Canitroid",
                countries: ["Italy"]
            },
            {
                name: "Eutirox",
                countries: ["Mexico"]
            },
            {
                name: "Euthyrox",
                countries: ["China", "Greece"]
            },
            {
                name: "Levothyroxine Na Sandoz",
                countries: ["Japan"]
            },
            {
                name: "Eltroxin",
                countries: ["United Kingdom"]
            }
        ],
        purpose: "Thyroid hormone replacement",
        activeIngredient: "Levothyroxine Sodium"
    },
    {
        id: 8,
        medicines: [
            {
                name: "Glucophage",
                countries: ["United States", "Canada", "Italy", "China", "Mexico"]
            },
            {
                name: "Ebymect (Metformin hydrochloride)",
                countries: ["United Kingdom", "Greece", "France"]
            },
            {
                name: "Quexel",
                countries: ["Costa Rica"]
            },
            {
                name: "Asoformin",
                countries: ["India"]
            },
            {
                name: "Glycoran",
                countries: ["Japan"]
            }
        ],
        purpose: "Adult Type 2 diabetes mellitus",
        activeIngredient: "Metformin Hydrochloride",
    },
    {
        id: 9,
        medicines: [
            {
                name: "Pantoprazole",
                countries: ["United States"]
            },
            {
                name: "Abbott-Pantoprazole",
                countries: ["Canada"]
            },
            {
                name: "Fu Shi Tan",
                countries: ["China"]
            },
            {
                name: "Zantac",
                countries: ["Japan"]
            },
            {
                name: "Controloc",
                countries: ["Greece"]
            },
            {
                name: "Controloc Control",
                countries: ["France", "United Kingdom"]
            },
            {
                name: "Appryo",
                countries: ["Italy"]
            },
            {
                name: "Pantozol",
                countries: ["Mexico"]
            },
            {
                name: "Aciban",
                countries: ["India"]
            }
        ],
        purpose: "Peptic ulcers and gastrooesophageal reflux disease",
        activeIngredient: "Pantoprazole"
    },
    {
        id: 10,
        medicines: [
            {
                name: "Lopressor",
                countries: ["United States", "Italy "]
            },
            {
                name: "Apo-Metoprolol",
                countries: ["Canada"]
            },
            {
                name: "Actiblok-IPR",
                countries: ["India"]
            },
            {
                name: "Logimax",
                countries: ["France", "Mexico", "Greece"]
            },
            {
                name: "Cozaar",
                countries: ["Costa Rica"]
            },
            {
                name: "Betaloc",
                countries: ["China", "United Kingdom"]
            },
            {
                name: "Cerekunart",
                countries: ["Japan"]
            }
        ],
        purpose: "Hypertension, MI, angina, heart failure",
        activeIngredient: "Metoprolol"
    }
];


export default translationList;
