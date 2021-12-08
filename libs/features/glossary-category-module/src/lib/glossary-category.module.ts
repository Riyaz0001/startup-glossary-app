import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CategoryPage } from './pages/root/category.page';

import { GlossaryCategoryRoutingModule } from './glossary-category-routing.module';
import { NewTermPage } from './pages/new-term/new-term.page';
import { PastTermPage } from './pages/past-term/past-term.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, GlossaryCategoryRoutingModule],
    declarations: [CategoryPage, NewTermPage, PastTermPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GlossaryCategoryModule {}
