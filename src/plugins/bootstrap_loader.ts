/// <reference lib="dom" />
import { bootstrap } from "../../deps.ts";
import {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
} from "../../deps.ts";
import { BootstrapOptions } from "../type.ts";

declare global {
  interface Window {
    bootstrap: {
      Alert: Alert;
      Button: Button;
      Carousel: Carousel;
      Collapse: Collapse;
      Dropdown: Dropdown;
      Modal: Modal;
      Offcanvas: Offcanvas;
      Popover: Popover;
      ScrollSpy: ScrollSpy;
      Tab: Tab;
      Toast: Toast;
      Tooltip: Tooltip;
    };
  }
}

const defaultOptions: Required<BootstrapOptions> = {
  tooltip: true,
  popover: true,
  alert: true,
  collapse: true,
  toast: true,
  toastOptions: {
    animation: true,
    autohide: true,
    delay: 5000,
  },
};

export default function bootstrapLoader(options: BootstrapOptions) {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    toastOptions: { ...defaultOptions.toastOptions, ...options?.toastOptions },
  };

  console.log("Bootstrap Loader Options", mergedOptions);

  window.addEventListener("load", function () {
    if (mergedOptions.tooltip) {
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]',
      );
      Array.from(tooltipTriggerList).forEach(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
      );
    }

    if (mergedOptions.popover) {
      const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]',
      );
      Array.from(popoverTriggerList).map(
        (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
      );
    }

    if (mergedOptions.alert) {
      const alertList = document.querySelectorAll(".alert");
      Array.from(alertList).map((element) => new bootstrap.Alert(element));
    }

    if (mergedOptions.collapse) {
      const collapseElementList = document.querySelectorAll(".collapse");
      Array.from(collapseElementList).map(
        (collapseEl) => new bootstrap.Collapse(collapseEl),
      );
    }

    if (mergedOptions.toast) {
      const toastElList = document.querySelectorAll(".toast");
      const toastList = Array.from(toastElList).map(
        (toastEl) => new bootstrap.Toast(toastEl, mergedOptions.toastOptions),
      );
      toastList.forEach((toast) => toast.show());
    }

    window.bootstrap = bootstrap;
  });
}
