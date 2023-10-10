import Cloud from "../images/cloud.svg";
import CursorAutoDark from "../images/cursor/cursor-auto-dark.svg";
import CursorAutoLight from "../images/cursor/cursor-auto-light.svg";
import CursorPointerDark from "../images/cursor/cursor-pointer-dark.svg";
import CursorPointerLight from "../images/cursor/cursor-pointer-light.svg";

export const BackgroundColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-background)" : "var(--dark-background)";

export const BackgroundSwitch = ({ $theme }) =>
  $theme
    ? `url(${Cloud}), var(--light-background)`
    : `linear-gradient(90deg, var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        linear-gradient(var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        var(--dark-secondary)`;

export const PrimaryColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-primary)" : "var(--dark-primary)";

export const SecondaryColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "var(--dark-secondary)";

export const TertiaryColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-tertiary)";

export const ParagraphColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)";

export const HoverColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-hover)" : "var(--dark-hover)";

export const CursorAutoSwitch = ({ $theme }) =>
  $theme
    ? `url(${CursorAutoLight}) 12 12, auto`
    : `url(${CursorAutoDark}) 12 12, auto`;

export const CursorPointerSwitch = ({ $theme }) =>
  $theme
    ? `url(${CursorPointerLight}) 12 12, pointer`
    : `url(${CursorPointerDark}) 12 12, pointer`;
