
export class Adresse {
  strasse = 'myStrasse';
  hausnummer = '1';
  postleitzahl = '12345';
  ort = 'myOrt';
}

export class Person {
  vorname = 'myVorname';
  nachname = 'myNachname';

  adresse = new Adresse();
}
