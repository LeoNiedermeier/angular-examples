import {Person} from './data-model';
import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormGroup} from '@angular/forms/src/model';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html'
})
export class ReactiveFormsExampleComponent implements OnInit, OnChanges {
  personForm: FormGroup;

  person: Person;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.personForm = this.fb.group({
      // Validatoren als Array anhängen.
      vorname: ['', [Validators.required, Validators.minLength(3)]],
      nachname: '',
      // Adresse als nested / child form group.
      adresse: this.fb.group({
        strasse: '',
        hausnummer: '',
        postleitzahl: '',
        ort: ''
      })
    });
  }

  ngOnInit() {
    this.person = new Person();
    this.ngOnChanges();
  }

  register() {
    console.log('Register!', this.personForm);
    if (this.personForm.valid) {
      console.log('Valid', this.personForm.value);
      this.save();
    }
  }

  private save() {
    const formModel = this.personForm.value;
    console.log('formModel', formModel);

    // das ganze muss man dann per Hand rüberkopieren.
    const result: Person = {
      vorname: formModel.vorname as string,
      nachname: formModel['nachname'] as string,
      adresse: {
        strasse: formModel.adresse.strasse,
        hausnummer: formModel.adresse.hausnummer,
        postleitzahl: formModel.adresse.postleitzahl,
        ort: formModel.adresse.ort
      }
    };
    console.log('SAVE', result);
  }

  reset() {
    const person = new Person();
    this.personForm.reset();
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    // https://angular.io/guide/reactive-forms#setvalue
    // "It accepts an object that matches the structure of the group, with control names as keys."
    // => Struktur muss übereinstimmen
    this.personForm.setValue(this.person);
  }
}
