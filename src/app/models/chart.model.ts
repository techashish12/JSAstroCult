export class Chart {
$key: any;

  constructor(
    public name: string,
    public birthDate: string,
    public birthTime: string,
     public birthLoc: string,
     public sunDeg: string,
     public sunSignFormat: string,
     public moonDeg: string,
     public moonSignFormat: string,
     public mercDeg: string,
     public mercSignFormat,
     public venusDeg: string,
     public venusSignFormat: string,
     public marsDeg: string,
     public marsSignFormat: string,
     public jupiterDeg: string,
     public jupiterSignFormat: string,
     public saturnDeg: string,
     public saturnSignFormat: string,
     public uranusDeg: string,
     public uranusSignFormat: string,
     public neptuneDeg: string,
     public neptuneSignFormat: string,
     public plutoDeg: string,
     public plutoSignFormat: string,
    ) { }
}
