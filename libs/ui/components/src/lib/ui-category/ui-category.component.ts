import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'mobile-academy-ui-category',
    templateUrl: 'ui-category.component.html',
    styleUrls: ['ui-category.component.scss'],
})
export class UICategoryComponent implements OnInit {
    @Input() category: Category;
    @Input() isLastItem: boolean;

    @Output() viewItemEvent: EventEmitter = new EventEmitter();

    viewItem() {
        this.viewItemEvent.emit(this.category);
    }
}
