import { Component } from '@angular/core';
import { Category } from '@mobile-academy/data-access/models';
import { CategoryService } from '@mobile-academy/data-access/services';
import { Router } from '@angular/router';
@Component({
    selector: 'app-new-term',
    templateUrl: 'new-term.page.html',
    styleUrls: ['new-term.page.scss'],
})
export class NewTermPage {
    categorySelected: Category;
    constructor(private categoryService: CategoryService, private route: Router) {
        const navigation = this.route.getCurrentNavigation();
        const selectedTitle = navigation.extras.state.category;
        this.categorySelected = this.categoryService.getSingleCategory(selectedTitle);
    }

    newTerm() {
        return;
    }
}
