import { UrlMatcher, UrlSegment } from '@angular/router';

export function routeStartWith(path: string): UrlMatcher {
  return (segments: UrlSegment[]) =>
    segments[0].path === path ? { consumed: segments } : { consumed: [] };
}
