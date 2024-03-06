export interface BootstrapToastOptions {
  animation?: boolean;
  autohide?: boolean;
  delay?: number;
}

export interface BootstrapOptions {
  tooltip?: boolean;
  popover?: boolean;
  alert?: boolean;
  collapse?: boolean;
  toast?: boolean;
  toastOptions?: BootstrapToastOptions;
}
