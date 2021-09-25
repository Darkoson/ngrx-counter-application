
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects'; 
import { LoginComponent } from '../component/login/login.component';
import { AuthEffects } from '../store/auth.effect';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [LoginComponent ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
    ],

    exports: [AuthRoutingModule],
})
export class AuthModule { }
