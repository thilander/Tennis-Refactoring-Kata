import { TennisGame } from './TennisGame';
import Player from './Player';

export class TennisGame1 implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    const player = playerName === this.player1.name
      ? this.player1
      : this.player2;
    player.addPoint();
  }

  getScore(): string {
    if (this.isDraw()) return this.drawScore();
    if (this.someoneHasAdvantage()) return this.advantageOrWinnerScore();
    return this.score();
  }

  private score(): string {
    return `${this.getScoreName(this.player1.points)}-${this.getScoreName(this.player2.points)}`;
  }

  private drawScore() {
    return this.getScoreName(this.player1.points) && this.player1.points < 3
      ? `${this.getScoreName(this.player1.points)}-All`
      : 'Deuce';
  }

  private advantageOrWinnerScore(): string {
    return this.hasWinner()
      ? `Win for ${this.getLeader().name}`
      : `Advantage ${this.getLeader().name}`;
  }

  private isDraw(): boolean {
    return this.player1.points === this.player2.points;
  }

  private someoneHasAdvantage(): boolean {
    return this.player1.points >= 4 || this.player2.points >= 4;
  }

  private hasWinner(): boolean {
    return this.someoneHasAdvantage() && Math.abs(this.player1.points - this.player2.points) >= 2;
  }

  private getLeader(): Player {
    return this.player1.points > this.player2.points
      ? this.player1
      : this.player2
  }

  private getScoreName(score: number): string {
    return {
      0: 'Love',
      1: 'Fifteen',
      2: 'Thirty',
      3: 'Forty'
    }[score];
  }
}
