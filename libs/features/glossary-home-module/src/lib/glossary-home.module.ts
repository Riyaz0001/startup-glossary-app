import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/root/home.page';
import { CategoryService } from '@mobile-academy/data-access/services';
import { GlossaryHomeRoutingModule } from './glossary-home-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, GlossaryHomeRoutingModule],
    declarations: [HomePage],
    providers: [CategoryService],
})
export class GlossaryHomeModule {}
