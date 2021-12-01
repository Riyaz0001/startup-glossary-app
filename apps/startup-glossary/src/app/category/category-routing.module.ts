import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPage } from './category.page';
import { NewTermPage } from './new-term/new-term.page';
import { PastTermPage } from './past-term/past-term.page';

const routes: Routes = [
    {
        path: '',
        component: CategoryPage,
    },
    {
        path: 'new-term',
        component: NewTermPage,
    },
    {
        path: 'past-term',
        component: PastTermPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
