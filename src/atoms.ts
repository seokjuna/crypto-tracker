import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: false, // 기본값은 라이트모드
})