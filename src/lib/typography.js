import {cls} from "./utils";

export const base = "tracking-[-0.6px] leading-[1.5]";

export const getTextSize = size => `text-[${size}px]`;

export const getFontStyle = style => `font-${style}`;
export const font_thin = getFontStyle("thin");
export const font_extralight = getFontStyle("extralight");
export const font_light = getFontStyle("light");
export const font_regular = getFontStyle("normal");
export const font_medium = getFontStyle("medium");
export const font_semibold = getFontStyle("semibold");
export const font_bold = getFontStyle("bold");
export const font_extrabold = getFontStyle("extrabold");
export const font_black = getFontStyle("black");

export const body_S = cls([base, getTextSize(12), font_regular]); // 12px, Regular, -0.6px, 150%
export const body_M = cls([base, getTextSize(14), font_regular]); // 14px, Regular, -0.6px, 150%
export const body_L = cls([base, getTextSize(16), font_regular]); // 16px, Regular, -0.6px, 150%
export const title_XXS = cls([base, getTextSize(14), font_bold]); // 14px, Bold, -0.6px, 150%
export const title_XS = cls([base, getTextSize(16), font_bold]); // 16px, Bold, -0.6px, 150%
export const title_S = cls([base, getTextSize(20), font_bold]); // 20px, Bold, -0.6px, 150%
export const title_M = cls([base, getTextSize(24), font_bold]); // 24px, Bold, -0.6px, 150%
export const title_L = cls([base, getTextSize(28), font_bold]); // 28px, Bold, -0.6px, 150%
export const heading_S = cls([base, getTextSize(32), font_bold]); // 32px, Bold, -0.6px, 150%
export const heading_M = cls([base, getTextSize(36), font_bold]); // 36px, Bold, -0.6px, 150%
export const heading_L = cls([base, getTextSize(40), font_black]); // 40px, Black, -0.6px, 150%
