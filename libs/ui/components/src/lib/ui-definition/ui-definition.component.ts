import { Component, Input } from '@angular/core';

@Component({
    selector: 'mobile-academy-ui-definition',
    templateUrl: 'ui-definition.component.html',
    styleUrls: ['ui-definition.component.scss'],
})
export class UIDefinitionComponent implements OnInit {
    @Input() definition: Definition;
}
