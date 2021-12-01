import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

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
