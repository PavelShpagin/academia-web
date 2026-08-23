export type SupportedPlatform = "windows" | "macos" | "linux" | "android";

export interface DownloadTarget {
  href: string;
  platform: SupportedPlatform | null;
}

export const ACADEMIA_LINK_DOWNLOAD_PAGE = "https://theacademia.cloud/download/page/";

export const ACADEMIA_LINK_DOWNLOADS: Record<SupportedPlatform, string> = {
  windows: "https://theacademia.cloud/files/download/AcademiaLink-Setup-x64.exe/",
  macos: "https://theacademia.cloud/files/download/AcademiaLink-macOS-universal.dmg/",
  linux: "https://theacademia.cloud/files/download/AcademiaLink-Linux-x86_64.AppImage/",
  android: "https://theacademia.cloud/files/download/AcademiaLink-Android.apk/",
};

export function getAcademiaLinkDownload(
  userAgent: string,
  platform: string,
  maxTouchPoints = 0,
): DownloadTarget {
  const identity = `${userAgent} ${platform}`;

  if (/android/i.test(identity)) {
    return { href: ACADEMIA_LINK_DOWNLOADS.android, platform: "android" };
  }

  if (/iphone|ipad|ipod/i.test(identity) || (/macintel/i.test(platform) && maxTouchPoints > 1)) {
    return { href: ACADEMIA_LINK_DOWNLOAD_PAGE, platform: null };
  }

  if (/windows|win32|win64/i.test(identity)) {
    return { href: ACADEMIA_LINK_DOWNLOADS.windows, platform: "windows" };
  }

  if (/macintosh|mac os x|macintel/i.test(identity)) {
    return { href: ACADEMIA_LINK_DOWNLOADS.macos, platform: "macos" };
  }

  if (/linux|x11/i.test(identity) && !/cros/i.test(identity)) {
    return { href: ACADEMIA_LINK_DOWNLOADS.linux, platform: "linux" };
  }

  return { href: ACADEMIA_LINK_DOWNLOAD_PAGE, platform: null };
}
