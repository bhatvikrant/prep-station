
// CONSTANTS
const SCIENCE = 'SCIENCE'
const COMMERCE = 'COMMERCE'
const ARTS = 'ARTS'
const ENGINEERING = 'ENGINEERING'
const CA_MEDICAL = 'CA/MEDICAL'
const WORKEXP = 'WORKEXP'


export const markingData = {
    tenth: [
        {
            min: 0,
            max: 50,
            marks: 0
        },
        {
            min: 51,
            max: 60,
            marks: 1
        },
        {
            min: 61,
            max: 70,
            marks: 3
        },
        {
            min: 71,
            max: 80,
            marks: 5
        },
        {
            min: 81,
            max: 90,
            marks: 8
        },
        {
            min: 91,
            max: 100,
            marks: 10
        },
    ],
    twelfth: [
        // ====================== SCIENCE ======================
        {
            min: 0,
            max: 55,
            marks: 0,
            stream: SCIENCE
        },
        {
            min: 56,
            max: 65,
            marks: 1,
            stream: SCIENCE
        },
        {
            min: 66,
            max: 75,
            marks: 3,
            stream: SCIENCE
        },
        {
            min: 76,
            max: 85,
            marks: 5,
            stream: SCIENCE
        },
        {
            min: 86,
            max: 90,
            marks: 8,
            stream: SCIENCE
        },
        {
            min: 91,
            max: 100,
            marks: 10,
            stream: SCIENCE
        },

        // ====================== COMMERCE ======================
        {
            min: 0,
            max: 50,
            marks: 0,
            stream: COMMERCE
        },
        {
            min: 51,
            max: 60,
            marks: 1,
            stream: COMMERCE
        },
        {
            min: 61,
            max: 70,
            marks: 3,
            stream: COMMERCE
        },
        {
            min: 71,
            max: 80,
            marks: 5,
            stream: COMMERCE
        },
        {
            min: 81,
            max: 90,
            marks: 8,
            stream: COMMERCE
        },
        {
            min: 91,
            max: 100,
            marks: 10,
            stream: COMMERCE
        },

        // ====================== ARTS ======================
        {
            min: 0,
            max: 50,
            marks: 0,
            stream: ARTS
        },
        {
            min: 51,
            max: 55,
            marks: 1,
            stream: ARTS
        },
        {
            min: 56,
            max: 65,
            marks: 3,
            stream: ARTS
        },
        {
            min: 66,
            max: 75,
            marks: 5,
            stream: ARTS
        },
        {
            min: 76,
            max: 85,
            marks: 8,
            stream: ARTS
        },
        {
            min: 86,
            max: 100,
            marks: 10,
            stream: ARTS
        },
    ],
    grad: [
        // ====================== ENGINEERING ======================
        {
            min: 0,
            max: 60,
            marks: 0,
            stream: ENGINEERING
        },
        {
            min: 61,
            max: 65,
            marks: 1,
            stream: ENGINEERING
        },
        {
            min: 66,
            max: 70,
            marks: 3,
            stream: ENGINEERING
        },
        {
            min: 71,
            max: 75,
            marks: 5,
            stream: ENGINEERING
        },
        {
            min: 76,
            max: 85,
            marks: 8,
            stream: ENGINEERING
        },
        {
            min: 85,
            max: 100,
            marks: 10,
            stream: ENGINEERING
        },

        // ====================== COMMERCE ======================
        {
            min: 0,
            max: 55,
            marks: 0,
            stream: COMMERCE
        },
        {
            min: 56,
            max: 60,
            marks: 1,
            stream: COMMERCE
        },
        {
            min: 61,
            max: 65,
            marks: 3,
            stream: COMMERCE
        },
        {
            min: 66,
            max: 70,
            marks: 5,
            stream: COMMERCE
        },
        {
            min: 71,
            max: 80,
            marks: 8,
            stream: COMMERCE
        },
        {
            min: 80,
            max: 100,
            marks: 10,
            stream: COMMERCE
        },

        // ====================== ARTS ======================
        {
            min: 0,
            max: 50,
            marks: 0,
            stream: ARTS
        },
        {
            min: 51,
            max: 55,
            marks: 1,
            stream: ARTS
        },
        {
            min: 56,
            max: 60,
            marks: 3,
            stream: ARTS
        },
        {
            min: 61,
            max: 65,
            marks: 5,
            stream: ARTS
        },
        {
            min: 66,
            max: 75,
            marks: 8,
            stream: ARTS
        },
        {
            min: 76,
            max: 100,
            marks: 10,
            stream: ARTS
        },

        // ====================== CA or MEDICAL ======================
        {
            min: 0,
            max: 49,
            marks: 0,
            stream: CA_MEDICAL
        },
        {
            min: 50,
            max: 54,
            marks: 3,
            stream: CA_MEDICAL
        },
        {
            min: 55,
            max: 59,
            marks: 5,
            stream: CA_MEDICAL
        },
        {
            min: 60,
            max: 64,
            marks: 8,
            stream: CA_MEDICAL
        },
        {
            min: 65,
            max: 100,
            marks: 10,
            stream: CA_MEDICAL
        },
    ],
    workExp: [
        {
            min: 0,
            max: 11,
            marks: 0,
            stream: WORKEXP
        },
        {
            min: 12,
            max: 24,
            marks: 5,
            stream: WORKEXP
        },
        {
            min: 25,
            max: 36,
            marks: 8,
            stream: WORKEXP
        },
        {
            min: 36,
            max: 100,
            marks: 10,
            stream: WORKEXP
        },
    ]
}

export interface IcollegeData {
    name: string
    givenWeightage: {
        workEx: number
        tenth: number
        twelfth: number
        graduation: number
    }
}

export const collegeData: IcollegeData[] = [
    {
        name: 'FMS',
        givenWeightage: {
            workEx: 0,
            tenth: 5,
            twelfth: 5,
            graduation: 0
        }
    },
    {
        name: 'IIFT',
        givenWeightage: {
            workEx: 3,
            tenth: 4,
            twelfth: 4,
            graduation: 0
        }
    },
    {
        name: 'IIM I',
        givenWeightage: {
            workEx: 0,
            tenth: 10,
            twelfth: 10,
            graduation: 0
        }
    },
    {
        name: 'IIM K',
        givenWeightage: {
            workEx: 5,
            tenth: 25,
            twelfth: 15,
            graduation: 0
        }
    },
    {
        name: 'IIM L',
        givenWeightage: {
            workEx: 5,
            tenth: 3.3,
            twelfth: 3.3,
            graduation: 3.3
        }
    },
    {
        name: 'XLRI',
        givenWeightage: {
            workEx: 1.25,
            tenth: 1.25,
            twelfth: 1.25,
            graduation: 1.25
        }
    },
    {
        name: 'IIT Delhi',
        givenWeightage: {
            workEx: 6,
            tenth: 6,
            twelfth: 6,
            graduation: 7
        }
    },
    {
        name: 'JBIMS',
        givenWeightage: {
            workEx: 0,
            tenth: 0,
            twelfth: 0,
            graduation: 0
        }
    },
    {
        name: 'MDI Gurgaon',
        givenWeightage: {
            workEx: 5,
            tenth: 5,
            twelfth: 5,
            graduation: 5
        }
    },
    {
        name: 'NMIMS Mumbai',
        givenWeightage: {
            workEx: 5,
            tenth: 1.6,
            twelfth: 1.6,
            graduation: 1.6
        }
    },
]