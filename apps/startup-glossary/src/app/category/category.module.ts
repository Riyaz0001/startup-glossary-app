import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CategoryPage } from './category.page';

import { CategoryPageRoutingModule } from './category-routing.module';
import { NewTermPage } from './new-term/new-term.page';
import { PastTermPage } from './past-term/past-term.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CategoryPageRoutingModule],
    declarations: [CategoryPage, NewTermPage, PastTermPage],
})
export class CategoryPageModule {}
