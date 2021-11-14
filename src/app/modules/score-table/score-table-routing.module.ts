import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerScorePageComponent } from './pages/player-score-page/player-score-page.component';

const routes: Routes = [
  { path:'', component:PlayerScorePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreTableRoutingModule { }
