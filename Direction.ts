export class Direction {
  private _street: string;
  private _number: number;
  private _floor: number;  
  private _letter: string;
  private _zipCode: number;
  private _population: string;
  private _province: string;

  constructor(street: string, number: number, floor: number, letter: string, zipCode: number, population: string, province: string){
    this._street = street;
    this._number = number;
    this._floor = floor;
    this._letter = letter;
    this._zipCode = zipCode;
    this._population = population;
    this._province = province;
  }

  public get street(): string{
    return this._street;
  }
  public set street(street: string){
    this._street = street;
  }

  public get number(): number{
    return this._number;
  }
  public set number(number: number){
    this._number = number;
  }

  public get floor(): number{
    return this._floor;
  }
  public set floor(floor: number){
    this._floor = floor;
  }

  public get letter(): string{
    return this._letter;
  }
  public set letter(letter: string){
    this._letter = letter;
  }

  public get zipCode(): number{
    return this._zipCode;
  }
  public set zipCode(zipCode: number){
    this._zipCode = zipCode;
  }

  public get population(): string{
    return this._population;
  }
  public set population(population: string){
    this._population = population;
  }

  public get province(): string{
    return this._province;
  }
  public set province(province: string){
    this._province = province;
  }
}