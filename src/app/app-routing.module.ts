/*
openrqm-client-desktop-nwjs
App Routes
SPDX-License-Identifier: GPL-2.0-only
Copyright (C) 2019 Benjamin Schilling
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RQMWorkspaceTreeComponent } from './rqmworkspace-tree/rqmworkspace-tree.component';
import { RQMDocumentViewerComponent } from './rqmdocument-viewer/rqmdocument-viewer.component';
import { RQMLoginComponent} from './rqmlogin/rqmlogin.component';


const routes: Routes = [
  { path: 'login', component: RQMLoginComponent},
  { path: 'workspace-tree', component: RQMWorkspaceTreeComponent },
  { path: 'document-viewer/:id/:shortname', component: RQMDocumentViewerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
