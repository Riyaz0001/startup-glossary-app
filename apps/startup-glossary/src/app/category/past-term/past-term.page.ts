import { Component } from '@angular/core';
import { Category } from '@mobile-academy/data-access/models';
import { CategoryService } from '@mobile-academy/data-access/services';

@Component({
    selector: 'app-past-term',
    templateUrl: 'past-term.page.html',
    styleUrls: ['past-term.page.scss'],
})
export class PastTermPage {
    categorySelected: Category;
    constructor(private categoryService: CategoryService) {
        this.categorySelected = this.categoryService.selectedCategory;
    }

    scrollTop() {
        return;
    }
}
