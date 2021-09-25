
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreType } from 'src/app/shared/store/store.type';
import { LoginComponent } from '../component/login/login.component';
import { AuthReducer } from '../store/auth.reducer';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [LoginComponent ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature(StoreType.AUTH, AuthReducer)
    ],

    exports: [AuthRoutingModule],
})
export class AuthModule { }
