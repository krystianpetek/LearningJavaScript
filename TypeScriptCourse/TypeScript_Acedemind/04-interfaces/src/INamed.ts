export interface INamed {
  readonly name: string;
  outputName?: string;
  optionalMethod?: () => void;
}
