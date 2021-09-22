
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../component/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [LoginComponent ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ],

    exports: [AuthRoutingModule],
})
export class AuthModule { }
