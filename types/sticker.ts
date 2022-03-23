import { PhotoSize } from "./photo_size.ts";
import { MaskPosition } from "./mask_position.ts";

export class Sticker {
  file_id!: string;
  file_unique_id!: string;
  width!: number;
  height!: number;
  is_animated!: boolean;
  is_video!: boolean;
  thumb?: PhotoSize;
  emoji?: string;
  set_name?: string;
  mask_position?: MaskPosition;
  file_size?: number;
}
