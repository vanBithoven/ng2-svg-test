import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SvgContainerComponent } from './svg-container/svg-container.component';
import { SvgItemComponent } from './svg-item/svg-item.component';
import { SvgHostDirective } from './svg-host.directive';

import { SvgLoadingService } from './svg-loading.service';
import { SvgComponent } from './svg.component';



@NgModule({
    declarations: [
        SvgContainerComponent,
        SvgItemComponent,
        SvgHostDirective,
        SvgComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [SvgLoadingService],
    exports: [
        SvgComponent
    ]
})
export class SvgModule { }
