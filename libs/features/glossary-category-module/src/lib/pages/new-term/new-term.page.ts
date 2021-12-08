import { Component } from '@angular/core';
import { Category } from '@mobile-academy/data-access/models';
import { CategoryService } from '@mobile-academy/data-access/services';

@Component({
    selector: 'app-new-term',
    templateUrl: 'new-term.page.html',
    styleUrls: ['new-term.page.scss'],
})
export class NewTermPage {
    categorySelected: Category;
    constructor(private categoryService: CategoryService) {
        this.categorySelected = this.categoryService.selectedCategory;
    }

    newTerm() {
        return;
    }
}
