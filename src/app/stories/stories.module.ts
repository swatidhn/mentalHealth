import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryFormComponent } from './story-form/story-form.component';


@NgModule({
  declarations: [
    StoriesComponent,
    StoryListComponent,
    StoryFormComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
