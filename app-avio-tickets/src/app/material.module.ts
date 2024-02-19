import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { RatingModule } from "ng-starrating";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports:[
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    RatingModule,
    Ng2SearchPipeModule,
    MatBadgeModule,
    MatFormFieldModule,
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    RatingModule,
    Ng2SearchPipeModule,
    MatBadgeModule,
    MatFormFieldModule
  ]
})
export class MaterialModule{}
