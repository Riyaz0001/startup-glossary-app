import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@mobile-academy/data-access/models';
import { CategoryService } from '@mobile-academy/data-access/services';
@Component({
    selector: 'app-category',
    templateUrl: 'category.page.html',
    styleUrls: ['category.page.scss'],
})
export class CategoryPage {
    categorySelected: Category;
    constructor(private categoryService: CategoryService, private route: Router) {
        const navigation = this.route.getCurrentNavigation();
        const selectedTitle = navigation.extras.state.category;
        this.categorySelected = this.categoryService.getSingleCategory(selectedTitle);
    }

    learnNewTerm() {
        // Navigate to the new term page
        this.route.navigateByUrl('/category/new-term',{ state: { category: this.categorySelected.title } });

    }

    alreadyLearned() {
        // Navigate to the already learned terms page
        this.route.navigateByUrl('/category/past-term',{ state: { category: this.categorySelected.title } });
    }
}
