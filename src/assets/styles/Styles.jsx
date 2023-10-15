import Cloud from "../images/cloud.svg";
import CursorAutoDark from "../images/cursor/cursor-auto-dark.svg";
import CursorAutoLight from "../images/cursor/cursor-auto-light.svg";
import CursorPointerDark from "../images/cursor/cursor-pointer-dark.svg";
import CursorPointerLight from "../images/cursor/cursor-pointer-light.svg";

// Background setup
export const BackgroundSwitch = ({ $theme }) =>
  $theme
    ? `url(${Cloud}), var(--light-background)`
    : `linear-gradient(90deg, var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        linear-gradient(var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        var(--dot-color)`;

//Coherent color switch
export const BackgroundColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-background)" : "var(--dark-background)";

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

//Incoherent color switch
export const OpacitySwitch = ({ $theme }) =>
  $theme ? "rgba(255, 255, 255, 0.5)" : "transparent";
export const PrimarySecondary = ({ $theme }) =>
  $theme ? "var(--light-primary)" : "var(--dark-secondary)";
export const SecondaryPrimary = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "var(--dark-primary)";
export const SecondaryHover = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "var(--dark-hover)";
export const SecondaryTransparent = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "transparent";
export const TertiaryPrimary = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-primary)";
export const TertiarySecondary = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-secondary)";
export const TertiaryParagraph = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-paragraph)";
export const TertiaryHover = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-hover)";
export const BackgroundSecondary = ({ $theme }) =>
  $theme ? "var(--light-background)" : "var(--dark-secondary)";
export const OutlineSwitch = ({ $theme }) =>
  $theme ? "none" : "2px solid var(--dark-secondary)";

//Cursor switch
export const CursorAutoSwitch = ({ $theme }) =>
  $theme
    ? `url(${CursorAutoLight}) 12 12, auto`
    : `url(${CursorAutoDark}) 12 12, auto`;

export const CursorPointerSwitch = ({ $theme }) =>
  $theme
    ? `url(${CursorPointerLight}) 12 12, pointer`
    : `url(${CursorPointerDark}) 12 12, pointer`;
