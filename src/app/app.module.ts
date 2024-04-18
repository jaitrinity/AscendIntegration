import { BrowserModule, Title, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './layout/dashbord/dashbord.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { HttpModule } from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from './shared/services/loginService';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CreateNbsComponent } from './layout/create-nbs/create-nbs.component';
import { NbsStatusComponent } from './layout/nbs-status/nbs-status.component';
import { CreateNBSService } from './shared/services/createNBSService';
// import { OpcoStatusComponent } from './layout/admin/opco-status/opco-status.component';
import { EmployeeStatusComponent } from './layout/admin/employee-status/employee-status.component';
import { EmployeeStatusService } from './layout/admin/employee-status/service/EmployeeStatusService';
import { Ng2SmartTableModule } from 'ngx-smart-table';
import { CommonService } from './shared/services/CommonService';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OnlyNumber } from './shared/Validations/OnlyNumber';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NbsStatusService } from './layout/nbs-status/service/NbsStatusService';
import { OdscAnchorComponent } from './layout/odsc-anchor/odsc-anchor.component';
import { OdscSharingComponent } from './layout/odsc-sharing/odsc-sharing.component';
// import { OdcSmartSplitSharingComponent } from './layout/odc-smart-split-sharing/odc-smart-split-sharing.component';
// import { CowComponent } from './layout/cow/cow.component';
// import { MassiveMimoSharingComponent } from './layout/massive-mimo-sharing/massive-mimo-sharing.component';
// import { NbsSharingComponent } from './layout/nbs-sharing/nbs-sharing.component';
import { NbsComponent } from './layout/nbs/nbs.component';
import { OnlyAlphanumeric } from './shared/Validations/OnlyAlphanumeric';
import { OnlyNumberWithDecimal } from './shared/Validations/OnlyNumberWithDecimal';
import { OnlyAlphanumericWithDecimalAndHyphen } from './shared/Validations/OnlyAlphanumericWithDecimalAndHyphen';
import { DatePipe } from '@angular/common';
// import { CowSharingComponent } from './layout/cow-sharing/cow-sharing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewTenencyComponent } from './layout/new-tenency/new-tenency.component';
import { SiteUpgradeComponent } from './layout/site-upgrade/site-upgrade.component';
import { IWanComponent } from './layout/i-wan/i-wan.component';
// import { HpscComponent } from './layout/hpsc/hpsc.component';
import { McuComponent } from './layout/mcu/mcu.component';
// import { UbrComponent } from './layout/ubr/ubr.component';
import { FibreTerminationComponent } from './layout/fibre-termination/fibre-termination.component';
import { TclRedwinComponent } from './layout/tcl-redwin/tcl-redwin.component';
import { HexOltComponent } from './layout/hex-olt/hex-olt.component';
// import { ForthSectorAdditionComponent } from './layout/forth-sector-addition/forth-sector-addition.component';
import { ReportComponent } from './layout/report/report.component';
import { EmployeeComponent } from './layout/admin/employee/employee.component';
import { LengthValidater } from './shared/Validations/LengthValidater';
import { BulkUploadComponent } from './layout/bulk-upload/bulk-upload.component';
import { ComplainComponent } from './layout/complain/complain.component';
// import { SmartSplitComponent } from './layout/smart-split/smart-split.component';
import { TcuComponent } from './layout/tcu/tcu.component';
import { AirtelStatusComponent } from './layout/airtel-status/airtel-status.component';
import { EditFibreNodeComponent } from './layout/edit-fibre-node/edit-fibre-node.component';
import { EditBtsCabinetComponent } from './layout/edit-bts-cabinet/edit-bts-cabinet.component';
import { EditRruComponent } from './layout/edit-rru/edit-rru.component';
import { EditRadioAntennaComponent } from './layout/edit-radio-antenna/edit-radio-antenna.component';
import { EditMwAntennaComponent } from './layout/edit-mw-antenna/edit-mw-antenna.component';
import { EditBscRncCabinetComponent } from './layout/edit-bsc-rnc-cabinet/edit-bsc-rnc-cabinet.component';
import { EditOtherNodeComponent } from './layout/edit-other-node/edit-other-node.component';
import { EditMwIduComponent } from './layout/edit-mw-idu/edit-mw-idu.component';
import { EditMcbComponent } from './layout/edit-mcb/edit-mcb.component';
import { ViewBtsCabinetComponent } from './layout/view-bts-cabinet/view-bts-cabinet.component';
import { ViewRruComponent } from './layout/view-rru/view-rru.component';
import { ViewRadioAntennaComponent } from './layout/view-radio-antenna/view-radio-antenna.component';
import { ViewMwAntennaComponent } from './layout/view-mw-antenna/view-mw-antenna.component';
import { ViewBscRncCabinetComponent } from './layout/view-bsc-rnc-cabinet/view-bsc-rnc-cabinet.component';
import { ViewOtherNodeComponent } from './layout/view-other-node/view-other-node.component';
import { ViewMwIduComponent } from './layout/view-mw-idu/view-mw-idu.component';
import { ViewMcbComponent } from './layout/view-mcb/view-mcb.component';
import { ViewFibreNodeComponent } from './layout/view-fibre-node/view-fibre-node.component';
import { ViewTmaTmbComponent } from './layout/view-tma-tmb/view-tma-tmb.component';
import { EditTmaTmbComponent } from './layout/edit-tma-tmb/edit-tma-tmb.component';
import { ViewRfAntennaComponent } from './layout/view-rf-antenna/view-rf-antenna.component';
import { ViewOdscComponent } from './layout/view-odsc/view-odsc.component';
import { ViewMicrowaveComponent } from './layout/view-microwave/view-microwave.component';
import { ViewBBUComponent } from './layout/view-bbu/view-bbu.component';
import { ViewRRUUComponent } from './layout/view-rruu/view-rruu.component';
import { ViewRRUDeleteComponent } from './layout/view-rrudelete/view-rrudelete.component';
import { ViewRRUAddComponent } from './layout/view-rruadd/view-rruadd.component';
import { ViewBTSComponent } from './layout/view-bts/view-bts.component';
import { ViewMassiveMimoComponent } from './layout/view-massive-mimo/view-massive-mimo.component';
import { ViewPolesComponent } from './layout/view-poles/view-poles.component';
import { OfflineMessageComponent } from './offline-message/offline-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashbordComponent,
    CreateNbsComponent,
    NbsStatusComponent,
    // OpcoStatusComponent,
    EmployeeStatusComponent,
    OnlyNumber,
    OnlyAlphanumeric,
    OnlyNumberWithDecimal,
    OnlyAlphanumericWithDecimalAndHyphen,
    LengthValidater,
    // NbsSharingComponent,
    OdscAnchorComponent,
    OdscSharingComponent,
    // OdcSmartSplitSharingComponent,
    // CowComponent,
    // MassiveMimoSharingComponent,
    NbsComponent,
    // CowSharingComponent,
    PageNotFoundComponent,
    NewTenencyComponent,
    SiteUpgradeComponent,
    IWanComponent,
    // HpscComponent,
    McuComponent,
    // UbrComponent,
    FibreTerminationComponent,
    TclRedwinComponent,
    HexOltComponent,
    // ForthSectorAdditionComponent,
    ReportComponent,
    EmployeeComponent,
    BulkUploadComponent,
    ComplainComponent,
    // SmartSplitComponent,
    TcuComponent,
    AirtelStatusComponent,
    EditFibreNodeComponent,
    EditBtsCabinetComponent,
    EditRruComponent,
    EditRadioAntennaComponent,
    EditMwAntennaComponent,
    EditBscRncCabinetComponent,
    EditOtherNodeComponent,
    EditMwIduComponent,
    EditMcbComponent,
    ViewBtsCabinetComponent,
    ViewRruComponent,
    ViewRadioAntennaComponent,
    ViewMwAntennaComponent,
    ViewBscRncCabinetComponent,
    ViewOtherNodeComponent,
    ViewMwIduComponent,
    ViewMcbComponent,
    ViewFibreNodeComponent,
    ViewTmaTmbComponent,
    EditTmaTmbComponent,
    ViewRfAntennaComponent,
    ViewOdscComponent,
    ViewMicrowaveComponent,
    ViewBBUComponent,
    ViewRRUUComponent,
    ViewRRUDeleteComponent,
    ViewRRUAddComponent,
    ViewBTSComponent,
    ViewMassiveMimoComponent,
    ViewPolesComponent,
    OfflineMessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    Ng2SmartTableModule,
    NgMultiSelectDropDownModule.forRoot(),
    AutocompleteLibModule
  ],
  providers: [AuthGuard,Title,CommonService,NbsStatusService,
    LoginService,CreateNBSService,DatePipe,
    EmployeeStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
