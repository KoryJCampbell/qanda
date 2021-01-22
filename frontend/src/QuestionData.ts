export interface QuestionData {
    questionId: number;
    title: string;
    content: string;
    userName: string;
    created: Date;
    answers: AnswerData[];
}

export interface AnswerData {
    answerId: number;
    content: string;
    userName: string;
    created: Date;
}

const questions: QuestionData[] = [
    {
        questionId: 1,
        title: 'Why should I learn Typescript?',
        content:
        'Typescript seems to be getting popular so I wondered whether it is worth my time learning it? What benifits does it give over Javascript?',
        userName: 'Bob',
        created: new Date(),
        answers: [
            {
                answerId: 1,
                content: 'To catch problems earlier speeding up your developments',
                userName: 'Jane',
                created: new Date()
            }
        ]
    }
]

export const getUnansweredQuestions = (): QuestionData[] => {
    return questions.filter(q => q.answers.length === 0);
}