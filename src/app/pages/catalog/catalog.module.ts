import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbRatingModule, NgbTooltipModule, NgbCollapseModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Youtube Player
import { YouTubePlayerModule } from '@angular/youtube-player';

// Ngx Sliders
import { NgxSliderModule } from 'ngx-slider-v2';

// Google Map
import { GoogleMapsModule } from '@angular/google-maps';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';


// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

//pipes
import { FilterByCategoryPipe } from 'src/app/pipes/filter-by-category.pipe';
import { UniquePipe } from 'src/app/pipes/unique.pipe';
import { CharTransformPipe } from 'src/app/pipes/char-transform.pipe';
import { SortByPipe } from '../catalog/sort-by.pipe';

// Component
import { CatalogRoutingModule } from "./catalog-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { RentComponent } from './rent/rent.component';
import { SingleV1Component } from './single-v1/single-v1.component';
import { SingleV2Component } from './single-v2/single-v2.component';
import { SaleComponent } from './sale/sale.component';
import { CompanyFullDataComponent } from './company-full-data/company-full-data.component';
import { CharCategoryTransformPipe } from 'src/app/pipes/char-category-transform.pipe';

@NgModule({
  declarations: [
    RentComponent,
    CompanyFullDataComponent,
    SingleV1Component,
    SingleV2Component,
    SaleComponent,
    SortByPipe,
    UniquePipe,
    FilterByCategoryPipe,
    CharTransformPipe,
    CharCategoryTransformPipe
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbPaginationModule,
    YouTubePlayerModule,
    NgxSliderModule,
    GoogleMapsModule,
    CatalogRoutingModule,
    SharedModule,
    SlickCarouselModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogModule { }
