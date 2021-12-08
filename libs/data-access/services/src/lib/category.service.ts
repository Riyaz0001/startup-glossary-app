import { Injectable } from '@angular/core';
import { Category } from '@mobile-academy/data-access/models';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    private _selectedCategory: Category;

    public get selectedCategory(): Category {
        return this._selectedCategory;
    }

    public set selectedCategory(category: Category) {
        this._selectedCategory = category;
    }
}
