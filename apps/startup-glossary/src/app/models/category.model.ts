export class Category {
    icon: string;
    title: CategoryType;
    termsLearned: number;
    termsTotal: number;
}

export enum CategoryType {
    Finance = 'Finance',
    Marketing = 'Marketing',
    Business = 'Business',
    Investment = 'Investment',
}
