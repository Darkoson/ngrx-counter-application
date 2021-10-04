import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../model/student.model';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  
  // endPoint: string = `https://opdark-digital.firebaseio.com/`;
  endPoint: string = `https://vue-completecourse.firebaseio.com/students.json`;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  studentStudent(student: Student): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(this.endPoint, student);
  }

  updateStudent(student: Student): Observable<Student> {
    const studentData = {
      [student.id]: { name: student.name, age: student.age },
    };
    return this.http.patch<Student>(this.endPoint, studentData);
  }

  getStudentById(id: any) : Observable<Student>{ 
    return this.firestore
      .collection('students')
      .valueChanges().pipe(map((data:Student[] ) => data.find( (student => student.id == id)) ))
       
  }

  deleteStudent(id: string) {
    return this.http.delete(
      `https://vue-completecourse.firebaseio.com/students/${id}.json`
    );
  }

  getStudent(): Observable<Student[]> {
    return this.firestore
      .collection('students')
      .valueChanges().pipe(map((data:Student[] ) => data ))
       
    // return this.http.get<Student[]>(this.endPoint).pipe(
    //   map((data) => {
    //     const students: Student[] = [];
    //     for (let key in data) {
    //       students.push({ ...data[key], id: key });
    //     }

    //     return students;
    //   })
    // );
  }
}
