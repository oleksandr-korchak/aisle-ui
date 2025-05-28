import { Component } from '@angular/core'
import { MatButton } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'


@Component({
    selector: 'aisle-home-page',
    imports: [
        MatButton,
        MatCardModule,
    ],
    templateUrl: './aisle-home-page.component.html',
})
export class AisleHomePageComponent {


}
