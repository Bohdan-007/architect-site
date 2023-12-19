export class Project {
  constructor(
    public id: number,
    public title: string,
    public location: string,
    public year: number,
    public area: number,
    public category: string,
    public photoUrl: string,

    public filterTitle: string,
  ) { };
};