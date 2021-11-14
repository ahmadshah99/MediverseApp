const translationList = [
    {
        id: 0,
        medicines: [
            {
                name: "Tylenol",
                countries: ["United States", "Canada"],
            },
            {
                name: "Crocin",
                countries: ["India"],
            },
            {
                name: "Panadol",
                countries: ["Dubai"],
            }, 
            {
                name: "Doliprane",
                countries: ["Morocco"],
            }
        ],
        purpose: "pain relief",
        activeIngridient: "Acetaminophen" 
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
            }
        ],
        purpose: "sexual dysfunction",
        activeIngridient: "Sildenafil"
    },
    {
        id: 2,
        medicines: [
            {
                name: "Accutane",
                countries: ["United States"]
            },
            {
                name: "Epuris",
                countries: ["Canada"]
            }
        ],
        purpose: "treat severe acne",
        activeIngridient: "Isotretinoin"
    }
];


export default translationList;