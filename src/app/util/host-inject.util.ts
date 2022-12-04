import {inject, ProviderToken} from "@angular/core";

export function hostInject<T>(token: ProviderToken<T>): T {
  return inject(token, {host: true});
}
