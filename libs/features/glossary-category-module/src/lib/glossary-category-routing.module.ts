import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPage } from './pages/root/category.page';
import { NewTermPage } from './pages/new-term/new-term.page';
import { PastTermPage } from './pages/past-term/past-term.page';

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
export class GlossaryCategoryRoutingModule {}
