import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@mobile-academy/data-access/services';
import { Category } from '@mobile-academy/data-access/models';
import { CategoryType } from '@mobile-academy/util/enums';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    // TODO - Replace with actual data
    items: Category[] = [
        {
            icon: 'assets/icon/favicon.png',
            title: CategoryType.Finance,
            termsLearned: 11,
            termsTotal: 25,
        },
        {
            icon: 'assets/icon/favicon.png',
            title: CategoryType.Marketing,
            termsLearned: 5,
            termsTotal: 25,
        },
        {
            icon: 'assets/icon/favicon.png',
            title: CategoryType.Business,
            termsLearned: 7,
            termsTotal: 25,
        },
        {
            icon: 'assets/icon/favicon.png',
            title: CategoryType.Investment,
            termsLearned: 0,
            termsTotal: 25,
        },
    ];

    constructor(private route: Router, private categoryService: CategoryService) {
        // * Reset the selected category
        this.categoryService.selectedCategory = null;
    }

    viewItem(item) {
        // * Select the category
        console.log(item);
        this.categoryService.selectedCategory = item;
        // * Navigate to the category page
        this.route.navigate(['/category']);
    }
}
