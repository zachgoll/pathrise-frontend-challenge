import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}

  private getRandomColor(): number[] {
    const random1 = Math.floor(Math.random() * 255);
    const random2 = Math.floor(Math.random() * 255);
    const random3 = Math.floor(Math.random() * 255);

    return [random1, random2, random3];
  }

  private colorToString(codes: number[]): string {
    return `rgb(${codes[0]}, ${codes[1]}, ${codes[2]})`;
  }

  public getColors(): Color {
    const bg = this.getRandomColor();

    // Determine the text color based on the background - https://stackoverflow.com/a/3943023/7437737
    const weightedValue = bg[0] * 0.299 + bg[1] * 0.587 + bg[2] * 0.114;
    const text = weightedValue > 186 ? '#000000' : '#ffffff';

    return {
      background: this.colorToString(bg),
      text,
    };
  }
}
