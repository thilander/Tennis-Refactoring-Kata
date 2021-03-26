export default class Player {
  name: string;
  points: number;

  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  addPoint(): void {
    this.points++;
  }
}