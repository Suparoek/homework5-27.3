import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { NopNewComponent } from '../home/nop-new/nop-new.component';
import { CommonstatisComponent } from './commonstatis/commonstatis.component';
import { OrderTotalComponent } from './order-total/order-total.component';
import {MatTableModule} from '@angular/material/table';
import { LncomOrderComponent } from './lncom-order/lncom-order.component';
import { LastorderComponent } from './lastorder/lastorder.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PopsearchComponent } from './popsearch/popsearch.component';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';


import { StylePaginatorDirective } from "../home/popsearch/style-paginator.directive";
import { BestquantityComponent } from './bestquantity/bestquantity.component';
import { AmountComponent } from './amount/amount.component';
@NgModule({
  declarations: [
    NavbarComponent,
    NopNewComponent,
    CommonstatisComponent,
    OrderTotalComponent,
    LncomOrderComponent,
    LastorderComponent,
    PopsearchComponent,
    StylePaginatorDirective,
    BestquantityComponent,
    AmountComponent
  ],
  imports: [
    CommonModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule,MatMenuModule,MatExpansionModule,A11yModule
    ,MatCardModule,MatTableModule,MatPaginatorModule,ClipboardModule,DragDropModule,PortalModule,ScrollingModule,CdkStepperModule,
    CdkTableModule,CdkTreeModule,MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,
    MatCheckboxModule,MatChipsModule,MatSelectModule,MatStepperModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatGridListModule,
    MatInputModule,MatNativeDateModule,MatRippleModule,MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,MatSliderModule,
    MatSnackBarModule,MatSlideToggleModule,MatSortModule,MatTableModule,MatTabsModule,MatTooltipModule,MatTreeModule,OverlayModule
  ],
  exports:[NavbarComponent,NopNewComponent]
})
export class HomeModule { }
